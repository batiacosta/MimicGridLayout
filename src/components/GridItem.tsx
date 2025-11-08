import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from '../icons';

export default function GridItem({ title, iconKey }: { title: string; iconKey?: string }) {
  const Icon = iconKey ? (Icons as any)[iconKey] : null;

  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        {
          Icon ? (
            // If Icon is a React component (SVG converted to component) render it,
            // otherwise assume it's an image asset and render with <Image />.
            typeof Icon === 'function' ? (
              <Icon width={40} height={40} fill="#4F46E5" />
            ) : (
              <Image source={Icon as any} style={{ width: 40, height: 40, tintColor: '#4F46E5' }} resizeMode="contain" />
            )
          ) : (
            <Text style={styles.emoji}>📦</Text>
          )
        }
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#eef2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  emoji: { fontSize: 28 },
  title: { fontSize: 14, color: '#111', textAlign: 'center' },
});
