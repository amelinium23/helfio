import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const BodyDisplay = () => {
  return (
    <View style={styles.svgContainer}>
      <Image source={require('../../assets/human.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    flex: 0.8,
    alignItems: 'center',
    padding: 20,
  },
});
