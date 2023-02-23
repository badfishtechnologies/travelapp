import React from 'react';
import { FlatList, Text } from 'react-native';
import styles from '../Categories/styles';

const Categories =({ categories, selectedCategory }) => {
    return (
        <FlatList data={categories}
                  horizontal
                  renderItem={({ item }) => (
                        <Text style={[styles.item, selectedCategory===item ? styles.selectedItem : {}]}>{ item }</Text>
                    )}
        />
    );
};

export default React.memo(Categories);
