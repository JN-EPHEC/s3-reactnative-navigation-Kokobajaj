import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PINK = '#FF5FA2';
const OFFWHITE = '#FAFAF7';

export default function ProfileScreen() {
  return (
    <View style={[styles.container, { backgroundColor: OFFWHITE }]}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.info}>Name: Jane Doe</Text>
      <Text style={styles.info}>Email: jane.doe@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: PINK },
  info: { marginTop: 10, fontSize: 16, color: PINK },
});
