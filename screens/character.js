import React from 'react';
import {View, StyleSheet} from 'react-native';
import GeneralInformation from './generalInformation';
import Characteristics from './characteristics';
import tw from 'twrnc';

const Character = () => {
    return (
        <View style={tw`space-y-8`}>
            <View style={tw`m-4`}>
                <GeneralInformation/>   
            </View>
            <View style={tw`m-4`}>
                <Characteristics/>
            </View>
        </View>
    );
}

export default Character;
