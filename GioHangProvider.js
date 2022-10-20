import { View, Text } from "react-native";
import React, { createContext, useState } from "react";
const DataContext = createContext();
function GioHangProvider({ children }) {
  const [giohang, setGioHang] = useState([]);
  const [data, setData] = useState();
  return (
    <DataContext.Provider value={{ giohang, setGioHang, data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
export { DataContext, GioHangProvider };
