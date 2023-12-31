import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const httpLink = new HttpLink({
          uri: process.env.TREEVIAH_GRAPHQL_ENDPOINT,
        });

        const authMiddleware = setContext(async (operation, { headers }) => {
          return {
            headers: {
              ...headers,
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          };
        });

        const client = new ApolloClient({
          link: from([authMiddleware, httpLink]),
          cache: new InMemoryCache(),
        });

        const { data } = await client.mutate({
          mutation: gql`
            mutation Login($email: String!, $password: String!) {
              login(loginInput: { email: $email, password: $password }) {
                accessToken
              }
            }
          `,
          variables: {
            email: email,
            password: password,
          },
        });

        console.log("user is authenticated", data);
        if (data) {
          return data;
        }

        throw new Error(`Invalid Credentials`);
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },

    async jwt({ token, user }) {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }

      return token;
    },
  },
  pages: {
    signIn: "/auth",
    signOut: "/",
  },
};
