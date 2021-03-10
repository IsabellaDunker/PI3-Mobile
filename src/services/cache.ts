import * as SecureStore from 'expo-secure-store';

class Cache {
  static async save(key: string, value: any) {
    if(!value){
      await SecureStore.setItemAsync(key, '');
    } else {
      await SecureStore.setItemAsync(key, JSON.stringify(value));
    }
  }

  static async get(key: string) {
    const value = await SecureStore.getItemAsync(key);
    return value ? JSON.parse(value) : null;
  }

  static async setToken(token: string) {
    await this.save('token', token);
  }
  
  static async getToken() {
    const token = await this.get('token');
    return token;
  }

  static async setCpf(cpf: string) {
    await this.save('cpf', cpf);
  }
  
  static async getCpf() {
    const cpf = await this.get('cpf');
    return cpf;
  }
}

export { Cache };