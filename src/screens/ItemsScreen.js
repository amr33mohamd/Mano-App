import React,{useState,useEffect} from 'react';
import { View, StyleSheet, FlatList, Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import {token,StoreID,UserAddressID} from '../constants/api';
import {Text,HStack,Spinner,Heading} from "native-base";
import Item from '../components/ItemComponent';
import moment from 'moment';

export default function ItemsScreen({navigation}) {

    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if(items.length === 0 && isLoading){
            axios.post('https://staging-api.manoapp.com/api/v1/users/products',null, {
                headers: {
                    'Authorization': `${token}`,
                    StoreID,
                    UserAddressID,
                    'Content-Type': 'application/json'
                }
            }).then((response) => setItems(response.data.data.items))
                .then(() => console.log(items))
                .catch((error) => alert(error))
                .finally(setLoading(false));
        }

    }, [ isLoading])


    if (isLoading) {
        return (
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
            </HStack>
        );
    }
    else {
        return (

            <FlatList
                data={items}
                numColumns={2}
                renderItem={({item}) =>
                    (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('SingleItem', {item: item})
                        }}
                                          alignItems="center" style={{width: "45%", margin: 10}}
                                          activeOpacity={.7}
                        >
                            <Item
                                title={item.title}
                                image={item?.images[0]?.thumbnail}
                                price={item.price}
                                brand={item.brand}
                                categories={item.categories}
                                created_at={moment(item.created_at).fromNow()}
                            />
                        </TouchableOpacity>
                    )}
                keyExtractor={(item) => item.id}
            />
        );
    }
}

