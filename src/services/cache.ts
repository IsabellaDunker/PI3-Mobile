import * as SecureStore from 'expo-secure-store';

class Cache {
  static async save(key: string, value: any) {
    await SecureStore.setItemAsync(key, value);
  }

  static async get(key: string) {
    const value = await SecureStore.getItemAsync(key);
    return value;
  }

  static async setToken(token: string) {
    await this.save('token', token);
  }
  
  static async getToken() {
    const token = await this.get('token');
    return token;
  }
}

export { Cache };