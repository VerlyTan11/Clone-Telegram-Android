import { SafeAreaView } from 'react-native';
import Header from './components/Header';
import Story from './components/Story';
import UnifiedList from './components/UnifiedList';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <Story/>
      <UnifiedList />
    </SafeAreaView>
  );
}