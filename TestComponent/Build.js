import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default function Build() {
	return (
		<View style={styles.container}>
			<MyButton text="Move to new page" />
		</View>
	);
}

const MyButton = ({ text }) => {
	return (
		<View>
			<Text>{text}</Text>
			<TouchableOpacity
				onPress={() => {
					console.log("I'm Pressed");
				}}
			>
				Move
			</TouchableOpacity>
		</View>
	);
};
