//import './_mockLocation';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Map from './components/Map';
//import useLocation from './hooks/useLocation';

const Location = ({ isFocused }) => {
    //const [errorMsg] = useLocation(isFocused);

    return (
       <View style={styles.container}>
         <Map />
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        
    },
});

export default Location;

//{errorMsg ? <Text>Please enable location services</Text> : null}