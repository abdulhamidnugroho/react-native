import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return <View>
    <Text>Enter name</Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        <Text>My Name is {name}</Text>
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 2
    }
});

export default TextScreen;