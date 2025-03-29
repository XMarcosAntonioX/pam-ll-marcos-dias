import { Text, View } from "react-native";
import { Button } from '@rneui/themed';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Oi Marcos</Text>
 
      <Button title="Solid" size="sm" />
      <Button title="Outline" type="outline" /> 
      
      
      
    </View>
  );
}
