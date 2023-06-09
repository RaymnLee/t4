import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";
import GitHubProvider from "next-auth/providers/github";


export default NextAuth({
  ...authOptions,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
});
