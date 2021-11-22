import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { ActivityScreen } from '../screens/ActivityScreen';

const Drawer = createDrawerNavigator();

export const Navigation=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Actividades" component={ActivityScreen} />      
    </Drawer.Navigator>
  );
}