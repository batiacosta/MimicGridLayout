import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GridItem from '../components/GridItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const items = [
  { key: 'Photos', icon: 'photos' },
  { key: 'Music', icon: 'music' },
  { key: 'Messages', icon: 'messages' },
  { key: 'Calls', icon: 'calls' },
  { key: 'Camera', icon: 'camera' },
];

export default function HomeScreen({ navigation }: Props) {
  const renderItem = ({ item }: { item: typeof items[number] }) => (
    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Detail', { title: item.key })}>
      <GridItem title={item.key} iconKey={item.icon} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(i) => i.key}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6' },
  list: { padding: 12 },
  touch: { flex: 1 / 3, padding: 8 },
});
