import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Wrapper around AsyncStorage for cleaner usage
 */
export const storage = {
  async set(key: string, value: any) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  async get<T>(key: string): Promise<T | null> {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  async remove(key: string) {
    await AsyncStorage.removeItem(key);
  },
};
