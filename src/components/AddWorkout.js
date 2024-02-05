import { StyleSheet, View, TextInput, Pressable, Image } from 'react-native';

const AddWorkout = ({ handleworkoutTitle, workoutTitle, handleworkoutDesc, workoutDesc, addWorkout }) => {
    return (
        <View style={styles.newWorkoutContainer}>
            <View style={styles.workoutInputs}>
                <TextInput placeholderTextColor='#0077B6'
                    onChangeText={handleworkoutTitle}
                    style={styles.input}
                    placeholder='New Workout'
                    value={workoutTitle} />
                <TextInput placeholderTextColor='#0077B6'
                    onChangeText={handleworkoutDesc}
                    style={styles.input}
                    placeholder='Descripcion del entrenamiento'
                    value={workoutDesc} />
            </View>
            <Pressable onPress={addWorkout}>
                <Image style={styles.img} source={require('../images/add.png')} />
            </Pressable>
        </View>
    )
}

export default AddWorkout

const styles = StyleSheet.create({
    newWorkoutContainer: {
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
    workoutInputs: {
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