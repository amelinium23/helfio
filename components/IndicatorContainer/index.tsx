import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Indicator } from '../Indicator';

export const IndicatorContainer = () => {
  return (
    <View>
      <View style={styles.indicatorContainer}>
        <Indicator
          level={23.2}
          label="BMI"
          levelLabel="Normal"
          color="#05bf21"
          maximumValue={100.0}
        />
      </View>
      <View style={styles.indicatorContainer}>
        <Indicator
          level={0.96}
          label="WHR"
          levelLabel="Average"
          color="#e28c0b"
          maximumValue={3.0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    padding: 30,
    marginVertical: 20,
    alignSelf: 'center',
  },
});
