import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import CadastroServico from './CadastroServico';
import CadastroCliente from './CadastroCliente';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu Principal' }} />
        <Stack.Screen name="CadastroServico" component={CadastroServico} options={{ title: 'Cadastro de Serviço' }} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} options={{ title: 'Cadastro de Cliente' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
