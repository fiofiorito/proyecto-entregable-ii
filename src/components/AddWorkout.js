import { StyleSheet, View, TextInput, Pressable, Image } from 'react-native';

const AddWorkout = ({ handleTaskTitle, taskTitle, handleTaskDesc, taskDesc, addTask }) => {
    return (
        <View style={styles.newTaskContainer}>
            <View style={styles.taskInputs}>
                <TextInput placeholderTextColor='#0077B6'
                    onChangeText={handleTaskTitle}
                    style={styles.input}
                    placeholder='New Workout'
                    value={taskTitle} />
                <TextInput placeholderTextColor='#0077B6'
                    onChangeText={handleTaskDesc}
                    style={styles.input}
                    placeholder='Descripcion del entrenamiento'
                    value={taskDesc} />
            </View>
            <Pressable onPress={addTask}>
                <Image style={styles.img} source={require('../images/add.png')} />
            </Pressable>
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
        borderRadius: 16,
        backgroundColor: '#00B4D8',
        padding: 20,
        marginVertical: 15,
        shadowColor: "#0077B6",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    taskInputs: {
        width: '90%',
        gap: 10
    },
    input: {
        width: '95%',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#CAF0F8'
    },
    img: {
        width: 28,
        height: 28,
    }
})