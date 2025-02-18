import React from "react";
import {View, StyleSheet } from "react-native";   
import BotaoProps from './components/BotoaProps'

const App =()=>{
const handlePress =()=>{
  console.log('Botão Pressinado!');
};

const Teste =()=>{
  console.log('segundo Teste');
};

return (
  <View style={style.container}>
    <BotaoProps label='clique aqui' corFundo="green" onPress={handlePress}/>
    <BotaoProps label='clique agora' corFundo="pink" onPress={Teste}/>
  </View>
   );
  };

  const style =StyleSheet.create({
    container: {
      flex: 10,
      justifyContent: 'center',
      alignItems: 'center',
    
    },
  });
  export default App;