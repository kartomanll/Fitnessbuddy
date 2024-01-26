import * as React from 'react';
import { View, Image, Text, Dimensions, ViewBase } from 'react-native';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const devet = '90%'; 

const data = {
    labels: ["Swim"], // optional
    data: [0.4]
  };

export default function HomePage({navigation}){ 

    

    return(

        <SafeAreaView style={{flex: 1 , flexDirection: 'col' , alignItems: 'center'}}>
        <View ><Text style={{textAlign: 'center', fontSize: 20, paddingTop: 20}}>Fitness Buddy</Text></View>
            <View style={{height:300}}>
                <LineChart
                data={{
                    labels:['1','2','3','4','5'],
                    datasets:[{
                        data:[10,20,20,18],
                    },],
                }}
                width={Dimensions.get('window').width}
                height={220}
                chartConfig={{
                    backgroundGradientFrom: '#f2f2f2',
                    backgroundGradientTo: '#f2f2f2',
                    props: {
                        verticalLines: null,
                        horizontalLines: null,
                    },
                    decimalPlaces: 1,
                    color: (opacity = 255) => `rgba(0,0,0, ${opacity})`,
                }}
                bezier
                style={{
                    borderRadius:200,
                    flex: 1,
                    alignItems: 'center',
                    marginTop: 40,
                }}
                >
                </LineChart>
            </View>
            <View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor: '#b7b7b7', flexDirection:'row',borderRadius: 15, height: 80, width: devet , }}>
                <Ionicons name={'person'} size={40} style={{ padding: 20 }} ></Ionicons>
                <View style={{}}><Text style={{ height: 80 , textAlignVertical: 'center'    ,  fontSize: 25}}>Korisnik</Text></View>
                <ProgressChart 
                    data={data}
                    width={80}
                    height={80}
                    spacing={20}
                    strokeWidth={8}
                    radius={20}
                    chartConfig={{
                        backgroundGradientFrom: "gray",
                        backgroundGradientTo: "gray",
                        color: (opacity = 1) => `rgba(50, 242, 242, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(242, 242, 242, ${opacity})`,
                    }}
                    hideLegend={true}
                    style={{}}
                ></ProgressChart>
            </View>
            <View style={{justifyContent:'',marginTop: 20, flexDirection: 'row', backgroundColor: '#b7b7b7', flexDirection:'row',borderRadius: 15, height: 80, width: devet , }}>
                <View style={{height: 90, width:90 , backgroundColor: "#797979" , borderRadius: 20 , alignSelf: 'center', alignContent:'center' ,alignItems: 'center' , justifyContent: 'center'}}>
                <Image source={require('../challange.png')} style={{ height: 67, width:75 ,alignSelf: 'center'}}/>
                </View>
                <Image source={require('../profilna.jpg')} style={{  marginLeft: 30 , height: 50 , width: 50 , borderRadius: 100 ,alignSelf: 'center' }} />

            </View>

           
        </SafeAreaView>

    );

}
