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
    PermissionsAndroid,
    Platform
} from 'react-native';

import { Button } from 'react-native-elements';

import { SpeechToText } from 'react-native-watson'

SpeechToText.initialize( "1de36b6c-d444-4827-ad44-0034c3a4dbb1", "y8xgh3J8fhl0" )

export default class SpeechToTextExample extends Component {

    constructor(props)
    {
        super(props)

        this.state = { isRecording: false };
    }

    componentDidMount()
    {
        if(Platform.OS === 'android')
        {
            this.requestAudioPermission()
                .catch(e => console.log(e))
        }
    }

    record()
    {
        SpeechToText.startStreaming((error, text) =>
        {
            this.setState({text})
        })
    }


    async requestAudioPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    'title': 'Record Audio Permission',
                    'message': 'Speech to Text needs access to your microphone'
                }
            )
            if (granted === true || granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can record audio")
            } else {
                console.log("RECORD_AUDIO permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }

    componentWillUnmount()
    {
        this.stop();
    }

    stop()
    {
        SpeechToText.stopStreaming()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    SpeechToText
                </Text>

                <Text
                    style={{height: 300, width: 300, borderColor: 'gray', borderWidth: 1}}
                >
                    {this.state.text}
                </Text>

                <Button
                    raised
                    buttonStyle={{backgroundColor: 'blue', borderRadius: 10, margin: 20}}
                    textStyle={{textAlign: 'center'}}
                    title={this.state.isRecording ? 'stop' : 'record'}

                    onPress={()=> {
                        this.setState({isRecording:!this.state.isRecording});
                        this.state.isRecording ? this.stop() : this.record();
                    }}
                />

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

