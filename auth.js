import NextAuth, { CredentialsSignin } from "next-auth"
import Google from "next-auth/providers/google"

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password"
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async signIn({ user }) {
      if (user.email === process.env.EMAIL) {
        return true;
      }
      return false;
    },
  }, 
  secret: process.env.NEXTAUTH_SECRET,
})