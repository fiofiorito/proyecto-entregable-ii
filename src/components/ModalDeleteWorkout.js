import { Button, Modal, StyleSheet, Text, View } from 'react-native';

const ModalDeleteWorkout = ({ modalIsVisible, taskSelected, handleDelete, handleModal }) => {
    return (
        <Modal
            visible={modalIsVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={() => handleModal([])} >
            <View style={styles.modalCenter}>
                <View style={styles.modalPopUp}>
                    <Text style={styles.modalTxt}>Seguro que quiere eliminar el entrenamiento {taskSelected.title}?</Text>
                    <View style={styles.modalBtnsContainer}>
                        <Button color='#000' title='si' onPress={handleDelete} />
                        <Button color='#000' title='no' onPress={() => handleModal([])} />
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
        backgroundColor: '#F2F2F2',
        // agregar un BLUR de fondo
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
    modalTxt: {
        fontSize: 16,
        marginVertical: 10
    },
    modalBtnsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    }
})