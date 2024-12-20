import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Check credentials here (you can replace with database checks)
        if (credentials.username === 'admin' && credentials.password === 'admin') {
          return { id: 1, role: 'admin' }; // return user data on success
        }
        if (credentials.username === 'staff' && credentials.password === 'staff') {
          return { id: 2, role: 'staff' }; // return user data on success
        }
        if (credentials.username === 'user' && credentials.password === 'user') {
          return { id: 3, role: 'user' }; // return user data on success
        }
        return null; // if credentials are invalid
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Using JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Store the role in the JWT
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role; // Add role to session
      return session;
    },
  },
};

export default NextAuth(authOptions);
