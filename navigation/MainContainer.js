import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Image, View } from 'react-native';


//stranice
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import { Header } from 'react-native/Libraries/NewAppScreen';

//stranice imena
const homeName = 'Home';
const profileName = 'Profile';
const searchName = 'Search';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <>
        <Tab.Navigator
        initialRouteName={homeName}
        tabBarOptions={{
            headerShown: false,
          showLabel: false, 
          style: {
            alignItems: 'center', 
          },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName){
                iconName = focused ? "home" : "home-outline"
            } else if (rn === profileName) {
                iconName = focused ? 'person' : "person-outline"
            } else if (rn === searchName){
                iconName = focused ? 'search' : 'search-outline'
            }
            

            return (
            <>
                
                <Ionicons name={iconName} size={size} color={color}/>
            </>
            );
         },
        })}

      >
        
                    
        <Tab.Screen
          name={homeName}
          component={HomePage}
          options={{headerShown: false,}} 
        />
        <Tab.Screen
          name={searchName}
          component={SearchPage}
          options={{headerShown: false,}} 
        />
        <Tab.Screen
          name={profileName}
          component={ProfilePage}
          options={{headerShown: false,}} 
        />
            
        </Tab.Navigator>
    </>

  );
}

