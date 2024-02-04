import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native'
import React from 'react'

const Workout = ({ item, handleModal }) => {
    return (
        <View style={styles.task}>
            <View style={styles.texts}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskDesc}>{item.desc}</Text>
            </View>
            <Pressable onPress={() => handleModal(item)}>
                <Image style={styles.img} source={require('../../images/trash-bin.png')} />
            </Pressable>
        </View>
    )
}

export default Workout

const styles = StyleSheet.create({
    task: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '96%',
        borderRadius: 16,
        backgroundColor: '#A6E5F2',
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginVertical: 15,
        marginHorizontal: '2%',
        shadowColor: "#0077B6",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.9,
        elevation: 5,

    },
    texts: {
        gap: 7
    },
    taskTitle: {
        fontWeight: '600',
        fontSize: 18,
        color: '#03045E'
    },
    taskDesc: {
        color: '#03045E'
    },
    img: {
        width: 28,
        height: 28,

    }
})