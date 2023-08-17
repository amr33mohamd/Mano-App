import React,{useState,useEffect} from 'react';
import {View, Image, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {  Box ,HStack,AspectRatio,Center,Heading,Text,Stack} from "native-base";
import ImageView from 'react-native-image-viewing';


export default function Item(props) {
    const images = [
        {
            uri: props.image,
        }
    ];
    const [visible, setIsVisible] = useState(false);

    return (


        <Box   rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}
        >
            <Box>
                {
                    (props.zoom) ?
                        <Box>
                            <TouchableOpacity
                                onPress={() => setIsVisible(true)}
                                activeOpacity={.7}

                            >
                                <Image
                                    style={{width:"100%",height:200}}
                                    source={{
                                        uri:props.image
                                    }}
                                />
                            </TouchableOpacity>
                            <ImageView
                                images={images}
                                imageIndex={0}

                                visible={visible}
                                onRequestClose={() => setIsVisible(false)}
                            />
                        </Box>
                    :<AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: props.image
                            }} alt="image" />
                        </AspectRatio>
                }

                <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                }} position="absolute" bottom="0" px="3" py="1.5">
                    {props.price + " $"}
                </Center>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        {props.title}
                    </Heading>
                    <Text fontSize="xs" _light={{
                        color: "violet.500"
                    }} _dark={{
                        color: "violet.400"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                        {props.brand ? props.brand : "None" }
                    </Text>
                </Stack>
                <Text fontWeight="400">

                    {
                        props.categories.map((cat,key)=>{
                            if(key == props.categories.length -1){
                               return cat.title;

                            }
                            else {
                                return cat.title + ","

                            }
                        })
                    }
                </Text>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            {props.created_at}
                        </Text>
                    </HStack>
                </HStack>
            </Stack>
        </Box>

);
}
