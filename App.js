import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import AppState from './context/app/appState';

export default function App() {
  return (
    <AppState>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </AppState>
  );
}