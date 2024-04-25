import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import HomeImage from "../../../assets/images/home.png";
import googleImage from "../../../assets/images/Google.png";
import * as WebBrowser from "expo-web-browser";
import { Button } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
WebBrowser.maybeCompleteAuthSession();


export default function Login() {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);
    return (
        <View style={{ display: "flex", alignItems: "center" }}>
            <Image source={HomeImage} alt="home" style={{ marginTop: 50 }} />
            <View
                style={{
                    backgroundColor: Colors.PRIMARY,
                    height: 400,
                    width: "100%",
                    padding: 20,
                    marginTop: -190
                }}
            >
                <Text style={{ textAlign: "center", fontSize: 35, color: Colors.WHITE, fontFamily: "outfit-bold" }}>
                    {`</>`}
                </Text>
                <Text style={{ textAlign: "center", fontSize: 35, color: Colors.WHITE, fontFamily: "outfit-bold" }}>
                    CODEBOX 1
                </Text>
                <Text style={{ textAlign: "center", fontSize: 20, paddingLeft: 25, paddingRight: 25, color: Colors.WHITE, fontFamily: "outfit-light" }}>
                    Your Ultimate Programming Learning Box
                </Text>
                <TouchableOpacity onPress={onPress} style={{ backgroundColor: Colors.WHITE, display: "flex", flexDirection: "row", justifyContent: "center", padding: 10, marginTop: 15, borderRadius: 99, gap: 5, alignItems: "center" }}>
                    <Image source={googleImage} width={30} height={30} />
                    <Text style={{ color: Colors.PRIMARY, fontSize: 18, fontFamily: "outfit-regular" }}>Sign In With Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
