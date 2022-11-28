import { StyleSheet, View } from 'react-native';
import { BodyDisplay } from '../../components/BodyDisplay';
import { DiabetesInformation } from '../../components/DiabetesInformation';
import { Header } from '../../components/Header';
import { IndicatorContainer } from '../../components/IndicatorContainer';

export const HomeScreen = () => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <BodyDisplay />
        <IndicatorContainer />
      </View>
      <View>
        <DiabetesInformation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
