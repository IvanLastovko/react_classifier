import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import ClassComponent from './components/ClassComponent';
import {Button} from '@react-native-material/core';
import {RNCamera} from 'react-native-camera';

const App = () => {
  // const [newClassName, setNewClassName] = useState('');
  const [classes, setClasses] = useState([
    {
      class_id: 0,
      class_title: 'Class 0',
      photos: [],
    },
    {
      class_id: 1,
      class_title: 'Class 1',
      photos: [],
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <RNCamera style={styles.rnCamera} /> */}
      <ScrollView style={styles.scrollView}>
        {classes.map(class_ => {
          return (
            <ClassComponent
              key={class_.class_id}
              class_={class_}
              classes={classes}
              setClasses={setClasses}
            />
          );
        })}
        <Button
          variant="outlined"
          title="+ CLASS"
          color="#d4ac2d"
          onPress={() => {
            setClasses([
              ...classes,
              {
                class_id: classes.length,
                class_title: 'Class ' + classes.length,
                photos: [],
              },
            ]);
          }}
          style={{margin: 20}}
        />
        {/* <Text>{classes}</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
});

export default App;
