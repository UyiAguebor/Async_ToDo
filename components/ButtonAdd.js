import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export function ButtonAdd({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.btn}>
      <Text style={s.txt}>+ New todo</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  btn: {
    position: "absolute",
    bottom: 60,
    right: 20,
    backgroundColor: "#C2DAFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 7,
  },
  txt: {
    color: "#2F76E5",
    fontWeight: "bold",
    fontSize: 18,
  },
});
