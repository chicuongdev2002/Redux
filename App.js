import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import TodoApi from './src/component/TodoApi';
import { createStore } from 'redux';
import {View,Image} from 'react-native';
import ReduxTodo from './src/component/TodoRedux';
import TodoReduxAPI from './src/component/TodoReduxAPI';
import { Provider } from 'react-redux'; // Import Provider
import store from './src/component/ReduxAPI';
import CTNC from './src/component/CTNC';
// import store2 from './src/component/ReduxCTNC';
// const store=createStore(CTNC);
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
 <NavigationContainer>
      <Stack.Navigator initialRouteName="CTNC">
           <Stack.Screen
          name="Home"
          component={TodoApi}
          options={{title:'Home',
        }}
        />
           <Stack.Screen
          name="ReduxTodo"
          component={ReduxTodo}
          options={{title:'ReduxTodo',
        }}
        />
         <Stack.Screen
          name="TodoReduxAPI"
          component={TodoReduxAPI}
          options={{title:'TodoReduxAPI',
        }}
        />
         <Stack.Screen
          name="CTNC"
          component={CTNC}
          options={{title:'CTNC',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  
  );
}


