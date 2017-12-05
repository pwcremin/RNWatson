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
    ScrollView,
    View,
    TextInput
} from 'react-native';

import { Button } from 'react-native-elements';

import { Conversation } from 'react-native-watson'

Conversation.initialize( "ec4a94d9-6f30-4f54-a45d-b415145de712", "dnxsKmc2LYkP" )



export default class ConversationExample extends Component
{

    constructor( props )
    {
        super( props )

        this.workspaceId = "b3f43d46-c2fd-4af7-a16b-7092e658c89a";

        this.state = { text: '', output: '', context: null };
    }

    componentDidMount()
    {
        Conversation.message(this.workspaceId)
            .then(response => {
                console.log(JSON.stringify(response))
                this.setState({output: response.output.text, context: response.context})
            })
    }

    submit()
    {
        if(this.state.context)
        {
            let input = {
                text: this.state.text,
                context: this.state.context
            }

            Conversation.message(this.workspaceId, input)
                .then(response => {
                    console.log(JSON.stringify(response))
                    this.setState({output: response.output.text, context: response.context})
                })
        }

    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Conversation
                </Text>

                <TextInput
                    style={{ height: 50, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={( text ) => this.setState( { text } )}
                    defaultValue='text input'
                    value={this.state.text}
                />

                <Text style={styles.welcome}>
                    {this.state.output}
                </Text>

                <Button
                    raised
                    buttonStyle={{ backgroundColor: 'blue', borderRadius: 10, margin: 20 }}
                    textStyle={{ textAlign: 'center' }}
                    title={`submit`}

                    onPress={() => this.submit()}
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

