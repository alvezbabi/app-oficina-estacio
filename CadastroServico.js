import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CadastroServico = () => {
  const [descricao, setDescricao] = useState('');

  const handleCadastrarServico = () => {
    // Lógica para salvar o serviço
    console.log(`Serviço cadastrado: ${descricao}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Serviço</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição do Serviço"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Cadastrar Serviço" onPress={handleCadastrarServico} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
});

export default CadastroServico;
