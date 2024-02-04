import { useState } from 'react';
import { Button, FlatList, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [chosenId, setChosenId] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    desc: '',
    id: ''
  });

  const handleTaskTitle = (title) => {
    const id = uuid.v4();
    setNewTask({ ...newTask, title: title, id });
  }
  const handleTaskDesc = (desc) => {
    setNewTask({ ...newTask, desc: desc });
  }
  const addTask = () => {
    setTaskList([...taskList, newTask]);
    setNewTask({ title: '', desc: '', id: '' });
  }

  const handleModal = (item) => {
    setChosenId(item.id)
    setModalIsVisible(true)
  }

  const handleDelete = () => {
    setTaskList(taskList.filter(task => task.id != chosenId))
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bienvenido!</Text>
      </View>
      <View style={styles.newTaskContainer}>
        <View style={styles.taskInfo}>
          <TextInput onChangeText={handleTaskTitle} style={styles.input} placeholder='New Task' value={newTask.title} />
          <TextInput onChangeText={handleTaskDesc} style={styles.input} placeholder='Description' value={newTask.desc} />
        </View>
        <Button color='#000' title='+' onPress={addTask} />
      </View>
      <View style={styles.taskInfo}>
        <FlatList
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.task}>
              <View>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text>{item.desc}</Text>
              </View>
              <Button color='#000' title='delete' onPress={() => handleModal(item)} />
            </View>
          )
          }
        />
      </View>
      <Modal
        visible={modalIsVisible}
        transparent={true}
      >
        <View style={styles.modalCenter}>
          <View style={styles.modalPopUp}>
            <Text style={styles.gralText}>Seguro?</Text>
            <View style={styles.modalBtns}>
              <Button title='si' onPress={() => {
                handleDelete()
                setModalIsVisible(false)
              }} />
              <Button title='no' onPress={() => setModalIsVisible(false)} />
            </View>
          </View>

        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: '700',
  },
  input: {
    width: '95%',
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  taskInfo: {
    width: '90%',
    gap: 10
  },
  newTaskContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    padding: 20,
    marginVertical: 15
  },
  scrollView: {
    width: '90%',
    flex: 1,
  },
  task: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  taskTitle: {
    fontWeight: '600',
    fontSize: 18
  },
  modalCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  modalPopUp: {
    width: 200,
    height: 100,
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  gralText: {
    fontSize: 16,
    marginVertical: 10
  },
  modalBtns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  }
});
