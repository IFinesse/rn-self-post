import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { FavouritesScreen } from "../screens/FavouritesScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    },
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: FavouritesScreen,
    Post: PostScreen,
  },
  {
    initialRouteName: "Booked",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    },
  }
);

const bottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarLabel: 'All',
            tabBarIcon: info => <Ionicons name="ios-albums" size={24} color={info.tintColor}/>
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Favourites',
            tabBarIcon:  info => <Ionicons name="ios-star" size={24} color={info.tintColor}/>
        }
    }
}

const BottomNavigator = Platform.OS ==='android' ? createMaterialBottomTabNavigator(bottomTabsConfig, {
    activeTintColor: '#fff',
    shifting: true,
    barStyle: {
        backgroundColor: THEME.MAIN_COLOR
    }
}) : createBottomTabNavigator (bottomTabsConfig, {
    tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
    }
})

// createBottomTabNavigator( {
    
// },{
//     tabBarOptions: {
//         activeTintColor: THEME.MAIN_COLOR
//     }
// })

export const AppNavigation = createAppContainer(BottomNavigator);
