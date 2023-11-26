import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const handler = NextAuth({
  
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    })
  ],
  // theme : {
  //   logo : "https://papareact.com/sq0",
  //   brandColor : "#F13287",
  //   colorScheme : "auto"
  // }
  // pages : {
  //   signIn : "/auth/signin"
  // },
  callbacks : {
    async session({ session, token, user }) {
      session.user.uid = token.sub;
      return session;
    }
  }
})

export { handler as GET, handler as POST }