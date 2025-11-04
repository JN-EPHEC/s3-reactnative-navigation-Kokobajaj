import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Course = {
  id: string;
  title: string;
  description: string;
};

type RootStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CourseList'>;
};

const courses: Course[] = [
  { id: '1', title: 'Intro to React Native', description: 'Learn the basics of React Native.' },
  { id: '2', title: 'Advanced JavaScript', description: 'Deep dive into modern JavaScript concepts.' },
  { id: '3', title: 'UI/UX for Developers', description: 'Design better user interfaces and experiences.' },
];

// === couleurs locales utilisées ici
const PINK = '#FF5FA2';
const OFFWHITE = '#FAFAF7';

export default function CourseListScreen({ navigation }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: OFFWHITE }]}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('CourseDetail', {
                courseId: item.id,
                title: item.title,
                description: item.description,
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: PINK },
  desc: { marginTop: 4, fontSize: 14, color: PINK },
});
