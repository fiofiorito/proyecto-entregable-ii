import { Modal, Pressable, StyleSheet, Text, View, Image } from 'react-native';

const ModalDeleteWorkout = ({ modalIsVisible, workoutSelected, handleDelete, handleModal }) => {
    return (
        <Modal
            visible={modalIsVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={() => handleModal([])} >
            <View style={styles.modalCenter}>
                <View style={styles.modalPopUp}>
                    <Text style={styles.modalTxt}>Seguro que quiere eliminar el entrenamiento {workoutSelected.title}?</Text>
                    <View style={styles.modalBtnsContainer}>
                        <Pressable onPress={handleDelete}>
                            <Image style={styles.img} source={require('../images/tick.png')} />
                        </Pressable>
                        <Pressable onPress={() => handleModal([])}>
                            <Image style={styles.img} source={require('../images/cross-thick.png')} />
                        </Pressable>
                    </View>
                </View>

            </View>

        </Modal>
    )
}

export default ModalDeleteWorkout

const styles = StyleSheet.create({
    modalCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2FDFF',
    },
    modalPopUp: {
        width: 250,
        height: 150,
        padding: 10,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
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
    modalTxt: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        color: '#CAF0F8',
        fontWeight: '500'
    },
    modalBtnsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    img: {
        width: 42,
        height: 42
    }
})