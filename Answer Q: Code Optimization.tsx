import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TextInputProps, TouchableOpacity, Text } from 'react-native';

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = (props) => {
    return <TextInput {...props} />;
};

type ScreenProps = {
    navigation: any; // Update with the appropriate type for navigation
};

const Screen: React.FC<ScreenProps> = ({ navigation }) => {
    const [name, setName] = useState('');

    const submitName = () => {
        navigation.navigate('AnotherScreen', { name });
    };

    const handleNameChange = (text: string) => {
        setName(text);
    };

    return (
        <View style={styles.container}>
            <Input value={name} onChangeText={handleNameChange} />
            <TouchableOpacity onPress={submitName}>
                <Text style={styles.title}>DONE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: 'red',
    },
});

export default Screen;
