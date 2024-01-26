import * as React from 'react';
import { View, Text } from 'react-native';

export {}


export default function Workout({name , description , ImageURL , difficulty , id }){ 
    return(

        <View style={{}}>
            <Image source={ require({ImageURL})} />
            <View>
                <Text>{name}</Text>
                <Text>{description}</Text>
            </View>
            <View></View>
            
            
        </View>
    );

}