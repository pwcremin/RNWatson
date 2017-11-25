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


import { ToneAnalyzer } from 'react-native-watson'

ToneAnalyzer.initialize( "922fc442-a810-4f47-b1ba-79135730f5c2", "3bx5cWBCEIiq" )

export default class ToneAnalyzerExample extends Component
{

    constructor( props )
    {
        super( props )

        this.state = { text: '', toneAnalysis: null };
    }

    submit()
    {
        ToneAnalyzer.getTone( this.state.text )
            .then( toneAnalysis =>
            {
                this.setState({toneAnalysis})
            })
            .catch(error =>
            {
                console.log( 'error: ' + error)
            })

    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    TextToSpeech
                </Text>

                <TextInput
                    style={{ height: 300, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={( text ) => this.setState( { text } )}
                    defaultValue='I am certain that my fellow Americans expect that on my induction into the Presidency I will address them with a candor and a decision which the present situation of our people impel. This is preeminently the time to speak the truth, the whole truth, frankly and boldly. Nor need we shrink from honestly facing conditions in our country today. This great Nation will endure as it has endured, will revive and will prosper. So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance. In every dark hour of our national life a leadership of frankness and vigor has met with that understanding and support of the people themselves which is essential to victory. I am convinced that you will again give that support to leadership in these critical days.'
                    value={this.state.text}
                />



                <Button
                    raised
                    buttonStyle={{ backgroundColor: 'blue', borderRadius: 10, margin: 20 }}
                    textStyle={{ textAlign: 'center' }}
                    title={`submit`}

                    onPress={() => this.submit()}
                />

                <Text style={{margin: 20}}>
                    {this.state.toneAnalysis ? JSON.stringify(this.state.toneAnalysis).substring(0, 200) : ''}
                </Text>

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

