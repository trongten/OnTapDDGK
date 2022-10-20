import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../GioHangProvider";

export default function HomeScreen({ navigation }) {
  const { giohang, setGioHang, data, setData } = useContext(DataContext);
  useEffect(() => {
    fetch("https://633f93fb0dbc3309f3cce759.mockapi.io/api/ontapgk")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        console.log("HomeScreen render");
      });
  }, []);

  return (
    <SafeAreaView className="justify-center items-center">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Them");
        }}
        className="rounded-xl border border-solid border-black px-8 py-4 bg-slate-800"
      >
        <Text className="text-white">Them</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View key={item.id} className="w-full ">
            <Image className="w-52 h-52" source={{ uri: item.anh }}></Image>
            <View className="flex-row justify-around">
              <Text>{item.ten}</Text>
              <Text>{item.gia}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("GioHang");
                  setGioHang([...giohang, item]);
                }}
                className="rounded-xl border border-solid border-black px-2 py-1 bg-red-400"
              >
                <Text className="text-white">Chuyen</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
