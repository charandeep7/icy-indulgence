import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { checkUserEmailExists } from '../../authorization/signInValidation'
import bcrypt from 'bcrypt'

export const options: NextAuthOptions = {
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials): Promise<any> {
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error('Please provide all details')
                }
                const user = await checkUserEmailExists(credentials.email)
                if (!user) {
                    throw new Error("No user found");
                }
                const isCorrect = await bcrypt.compare(credentials.password, user.password);
                if (!isCorrect) {
                    throw new Error("Wrong Password");
                }
                return user
            }
        })
    ],
    callbacks: {
        // async jwt({ token, user }) {
        //   if (user) {
        //     token.email = user.email;
        //     token.id = user.id;
        //   }
        //   return token;
        // },
        // async session({ session, user }) {
        //   if (user) {
        //     session.user.email = token.email;
        //     session.user.id = token.id;
        //   }s
        //   return session;
        // },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
}