import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import styled from "styled-components/native";

export default function Header() {
	return (
		<Container>
			<MyButton text="Delieve" bg="#004080" />
			<MyButton text="Pickup" bg="green" />
		</Container>
	);
}

const MyButton = ({ text, bg }) => {
	return (
		<View
			style={{
				margin: "30px",
				backgroundColor: bg,
				text: "white",
				padding: "10px",
				borderRadius: "2px",
			}}
		>
			<TouchableOpacity>
				<Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
};

const Container = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
`;
