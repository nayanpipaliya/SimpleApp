import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
} from 'react-native';

const Label = ( props ) => {
    return (
        <Text >
            { props.text }
        </Text>
    );
}

const styles =  StyleSheet.create({
   textLabel: {
       fontSize: 20,
       fontWeight: 'bold',
       fontFamily: 'verdana',
       marginBottom: 10,
       color: '#595856'
   }
});

export default Label;