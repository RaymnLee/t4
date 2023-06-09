import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";
import GitHubProvider from "next-auth/providers/github";


export default NextAuth({
  ...authOptions,
  pproviders: [
    GitHubProvider({
      clientId: GITHUB_CLIENT_ID || "",
      clientSecret: GITHUB_CLIENT_SECRET || "",
    }),
  ],
});
