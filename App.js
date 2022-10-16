import { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoal] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandle = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enterGoalText) => {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enterGoalText, id: Math.random().toString() },
      // Flatitem kalo key dia otomatis ngambil, tapi kl bukan key harus di set
    ]);
    endAddGoalHandle();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#8648D8'
          onPress={startAddGoalHandler}
        />
        {/* Data */}
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandle}
        />
        {/* Hanya muncul dan hilang */}
        {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />} */}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                // Dibungkus di View karena rounded gak berpanguruh di ios kl di taro di
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, _) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: '#1E085A',
  },
  goalContainer: {
    flex: 5,
  },
});
