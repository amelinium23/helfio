import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { brighterColor } from '../../utils/colorHelper';

interface IndicatorProps {
  level: number;
  label: string;
  levelLabel: string;
  color: string;
  maximumValue: number;
}

export const Indicator = ({ level, label, levelLabel, color, maximumValue }: IndicatorProps) => {
  const getBorderColors = () => {
    if (level < maximumValue * 0.25) {
      return { borderStartColor: color };
    }
    if (level < maximumValue * 0.5) {
      return { borderTopColor: color };
    }
    if (level >= 0.75 * maximumValue) {
      return { borderEndColor: color };
    }
  };

  return (
    <>
      <View
        style={{
          ...styles.slider,
          ...getBorderColors(),
          borderColor: brighterColor(color, 30),
        }}>
        <Text style={styles.heading}>{level}</Text>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View
        style={{
          ...styles.labelContainer,
          backgroundColor: brighterColor(color, 80),
        }}>
        <Text style={{ ...styles.levelLabelText, color: color }}>{levelLabel}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 100,
    height: 50,
    borderWidth: 8,
    borderBottomWidth: 0,
    borderTopRightRadius: 600,
    borderTopLeftRadius: 600,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    marginTop: 18,
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
    alignContent: 'flex-end',
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
