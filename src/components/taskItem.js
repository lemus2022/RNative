import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

const TaskItem = ({task, onPress}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={onPress}>
        <AntDesing
          name="delete"
          color={'#D2ECFD'}
          size={27}
          style={style.buttonDelete}
        />
        <AntDesing
            name="edit"
            color={'#919596'}
            size={25}
            style={style.editButton}
          />
      </TouchableOpacity>
      <Text style={style.text}>{task}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#1880c9',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    height: 90,
  },
  button: {
    backgroundColor: '#12a4ff',
    height: 35,
    width: 35,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: '#12a4ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
    borderRadius: 10,
    height: 35,
    width: 35,
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 22,
  },
  buttonDelete: {
    color: 'black',
    paddingHorizontal: 2,
    paddingVertical: 1,
    
  },
});

export default TaskItem;
