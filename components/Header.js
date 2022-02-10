import React from "react";
import {View, Text,StyleSheet} from "react-native";


const Header = ({title}) =>{
    return(
      <View style={styles.header}>
          <Text style={styles.text}>{title}</Text>
      </View>
    )
}

// IF no props is passed, the default value of the title
// will be showed as "Todo List"
Header.defaultProps={
    title: 'Todo List'
}

const styles = StyleSheet.create({
  header : {
      height: 60,
      padding: 15,
      backgroundColor: '#3d5af1'
  },
  text:{
      color: '#fff',
      fontSize: 24,
      textAlign: 'center'
  }
})

export default Header;