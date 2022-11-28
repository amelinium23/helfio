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
    padding: 20,
  },
});
