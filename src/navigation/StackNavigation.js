import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "react-native"
import SplashScreen from "../screens/AuthScreens/SplashScreen"
import BottomTabScreen from "./BottomTabNavigation"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import ProductDetailsScreen from "../screens/AppScreens/ProductDetailsScreen"


const RootStack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <StatusBar
                translucent={true}
                barStyle={'light-content'}
                backgroundColor={'transparent'}
            />
            <RootStack.Navigator
                initialRouteName="SplashScreen"
                screenOptions={{
                    headerMode: 'none',
                    headerShown: false,
                    animation: 'slide_from_right'
                }}
            >
                <RootStack.Screen name="SplashScreen" component={SplashScreen} />
                <RootStack.Screen name="After" component={AfterLoginAppContainer} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const AfterLoginAppContainer = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerMode: 'none',
                headerShown: false,
                animation: 'slide_from_right'
            }}
        >
            <RootStack.Screen name="BottomTab" component={BottomTabScreen} />
            <RootStack.Screen
                name="ProductDetail"
                component={ProductDetailsScreen}
                options={{ gestureEnabled: false }} />
        </RootStack.Navigator>
    )
}


const BeforeLoginAppContainer = () => {
    return (
        <KeyboardAwareScrollView
            enableOnAndroid={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            style={{ flex: 1 }}
            keyboardShouldPersistTaps={'handled'}
        >
            <RootStack.Navigator
                screenOptions={{
                    headerMode: 'none',
                    headerShown: false,
                    animation: 'slide_from_right'
                }}
            >

            </RootStack.Navigator>
        </KeyboardAwareScrollView>
    )
}