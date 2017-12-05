/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


import { Button } from 'react-native-elements';

export default class App extends Component {
    render() {

        let {navigation} = {...this.props}

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                   Bluemix Boilerplate
                </Text>

                <Button
                    raised
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10, margin: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={'TextToSpeech'}

                    onPress={()=> navigation.navigate('TextToSpeech')}
                >

                </Button>

                <Button
                    raised
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10, margin: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={'SpeechToText'}

                    onPress={()=> navigation.navigate('SpeechToText')}
                >

                </Button>

                <Button
                    raised
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10, margin: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={'ToneAnalyzer'}

                    onPress={()=> navigation.navigate('ToneAnalyzer')}
                >

                </Button>

                <Button
                    raised
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10, margin: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={'NaturalLanguageUnderstanding'}

                    onPress={()=> navigation.navigate('NaturalLanguageUnderstanding')}
                >

                </Button>

                <Button
                    raised
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10, margin: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={'Conversation'}

                    onPress={()=> navigation.navigate('Conversation')}
                >

                </Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

