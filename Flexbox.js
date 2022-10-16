import { Text, View } from "react-native";
function Flexbox() {
  return ( 
    <View style={{ 
      padding: 50, 
      flexDirection: 'row', 
      width: '80%', 
      height: 300, 
      justifyContent: 'space-around', 
      alignItems: 'stretch',
      backgroundColor: 'yellow'}}>
        {/* In default layout of React Native is already exist Flexbox */}
      <View style={{ 
        flex: 1,
        // Dengan memberi nilai 1  membuat dia akan mengambil lebih banyak ruang dari sumbu utamanya
        // Dan valuenya ini relatif jadi ya nanti ngikutin ukurannya
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
       }}>
        <Text>1</Text>
      </View>
      <View style={{ 
        flex: 3,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
       }}>
        <Text>2</Text>
      </View>
      <View style={{ 
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
       }}>
        <Text>3</Text>
      </View>
    </View>
   );
}

export default Flexbox;