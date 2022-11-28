import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export const Header = () => {
  return (
    <Appbar style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Health</Text>
        <Text style={styles.subText}>Your body condition</Text>
      </View>
      <View style={styles.badge}>
        <Ionicons name="flash" size={14} color="black" />
        <Text> 1</Text>
      </View>
      <View style={styles.avatarContainer}>
        <FontAwesome name="user" size={36} color="black" />
      </View>
    </Appbar>
  );
};

const styles = StyleSheet.create({
  container: {
    backfaceVisibility: 'hidden',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  heading: {
    fontSize: 20,
    paddingBottom: 3,
    fontWeight: 'bold',
  },
  subText: {
    paddingTop: 0,
    fontSize: 14,
    color: 'gray',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    borderRadius: 60,
  },
  headingContainer: {
    flex: 0.9,
    paddingLeft: 10,
  },
  avatarContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    marginLeft: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
});
