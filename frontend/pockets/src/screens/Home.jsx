import React from 'react';
import { View, Text } from 'react-native';
import ExpensesList from '../components/expenses/ExpensesList';


const Home = () => {
    return (
        <View>
            <Text>Expenses:</Text>
            <ExpensesList />
        </View>
    )
}

export default Home;