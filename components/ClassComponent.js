import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput} from '@react-native-material/core';
import {IconButton, Colors} from 'react-native-paper';

const ClassComponent = ({class_, classes, setClasses}) => {
  const [update, setUpdate] = useState(false);

  // useEffect(() => {
  //   console.log(title);
  //   classes[class_.id] = {name: title, id: class_.id};
  //   setClasses(classes);
  //   console.log(classes);
  // }, [title, classes, setClasses, class_.id]);

  const handleTextChange = title => {
    classes.forEach((cls, id) => {
      if (cls.class_id === class_.class_id) {
        cls.class_title = title;
      }
    });
    setClasses(classes);
    setUpdate(!update);
  };

  return (
    <View>
      <View
        style={{
          marginTop: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontFamily: 'Roboto-Regular',
          fontSize: 40,
        }}>
        {class_.class_id >= 2 ? (
          <TextInput
            variant="standard"
            value={class_.class_title}
            onChangeText={title => {
              handleTextChange(title);
            }}
            style={{
              width: '50%',
              marginLeft: '5%',
            }}
          />
        ) : (
          <TextInput
            variant="standard"
            value={class_.class_title}
            onChangeText={title => {
              handleTextChange(title);
            }}
            style={{
              width: '70%',
              marginLeft: '5%',
            }}
          />
        )}
        {class_.class_id >= 2 && (
          <IconButton
            icon="delete"
            color={Colors.red800}
            size={40}
            onPress={() => {
              const classes_filtered = classes.filter(class__ => {
                return class__.class_id !== class_.class_id;
              });
              classes_filtered.forEach((cls, id) => {
                cls.class_id = id;
              });

              setClasses(classes_filtered);
            }}
            style={{margin: 0}}
          />
        )}
        <IconButton
          icon="camera"
          color={Colors.yellow800}
          size={40}
          onPress={() => console.log('Pressed')}
          style={{margin: 0, marginRight: '5%'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClassComponent;
