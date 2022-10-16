import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './Style';

export default function App() {

  const [value, setValue] = useState(1); 

  
  return (
    <View style={styles.container}> 
      <Text style={{ marginBottom: 50, borderWidth: 2, borderColor: 'green', padding: 10 }}>Text Baru</Text>
      {
        Array(value).fill(1).map((_,i)=>{
          return (
            <Text key={i} style={styles.text}>{i+1}. Hello</Text>
          )
        })
      }
      <Button onPress={()=>setValue(value + 1)} style={styles.tombol} title={"Pencet"} />
      <Text>{value}</Text>
      <View style={styles.tombol}>
      </View>
    </View> 
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     margin: 10
    
//   },
//   text: {
//     color: "#ff0000"
//   },
//   tombol: {
//     flex: 0.3,
//     backgroundColor: "grey",
//     borderWidth: 5,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     width: 600
//   }
// });

