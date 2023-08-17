import React,{useState,useEffect} from 'react';
import {View, Image, Alert, ScrollView, TouchableOpacity} from 'react-native';
import ImageView from "react-native-image-viewing";

import {  Box ,HStack,AspectRatio,Center,Heading,Text,Stack} from "native-base";
import moment from 'moment';
import Item from '../components/ItemComponent';

export default function SingleItemScreen({ route, navigation }) {
    const { item } = route.params;

    const images = [
        {
            uri: item?.images[0]?.large,
        }
    ];

    const [visible, setIsVisible] = useState(false);

    return (
        <Item
            title={item.title}
            image={item?.images[0]?.large}
            price={item.price}
            brand={item.brand}
            categories={item.categories}
            created_at={moment(item.created_at).fromNow()}
            zoom={true}
        />

    );
}
