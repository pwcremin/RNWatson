/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import { Button } from 'react-native-elements';


import { TextToSpeech } from 'react-native-watson'

TextToSpeech.initialize( "dfda60f6-0689-428f-baa6-c088beed6933", "WqUo7lQ8T2ao" )

export default class TextToSpeechExample extends Component
{

    constructor( props )
    {
        super( props )

        this.state = { text: '' };
    }

    componentDidMount()
    {
        TextToSpeech.getVoices()
            .then( voices => voices.forEach( voice => console.log( 'voice: ' + voice.name ) ) )

    }


    speak()
    {
        TextToSpeech.synthesize( this.state.text )
            .catch( error => console.log( error ) )
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    TextToSpeech
                </Text>

                <TextInput
                    style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={( text ) => this.setState( { text } )}
                    placeholder='Enter text and turn it to speech'
                    value={this.state.text}
                />

                <Button
                    raised
                    buttonStyle={{ backgroundColor: 'blue', borderRadius: 10, margin: 20 }}
                    textStyle={{ textAlign: 'center' }}
                    title={`submit`}

                    onPress={() => this.speak()}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create( {
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
} );

