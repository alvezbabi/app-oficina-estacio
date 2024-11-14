import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ConsultaInformacao = () => {
  const [placa, setPlaca] = useState('');
  const [informacao, setInformacao] = useState(null);

  const handleConsultarInformacao = () => {
    // Lógica para buscar a ordem de serviço vinculada ao orçamento aprovado
    // Exemplo de dados fictícios:
    setInformacao({
      ordemServico: '12345',
      servicos: 'Troca de óleo, Alinhamento',
      produtos: 'Óleo, Filtro',
      valorTotal: 'R$ 300,00',
      status: 'Orçamento aprovado',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Informação</Text>
      <TextInput
        style={styles.input}
        placeholder="Placa do Veículo"
        value={placa}
        onChangeText={setPlaca}
      />
      <Button title="Consultar" onPress={handleConsultarInformacao} />

      {informacao && (
        <View style={styles.result}>
          <Text>Ordem de Serviço: {informacao.ordemServico}</Text>
          <Text>Serviços: {informacao.servicos}</Text>
          <Text>Produtos: {informacao.produtos}</Text>
          <Text>Valor Total: {informacao.valorTotal}</Text>
          <Text>Status: {informacao.status}</Text>
        </View>
      )}
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
  result: {
    marginTop: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default ConsultaInformacao;
