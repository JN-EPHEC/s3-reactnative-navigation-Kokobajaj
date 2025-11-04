import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CourseListScreen from './screens/CourseListScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import WishlistScreen from './screens/WishListScreen';
import ProfileScreen from './screens/ProfileScreen';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type CoursesStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

export type CoursesTabParamList = {
  AllCourses: undefined;
  Wishlist: undefined;
};

export type RootDrawerParamList = {
  Courses: undefined;
  MyProfile: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Tab = createBottomTabNavigator<CoursesTabParamList>();
const Stack = createNativeStackNavigator<CoursesStackParamList>();

const COLORS = {
  bg: '#FAFAF7',        
  pink: '#FF5FA2',      
  emerald: '#10B981',   
};

// Bouton hamburger (icône verte)
function DrawerHamburger() {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  return (
    <Pressable onPress={() => navigation.openDrawer()} style={{ paddingHorizontal: 16 }}>
      <Ionicons name="menu" size={24} color={COLORS.emerald} />
    </Pressable>
  );
}

function CoursesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.bg },
        headerTitleStyle: { color: COLORS.pink, fontWeight: '700' },
        headerTintColor: COLORS.emerald,
        headerLeft: () => <DrawerHamburger />,
      }}
    >
      <Stack.Screen name="CourseList" component={CourseListScreen} options={{ title: 'All Courses' }} />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

function CoursesTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.bg },
        tabBarLabelStyle: { color: COLORS.pink, fontWeight: '600' }, 
        tabBarIcon: ({ size }) => {
          const icons: Record<keyof CoursesTabParamList, string> = {
            AllCourses: 'book-outline',
            Wishlist: 'heart-outline',
          };
          return (
            <Ionicons
              name={icons[route.name as keyof CoursesTabParamList] as keyof typeof Ionicons.glyphMap}
              size={size}
              color={COLORS.emerald}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="AllCourses"
        component={CoursesStack}
        options={{ title: 'All Courses', headerShown: false }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: 'My Wishlist',
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.bg },
          headerTitleStyle: { color: COLORS.pink, fontWeight: '700' },
          headerTintColor: COLORS.emerald,
          headerLeft: () => <DrawerHamburger />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Layout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: COLORS.bg },
        headerTitleStyle: { color: COLORS.pink, fontWeight: '700' }, 
        drawerActiveTintColor: COLORS.pink,
        drawerInactiveTintColor: COLORS.pink,
        drawerStyle: { backgroundColor: COLORS.bg },
      }}
    >
      <Drawer.Screen
        name="Courses"
        component={CoursesTabs}
        options={{
          title: 'Courses',
          headerShown: false, 
          drawerIcon: ({ size }) => <Ionicons name="layers-outline" size={size} color={COLORS.emerald} />,
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={ProfileScreen}
        options={{
          title: 'My Profile',
          drawerIcon: ({ size }) => <Ionicons name="person-circle-outline" size={size} color={COLORS.emerald} />,
        }}
      />
    </Drawer.Navigator>
  );
}

