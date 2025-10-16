import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import CalculadoraScreen from "./screens/CalculadoraScreen";
import { Layout, Input, ButtonPrimary, ButtonRounded } from "./components";

export default function App() {
  return (
    <Layout title="Contacto">
      <Input label="Email:" placeholder="name@mail.com" type="email-addres" />
      <Input label="Asunto:" placeholder="Consulta" />
      <Input label="Mensaje:" placeholder="Escribir aqui..." lines={4} />
      {/* <ButtonPrimary
        title="Enviar"
        onPress={() => alert('Mensaje enviado ✅')}
      /> */}
      
      <ButtonRounded
        title="Enviar"
        onPress={() => Alert.alert("Enviado", "Mensaje enviado correctamente")}
      />
      <ButtonRounded
        title="Cancelar"
        isPrimary={false}
        onPress={() => Alert.alert("Cancelado", "Envio cancelado")}
      />
    </Layout>
  );
}
