import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import AppWithNavigation from './app/navigators/appNavigator';

export default class RNWatson extends Component
{
    render()
    {
        return (
            <View style={{ flex: 1 }}>
                <AppWithNavigation/>
            </View>
        );
    }
}

AppRegistry.registerComponent( 'RNWatson', () => RNWatson );
