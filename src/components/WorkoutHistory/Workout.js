import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Workout = ({ item, handleModal }) => {
    return (
        <View style={styles.task}>
            <View>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text>{item.desc}</Text>
            </View>
            <Button color='#000' title='delete' onPress={() => handleModal(item)} />
        </View>
    )
}

export default Workout

const styles = StyleSheet.create({
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
})