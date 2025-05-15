import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HomeScreen from '../screens/AppScreens/HomeScreen';
import ReorderScreen from '../screens/AppScreens/ReorderScreen';
import CartScreen from '../screens/AppScreens/CartScreen';
import AccountScreen from '../screens/AppScreens/AccountScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { CartContext } from '../context/CartContext';



const Tab = createBottomTabNavigator();
const BottomTabScreen = React.memo(() => {

    const customTabBarStyle = {
        headerShown: false, tabBarShowLabel: true, tabBarStyle: {
            backgroundColor: "white",
            borderTopLeftRadius: wp(8),
            borderTopRightRadius: wp(8),
            elevation: 20,
            height: hp(8),
            borderTopWidth: 0,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
            flex: 1,
        },
    };


    return (<>
        <Tab.Navigator
            screenOptions={{
                customTabBarStyle,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#E96E6E'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size}
                            color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Reorder"
                component={ReorderScreen}
                options={{
                    tabBarLabel: 'Reorder',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="reorder" size={size}
                            color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ size, color }) => {
                        const { carts } = useContext(CartContext)
                        // console.log("Carts", carts.length)
                        return (
                            <View style={{ position: 'relative' }}>
                                < MaterialCommunityIcons name="cart" size={size}
                                    color={color} />
                                <View style={{
                                    height: 14,
                                    width: 14,
                                    borderRadius: 7,
                                    backgroundColor: color,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: -5,
                                    right: -5
                                }}>
                                    <Text style={{
                                        fontSize: 10,
                                        fontFamily: 'Poppins',
                                        fontWeight: 600,
                                        color: "#FFFFFF",
                                        // alignSelf: 'center'
                                    }}>{carts?.length || 0}</Text>
                                </View>
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome6 name="user" size={size}
                            color={color} />
                    ),
                }}
            />
        </Tab.Navigator>


    </>);
});

export default BottomTabScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }, gradient: {
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
    }, tabStyle: {
        borderRadius: 15,
        height: hp('7%'),
        alignSelf: 'center',
        marginLeft: wp('3%'),
        marginRight: wp('3%'),
        alignItems: 'center',
        alignContent: 'center',
    }, tabBarStyle: {
        borderTopLeftRadius: wp(8),
        borderTopRightRadius: wp(8),
        elevation: 20,
        height: hp(10),
        borderTopWidth: 0,
        justifyContent: 'center',
        position: 'absolute',
    }, main: {
        flexDirection: 'row', justifyContent: 'space-between',
    }, imageStyle: {
        width: '100%',
        height: hp(9),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -3.9,
    }, createTaskBtn: {
        alignSelf: 'center', position: 'absolute', bottom: 0,
    }, mainButton: {
        flex: 1, justifyContent: 'center', alignSelf: 'center',
    },
    tabBarItemStyles: {
        borderRadius: 15,
        height: hp(6),
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
});
