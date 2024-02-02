import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bienvenido!</Text>
      </View>
      <View style={styles.newTaskContainer}>
        <TextInput style={styles.input} placeholder='New Task' />
        <Button color='#000' title='+' />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.task}>
          <View>
            <Text>Tarea</Text>
            <Text>Descripcion Tarea</Text>
          </View>
          <Button color='#000' title='delete' />
        </View>
        <View style={styles.task}>
          <View>
            <Text>Tarea</Text>
            <Text>Descripcion Tarea</Text>
          </View>
          <Button color='#000' title='delete' />
        </View>
        <View style={styles.task}>
          <View>
            <Text>Tarea</Text>
            <Text>Descripcion Tarea</Text>
          </View>
          <Button color='#000' title='delete' />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  newTaskContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  }
});
