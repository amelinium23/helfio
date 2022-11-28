import Slider from '@react-native-community/slider';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

export const DiabetesInformation = () => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.informationText}>Risk of developing diabetes over 10 years</Text>
          <Text style={styles.riskInformation}>Low</Text>
          <Slider
            style={styles.sliderStyle}
            step={0.1}
            value={25}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#20d804"
            maximumTrackTintColor="#dd0808"
            disabled
          />
          <Button style={styles.button} mode="outlined">
            Learn More
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#f5f5f5',
  },
  sliderStyle: {
    marginVertical: 10,
  },
  informationText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  riskInformation: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#20d804',
    fontSize: 18,
    marginTop: 3,
    fontWeight: '400',
  },
});
