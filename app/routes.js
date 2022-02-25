import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AllCourses from './views/course/all.courses';
import SingleCourse from './views/course/single.course';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const HomeScreenStack = createStackNavigator();
//Entry point for the app will decide where to move routing
const AppRoutes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer fallback={{}}>
        <HomeScreenStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="ALL_COURSE">
          <HomeScreenStack.Screen name="ALL_COURSE" component={AllCourses} />
          <HomeScreenStack.Screen
            name="SINGLE_COURSE"
            component={SingleCourse}
          />
        </HomeScreenStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default AppRoutes;
