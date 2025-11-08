import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route }: Props) {
  const title = route.params?.title ?? 'Item';

  // Map some friendly messages per the assignment
  const messageMap: Record<string, string> = {
    Photos: `Welcome to the Photos Screen`,
    Music: `Welcome to the Music Selection Screen`,
    Messages: `Welcome to your Messages`,
    Calls: `Make calls from Here`,
    Camera: `Welcome to the camera app`,
    Contacts: `Your Contacts`,
  };

  const message = messageMap[title] ?? `Welcome to the ${title} screen`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 28, fontWeight: '600', marginBottom: 12 },
  message: { fontSize: 18, color: '#333' },
});
