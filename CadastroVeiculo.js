import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CadastroVeiculo = () => {
  const [placa, setPlaca] = useState('');
  const [cpf, setCpf] = useState('');
  const [ano, setAno] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');

  const handleCadastrarVeiculo = () => {
    // Lógica para salvar o veículo
    console.log(`Veículo cadastrado: ${placa}, CPF: ${cpf}, Ano: ${ano}, Modelo: ${modelo}, Marca: ${marca}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Veículo</Text>
      <TextInput style={styles.input} placeholder="Placa" value={placa} onChangeText={setPlaca} />
      <TextInput style={styles.input} placeholder="CPF do Proprietário" value={cpf} onChangeText={setCpf} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Ano" value={ano} onChangeText={setAno} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Modelo" value={modelo} onChangeText={setModelo} />
      <TextInput style={styles.input} placeholder="Marca" value={marca} onChangeText={setMarca} />
      <Button title="Cadastrar Veículo" onPress={handleCadastrarVeiculo} />
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

export default CadastroVeiculo;
