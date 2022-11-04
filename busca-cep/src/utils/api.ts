import { CardInfosType } from './types';
import axios from 'axios';
axios.defaults.baseURL = ' https://viacep.com.br/ws/';

export class Api {
  static async getCep(cep: string): Promise<CardInfosType | undefined> {
    try {
      const results = await axios.get(cep + '/json/');
      return results.data;
    } catch (err) {
      console.log(err);
    }
  }
}
