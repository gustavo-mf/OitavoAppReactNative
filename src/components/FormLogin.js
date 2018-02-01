import React from 'react';
import {
  Button, TextInput,
  Text,View, TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const formLogin = props => {
  console.log(props);
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
      </View>
      <View style={{ flex: 2}}>
        <TextInput value={props.email} style={{ fontSize: 20, height: 45}} placeholder='E-mail' />
        <TextInput value={props.senha} style={{ fontSize: 20, height: 45}} placeholder='Senha' />
        <TouchableHighlight onPress={ () => Actions.formCadastro() } >
          <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastre-se</Text>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 2}}>
        <Button title="Acessar" color="#006400" onPress={() => false} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps, null)(formLogin);