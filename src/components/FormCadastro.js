import React, { Component } from 'react';
import {
  StyleSheet, Button, TextInput,
  Text,View
} from 'react-native';

export default props => (
	<View style={{ flex: 1, padding: 10 }}>
		<View style={{ flex: 4, justifyContent: 'center' }}>
			<TextInput placeholder="Nome" style={{ fontSize: 20, height: 45}}/>
			<TextInput placeholder="E-mail" style={{ fontSize: 20, height: 45}}/>
			<TextInput placeholder="Senha" style={{ fontSize: 20, height: 45}}/>
		</View>
		<View style={{ flex: 1 }}>
			<Button title="Cadastrar" color="#006400" onPress={() => false} />
		</View>
	</View>
);