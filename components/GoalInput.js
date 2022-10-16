import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState('');
  const goalInputHandler = (evt) => {
    setEnterGoalText(evt);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enterGoalText);
    setEnterGoalText('');
  };
  return (
    <Modal
      visible={props.visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/img/favicon.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={addGoalHandler}
              color='#B180F0'
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={props.onCancel}
              color='#F31282'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311B6B',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E4D0FF',
    backgroundColor: '#E4D0FF',
    color: '#120438',
    width: '80%',
    borderRadius: 6,
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 70,
    height: 70,
    margin: 20,
  },
});
