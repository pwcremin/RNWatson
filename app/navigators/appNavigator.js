import React from 'react';

import { StackNavigator } from 'react-navigation';

import TextToSpeech from '../components/textToSpeech';
import SpeechToText from '../components/speechToText';
import ToneAnalyzer from '../components/toneAnalyzer';
import NaturalLanguageUnderstanding from '../components/naturalLanguageUnderstanding';
import App from '../components/app';

export const AppNavigator = StackNavigator( {
        App: { screen: App },
        TextToSpeech: { screen: TextToSpeech },
        SpeechToText: { screen: SpeechToText },
        ToneAnalyzer: { screen: ToneAnalyzer },
        NaturalLanguageUnderstanding: { screen: NaturalLanguageUnderstanding },
    },
    {
        navigationOptions: {
            headerStyle: {position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0)'},
        },
        initialRouteName: 'App'
    }
);

export default AppNavigator