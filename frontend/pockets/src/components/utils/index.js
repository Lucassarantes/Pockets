import axios from 'axios';
import { encode } from 'base-64';

const apiUrl = 'http://192.168.15.18:8000/api/expenses/'

export const getAllExpenses = async () => {
    try {
        //const response = await axios.get(apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('### TESTING Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data
    } catch(error) {
        console.error('Error fetching expenses:', error);
        throw error;
    }
}