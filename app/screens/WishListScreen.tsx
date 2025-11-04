import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PINK = '#FF5FA2';
const OFFWHITE = '#FAFAF7';

export default function WishlistScreen() {
  return (
    <View style={[styles.container, { backgroundColor: OFFWHITE }]}>
      <Text style={styles.text}>Your wishlist is empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18, color: PINK },
});
