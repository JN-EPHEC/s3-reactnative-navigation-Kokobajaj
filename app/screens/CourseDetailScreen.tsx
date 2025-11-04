import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

type Props = {
  route: RouteProp<RootStackParamList, 'CourseDetail'>;
  navigation: StackNavigationProp<RootStackParamList, 'CourseDetail'>;
};

// couleurs locales
const PINK = '#FF5FA2';
const OFFWHITE = '#FAFAF7';

export default function CourseDetailScreen({ route, navigation }: Props) {
  const { title, description } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: OFFWHITE }]}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
      <View style={{ height: 12 }} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: PINK },
  text: { fontSize: 16, color: PINK },
});
