import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

export default class ListName extends React.Component {

    render(){
        listItem = this.props.listItem;
        return(
            <FlatList
                data={listItem}
                renderItem={({item}) =>
                <Text style={styles.item} onPress={ () => console.log(item.key)}>
                    {item.key}
                </Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
})