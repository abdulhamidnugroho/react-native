import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return <View>
      <Text style={styles.text}>Ok 1!</Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo" 
      />
      <Button
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo" 
      />
      <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo" 
      />
      <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo" 
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo!</Text>
      </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
