import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IndicatorProps {
  level: number;
  label: string;
  levelLabel: string;
  color: string;
}

export const Indicator = ({ level, label, levelLabel, color }: IndicatorProps) => {
  return (
    <>
      <View
        style={{
          width: 90,
          height: 45,
          borderColor: color,
          borderWidth: 8,
          borderBottomWidth: 0,
          borderTopRightRadius: 300,
          borderTopLeftRadius: 300,
          alignSelf: 'center',
        }}>
        <Text style={styles.heading}>{level}</Text>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View>
        <View style={styles.levelContainer}></View>
      </View>
      <View
        style={{
          ...styles.labelContainer,
          backgroundColor: color,
          width: 70,
          alignContent: 'flex-end',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text style={styles.levelLabelText}>{levelLabel}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  levelContainer: {
    borderRadius: 35,
    alignItems: 'center',
    alignSelf: 'center',
  },
  slider: {
    height: 20,
    borderRadius: 60,
  },
  heading: {
    fontSize: 22,
    marginTop: 3,
    fontWeight: '400',
    alignSelf: 'center',
  },
  labelText: {
    fontSize: 18,
    color: 'gray',
    alignSelf: 'center',
  },
  levelLabelText: {
    color: 'white',
  },
  labelContainer: {
    borderRadius: 300,
    alignItems: 'center',
  },
});
