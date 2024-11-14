import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CadastroOrcamento = () => {
  const [placa, setPlaca] = useState('');
  const [servicos, setServicos] = useState('');
  const [produtos, setProdutos] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valorTotal, setValorTotal] = useState('');

  const handleCadastrarOrcamento = () => {
    // Lógica para calcular o valor total e salvar o orçamento
    console.log(`Orçamento para o veículo ${placa}: Serviços - ${servicos}, Produtos - ${produtos}, Quantidade - ${quantidade}, Valor Total - ${valorTotal}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Orçamento</Text>
      <TextInput style={styles.input} placeholder="Placa do Veículo" value={placa} onChangeText={setPlaca} />
      <TextInput style={styles.input} placeholder="Serviços" value={servicos} onChangeText={setServicos} />
      <TextInput style={styles.input} placeholder="Produtos" value={produtos} onChangeText={setProdutos} />
      <TextInput style={styles.input} placeholder="Quantidade" value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Valor Total" value={valorTotal} onChangeText={setValorTotal} keyboardType="numeric" />
      <Button title="Cadastrar Orçamento" onPress={handleCadastrarOrcamento} />
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

export default CadastroOrcamento;
