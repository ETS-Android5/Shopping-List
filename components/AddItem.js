import React, {useState} from "react";
import {View, Text,StyleSheet, TextInput, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";


const AddItem = ({addItem}) =>{
    const [text, setText] = useState('');

    const addingItem = (textValue) => setText(textValue);

    return(
        <View>
            <TextInput placeholder="Add Items..." style={styles.input} onChangeText={addingItem}  />
            
            {/* This will act as the add button */}
            <TouchableOpacity style={styles.box} onPress={() => addItem(text)} >
                <Text style={styles.btnText} ><Icon name="plus" size={21} style={styles.btn} />  Add it to List</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    box:{
        backgroundColor: '#0e153a',
        padding : 8,
        margin : 8,
        borderRadius : 16
    },
    btn: {
        color:'#21e6c1'
    },
    btnText: {
        color: '#21e6c1',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem;