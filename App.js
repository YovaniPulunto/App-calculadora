import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculadoraScreen from './screens/CalculadoraScreen';
import { Layout } from './components';
import { Button } from 'react-native-web';
export default function App() {
  return (
   <Layout title="Contacto" >
 <Button
  title="Enviar"
  color="rgba(66, 214, 12, 0.7)"
  onPress={() => alert('Mensaje enviado ✅')}
  accessibilityLabel="Enviar formulario de contacto"
/>

</Layout>
  );
};



