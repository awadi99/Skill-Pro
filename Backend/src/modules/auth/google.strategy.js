import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./auth.model.js";
import { generateUsername } from "../../utils/generateUsername.js";

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/api/auth/google/callback",
            scope: ["profile", "email"]
        },
        async (accessToken, refreshToken, profile, done) => {
            try {

                const email = profile.emails?.[0]?.value;

                if (!email) {
                    return done(new Error("Email not found"), null);
                }

                let user = await User.findOne({ email });

                if (!user) {

                    const username = await generateUsername(profile.displayName);

                    user = await User.create({
                        fullName: profile.displayName,
                        email,
                        userName: username,
                        profilePic: profile.photos?.[0]?.value,
                        isGoogleUser: true
                    });

                }
                return done(null, user);
                
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

export default passport;