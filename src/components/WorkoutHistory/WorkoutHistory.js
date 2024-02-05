import { StyleSheet, View, FlatList } from 'react-native';
import Workout from './Workout';

const WorkoutHistory = ({ workoutHistory, handleModal }) => {
    return (
        <View style={styles.workoutHistoryContainer}>
            <FlatList
                data={workoutHistory}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Workout item={item} handleModal={handleModal} />
                )
                }
            />
        </View>
    )
}

export default WorkoutHistory

const styles = StyleSheet.create({
    workoutHistoryContainer: {
        width: '90%',
        gap: 10,
        alignItems: 'center',
        flex: 1,
        flexGrow: 1
    },
})