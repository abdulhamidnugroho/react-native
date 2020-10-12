import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return <View>
    <Text>Enter password:</Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />

        { password.length < 4 ? <Text>Password must at least 4 char</Text> : null }
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