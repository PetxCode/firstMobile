import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styled = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
});

export default function App() {
	return (
		<View style={styled.container}>
			<Text>App Test</Text>
		</View>
	);
}
