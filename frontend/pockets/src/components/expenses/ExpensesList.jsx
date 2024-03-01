import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { getAllExpenses } from '../utils';
import ExpenseItem from './ExpenseItem';

const ExpensesList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const expensesData = await getAllExpenses();
            setExpenses(expensesData)
        } catch(error) {
            console.error("LSA Error ", error);
        }
    }

    const editExpense = (expense) => {
        console.log('Testando expense edit', expense);
    }

    return(
        <View style={styles.tableContainer}>
            <View style={styles.tableHeaderRow}>
                <Text style={styles.tableHeader}>Id</Text>
                <Text style={styles.tableHeader}>Name</Text>
                <Text style={styles.tableHeader}>Value</Text>
                <Text style={styles.tableHeader}>Edit</Text>
            </View>
            <FlatList
                data={expenses}
                keyExtractor={(expense) => expense.id.toString()}
                renderItem={({ item }) => <ExpenseItem expense={item} itemRowStyle={styles.tableRow} itemTextStyle={styles.rowTexts} onEditPress={editExpense} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    tableContainer: {
        padding: 10,
    },
    tableHeader: {
        fontWeight: 'bold',
        color: '#fff'
    },
    tableHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(103,30,117, 0.1)',
        borderRadius: 2,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(103,30,117, 1)',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(103,30,117, 0.1)',
        paddingVertical: 5,
    },
    purpleBackground: {
        backgroundColor: 'rgba(95, 26, 148, 1)',
        
    },
    rowTexts: {
        color: 'rgba(103,30,117, 1)',
        paddingHorizontal: 10
    },
})

export default ExpensesList;
