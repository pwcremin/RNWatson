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
    CameraRoll,
    Platform
} from 'react-native';

import { Button } from 'react-native-elements';

var RNFS = require('react-native-fs');

import { VisualRecognition } from 'react-native-watson'

VisualRecognition.initialize( "1de36b6c-d444-4827-ad44-0034c3a4dbb1" )

export default class VisualRecognitionExample extends Component
{

    constructor( props )
    {
        super( props )

        this.state = { isRecording: false };
    }

    async componentDidMount()
    {
        let photo = await this.getLatestPhoto();

        //"assets-library://asset/asset.JPG?id=ED7AC36B-A150-4C38-BB8C-B6D696F4

        //uri = uri.split('//')[1];

        let id = photo.node.image.uri.split('id=')[1].split('&ext')[0]

        VisualRecognition.classify( [ id ] )
            .then( classifiedImages =>
            {
                console.log( classifiedImages );
            } )
            .catch( error =>
            {
                console.log( error )
            } )

        // var srcPath = photo.node.image.uri.replace('assets-library:', '')
        // var dstPath = RNFS.DocumentDirectoryPath + '/' + photo.node.image.filename;
        //
        // RNFS.copyFile(srcPath, dstPath)
        //     .then( () => {
        //         VisualRecognition.classify( [ uri ] )
        //             .then( classifiedImages =>
        //             {
        //                 console.log( classifiedImages );
        //             } )
        //             .catch( error =>
        //             {
        //                 console.log( error )
        //             } )
        //     })
        //     .catch( e => {
        //         console.log(e)
        //     })

    }

    getLatestPhoto()
    {
        return CameraRoll.getPhotos( { first: 1 } )
            .then( photos =>
            {
                return photos.edges[ 0 ]//.node.image.uri
            } )
    }


    render()
    {
        return (
            <View>
                <Text>
                    VisualRecognition
                </Text>
            </View>
        );
    }
}
