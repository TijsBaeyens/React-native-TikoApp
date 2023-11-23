import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRPage from './Screens/QRPage.jsx';
import NOKPage from './Screens/NokPage.jsx';
import StartPage from './Screens/StartPage.jsx';
import OkPage from './Screens/OkPage.jsx';
import ErrorHandlePage from './Screens/ErrorHandlePage.jsx';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage" >
        <Stack.Screen name='StartPage' component={StartPage} options={{ title: null, headerShown: false }}/>
        <Stack.Screen name="QRPage" component={QRPage} options={{ title: null, headerShown: false }}/>
        <Stack.Screen name="NOKPage" component={NOKPage} options={{ title: null, headerShown: false }}/>
        <Stack.Screen name='OKPage' component={OkPage} options={{ title: null, headerShown: false }}/>
        <Stack.Screen name="ErrorPage" component={ErrorHandlePage} options={{ title: null, headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
