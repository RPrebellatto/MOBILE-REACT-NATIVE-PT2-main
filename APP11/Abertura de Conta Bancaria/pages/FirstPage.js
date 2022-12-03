import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const FirstPage = ({ navigation }) => {
  const [userName, setUserName,] = useState('Pedro Afonso Rogerio');
  const [userIdade, setUserIdade,] = useState('Idade');
  const [userSexo, setUserSexo,] = useState('Sexo');
  const [userEscolariedade, setUserEscolariedade,] = useState('Escolariedade');
  const [userLimite, setUserLimite,] = useState('Limite');
  const [userNacionalidade, setUserNacionalidade,] = useState('Nacionalidade');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Cadastro de conta bancaria
        </Text>

        <Text style={styles.textStyle}>
          Cadastre seu Nome
        </Text>
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Insira qualquer valor'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Cadastre sua Idade
        </Text>
        <TextInput
          value={userIdade}
          onChangeText={(useridade) => setUserIdade(useridade)}
          placeholder={'Insira qualquer valor'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Sexo:
        </Text>
        <TextInput
          value={userSexo}
          onChangeText={(usersexo) => setUserSexo(usersexo)}
          placeholder={'Insira qualquer valor'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Cadastre sua Escolariedade
        </Text>
        <TextInput
          value={userEscolariedade}
          onChangeText={(userescolariedade) => setUserEscolariedade(userescolariedade)}
          placeholder={'Insira qualquer valor'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Cadastre seu limite
        </Text>
        <TextInput
          value={userLimite}
          onChangeText={(userlimite) => setUserLimite(userlimite)}
          placeholder={'Insira qualquer valor'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Cadastre sua Nacionalidade
        </Text>
        <TextInput
          value={userNacionalidade}
          onChangeText={(usernacionalidade) => setUserNacionalidade(usernacionalidade)}
          placeholder={'Insira qualquer valor'}
          style={styles.inputStyle}
        />

        <Button style={styles.inputButton}
          title="Próxima Tela"
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: userName,
              paramKey2: userIdade,
              paramKey3: userSexo,
              paramKey4: userEscolariedade,
              paramKey5: userLimite,
              paramKey6: userNacionalidade,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
  inputButton: {
    backgroundColor: '#0026FF'
  }
});