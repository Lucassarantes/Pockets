import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../common/CustomButton';

const ExpenseItem = ({ expense, itemRowStyle, itemTextStyle, onEditPress }) => {
    return (
        <View style={itemRowStyle}>
            <Text style={itemTextStyle}>{expense.id}</Text>
            <Text style={itemTextStyle}>{expense.name}</Text>
            <Text style={itemTextStyle}>{expense.value}</Text>
            <CustomButton text="Edit" onPress={() => onEditPress(expense)} />
        </View>
    );
};

export default ExpenseItem;