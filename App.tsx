import React, {useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**Menu Item Type */

type Course = 'Starter' | 'Main' | 'Dessert';

type MenuItem = {
  id: string;   //unique id
  name: string;
  description: string;
  course: Course;
  price: number;
  imageUrl: string; //small picture 
};

export default function App() {
  //State: array of menu items (empty at start)

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Chef's Digital Menu</Text>

        {/* we'll add the Add Menu form and the menu list below in later steps */}
        <ScrollView style={styles.body}>
          <Text style={styles.intro}>
            Use this app to add tonight's menu items and display them to your customers!
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: '#f5f6fa' },
  container: { flex: 1, padding: 16, },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
  body: { marginTop: 12, },
  intro: { fontSize: 14, color: '#333'},
});
