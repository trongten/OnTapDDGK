import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { DataContext } from "../GioHangProvider";

export default function GioHang() {
  const { giohang, setGioHang } = useContext(DataContext);
  return (
    <SafeAreaView>
      <FlatList
        data={giohang}
        keyExtractor={() => Math.random()}
        renderItem={({ item }) => (
          <View className="w-full  items-center">
            <Image className="w-52 h-52" source={{ uri: item.anh }}></Image>
            <View className="flex-row w-[50%] justify-around">
              <Text>{item.ten}</Text>
              <Text>{item.gia}</Text>
              <TouchableOpacity className="rounded-xl border border-solid border-black px-2 py-1 bg-red-400">
                <Text className="text-white">Chuyen</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
