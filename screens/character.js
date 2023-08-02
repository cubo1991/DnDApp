import React from 'react';
import {View, StyleSheet} from 'react-native';
import GeneralInformation from './generalInformation';
import Characteristics from './characteristics';




const Character = () => {
    return (
        <View>
            <GeneralInformation/>   
            <Characteristics/>
        </View>
    );
}



export default Character;
