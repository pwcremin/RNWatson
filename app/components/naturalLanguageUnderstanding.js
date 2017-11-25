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
    TextInput,
    Dimensions,
    ScrollView
} from 'react-native';

import { NaturalLanguageUnderstanding } from 'react-native-watson'

NaturalLanguageUnderstanding.initialize( "5bed33bc-c987-416d-bbcd-9496239759d4", "rnmtu7IPxi8N" )

import { Button } from 'react-native-elements';

let { height, width } = Dimensions.get( 'window' );

export default class NaturalLanguageUnderstandingExample extends Component
{

    constructor( props )
    {
        super( props )

        this.state = {
            contentToAnalyze: "https://stackoverflow.com/questions/41067025/how-to-retrieve-a-value-from-dictionary-in-swift-3",
            results: ""
        };

        this.analyzeContent = this.analyzeContent.bind(this);
    }

    componentDidMount()
    {

        this.analyzeContent();
    }

    analyzeContent()
    {
        if(!this.state.contentToAnalyze.replace(/\s/g, '').length)
        {
            this.setState( { results: "Please enter text to be analyzed" } )
            return
        }

        let features = {
            concepts: {
                limit: 5
            },
            categories: true
        }

        NaturalLanguageUnderstanding.analyzeContent( { url: this.state.contentToAnalyze }, features )
            .then( results =>
            {
                this.setState( { results: JSON.stringify( results, null, "   " ) } )
            } )
            .catch( error => {
                this.setState( { results: "Error: " + error.message } )
            })
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    NaturalLanguageUnderstanding
                </Text>

                <TextInput
                    style={{ width: width * 0.75, height: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(textToAnalyze) => this.setState({contentToAnalyze: textToAnalyze})}
                    value={this.state.contentToAnalyze}
                    multiline={true}
                />

                <Button
                    raised
                    buttonStyle={{ backgroundColor: 'blue', borderRadius: 10, margin: 20 }}
                    textStyle={{ textAlign: 'center' }}
                    title={`submit`}

                    onPress={this.analyzeContent}
                />

                <ScrollView>
                    <Text
                        style={{ height: height, width: width * 0.75 }}
                    >
                        {this.state.results}
                    </Text>
                </ScrollView>

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

