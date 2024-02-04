import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddWorkout = ({ handleTaskTitle, taskTitle, handleTaskDesc, taskDesc, addTask }) => {
    return (
        <View style={styles.newTaskContainer}>
            <View style={styles.taskInputs}>
                <TextInput onChangeText={handleTaskTitle} style={styles.input} placeholder='New Workout' value={taskTitle} />
                <TextInput onChangeText={handleTaskDesc} style={styles.input} placeholder='Descripcion del entrenamiento' value={taskDesc} />
            </View>
            <Button color='#000' title='+' onPress={addTask} />
        </View>
    )
}

export default AddWorkout

const styles = StyleSheet.create({
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
    taskInputs: {
        width: '90%',
        gap: 10
    },
    input: {
        width: '95%',
        padding: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
    },
})