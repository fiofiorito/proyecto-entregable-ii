import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
// custom components
import ModalDeleteWorkout from './src/components/ModalDeleteWorkout';
import AddWorkout from './src/components/AddWorkout';
import WorkoutHistory from './src/components/WorkoutHistory/WorkoutHistory';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [workoutSelected, setWorkoutSelected] = useState({});
  const [workoutTitle, setWorkoutTitle] = useState('')
  const [workoutDesc, setWorkoutDesc] = useState('')
  const [workoutHistory, setWorkoutHistory] = useState([]);

  const handleworkoutTitle = (title) => {
    setWorkoutTitle(title);
  }
  const handleworkoutDesc = (desc) => {
    setWorkoutDesc(desc)
  }
  const addWorkout = () => {
    const newWorkout = {
      id: uuid.v4(),
      date: new Date().toLocaleDateString(),
      title: workoutTitle,
      desc: workoutDesc
    }
    setWorkoutHistory([...workoutHistory, newWorkout]);

    setWorkoutTitle('');
    setWorkoutDesc('');
  }

  const handleModal = (item) => {
    setWorkoutSelected(item)
    setModalIsVisible(!modalIsVisible);
  }

  const handleDelete = () => {
    setWorkoutHistory(workoutHistory.filter(workout => workout.id != workoutSelected.id));
    setModalIsVisible(!modalIsVisible);
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Bienvenido!</Text>
        </View>
        <AddWorkout
          handleworkoutTitle={handleworkoutTitle}
          workoutTitle={workoutTitle}
          handleworkoutDesc={handleworkoutDesc}
          workoutDesc={workoutDesc}
          addWorkout={addWorkout}
        />
        <View style={styles.historyTitleContainer}>
          <Text style={styles.historyTitle}>Historial de entrenamientos:</Text>
        </View>
        {
          workoutHistory.length === 0 && <View style={styles.emptyHistory}>
            <Text style={styles.emptyHistoryText}>No tienes entrenamientos registrados</Text>
          </View>
        }
        {
          workoutHistory.length > 0 && <WorkoutHistory workoutHistory={workoutHistory} handleModal={handleModal} />
        }
        <ModalDeleteWorkout
          modalIsVisible={modalIsVisible}
          workoutSelected={workoutSelected}
          handleDelete={handleDelete}
          handleModal={handleModal}
        />
      </View>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDFAFD',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: '700',
    color: '#03045E'
  },
  historyTitleContainer: {
    width: '90%',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 5,
    paddingBottom: 3,
    borderStyle: 'solid',
    borderBottomColor: '#CAF0F8',
    borderBottomWidth: 1
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#03045E'
  },
  emptyHistory: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,

  },
  emptyHistoryText: {
    color: '#00B4D8',
    fontSize: 14
  }
});
