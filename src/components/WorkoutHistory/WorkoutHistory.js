import { StyleSheet, View, FlatList } from 'react-native';
import Workout from './Workout';

const WorkoutHistory = ({ taskList, handleModal }) => {
    return (
        <View style={styles.taskInfo}>
            <FlatList
                data={taskList}
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
    taskInfo: {
        width: '90%',
        gap: 10
    },
})