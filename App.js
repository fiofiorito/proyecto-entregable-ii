import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
// custom components
import ModalDeleteWorkout from './src/components/ModalDeleteWorkout';
import AddWorkout from './src/components/AddWorkout';
import WorkoutHistory from './src/components/WorkoutHistory/WorkoutHistory';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [taskList, setTaskList] = useState([]);

  const handleTaskTitle = (title) => {
    setTaskTitle(title);
  }
  const handleTaskDesc = (desc) => {
    setTaskDesc(desc)
  }
  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      created: new Date().toLocaleString(),
      title: taskTitle,
      desc: taskDesc
    }
    setTaskList([...taskList, newTask]);

    setTaskTitle('');
    setTaskDesc('');
  }

  const handleModal = (item) => {
    setTaskSelected(item)
    setModalIsVisible(!modalIsVisible);
  }

  const handleDelete = () => {
    setTaskList(taskList.filter(task => task.id != taskSelected.id));
    setModalIsVisible(!modalIsVisible);
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Bienvenido!</Text>
        </View>
        <AddWorkout
          handleTaskTitle={handleTaskTitle}
          taskTitle={taskTitle}
          handleTaskDesc={handleTaskDesc}
          taskDesc={taskDesc}
          addTask={addTask}
        />
        <View style={styles.historyTitleContainer}>
          <Text style={styles.historyTitle}>Historial de entrenamientos:</Text>
        </View>
        <WorkoutHistory taskList={taskList} handleModal={handleModal} />
        <ModalDeleteWorkout
          modalIsVisible={modalIsVisible}
          taskSelected={taskSelected}
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
  }
});
