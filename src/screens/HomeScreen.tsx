import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
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
  const [isGrid, setIsGrid] = useState(true);
  const renderItem = ({ item }: { item: typeof items[number] }) => (
    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Detail', { title: item.key })}>
      <GridItem title={item.key} iconKey={item.icon} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Layout</Text>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>{isGrid ? 'Grid' : 'List'}</Text>
          <Switch value={isGrid} onValueChange={setIsGrid} />
        </View>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(i) => i.key}
        numColumns={isGrid ? 3 : 1}
        columnWrapperStyle={isGrid ? styles.columnWrapper : undefined}
        key={isGrid ? 'grid' : 'list'}
        contentContainerStyle={styles.list}
        extraData={isGrid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 6,
  },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#111' },
  switchRow: { flexDirection: 'row', alignItems: 'center' },
  switchLabel: { marginRight: 8, color: '#333' },
  list: { padding: 12 },
  columnWrapper: { justifyContent: 'space-between' },
  touch: { flex: 1, padding: 8 },
});
