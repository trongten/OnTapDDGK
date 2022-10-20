import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  SectionList,
} from "react-native";
import React, { useContext, useState } from "react";
import { DataContext } from "../GioHangProvider";

export default function Them({ navigation }) {
  const [ten, setTen] = useState("");
  const [gia, setGia] = useState("");
  const [anh, setAnh] = useState("");

  const { data, setData } = useContext(DataContext);
  return (
    <SafeAreaView>
      <TextInput
        className="w-full border border-solid border-black rounded-sm h-10"
        value={ten}
        onChangeText={setTen}
      ></TextInput>
      <TextInput
        className="w-full border border-solid border-black rounded-sm h-10"
        value={gia}
        onChangeText={setGia}
      ></TextInput>
      <TextInput
        className="w-full border border-solid border-black rounded-sm h-10"
        value={anh}
        onChangeText={setAnh}
      ></TextInput>
      <TouchableOpacity
        className="rounded-xl border border-solid border-black px-2 py-1 bg-red-400"
        onPress={() => {
          fetch("https://633f93fb0dbc3309f3cce759.mockapi.io/api/ontapgk", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ ten: ten, gia: gia, anh: anh }),
          }).then(() => {
            setData([...data, { ten: ten, gia: gia, anh: anh }]);

            navigation.navigate("Home");
          });
        }}
      >
        <Text>Them</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
