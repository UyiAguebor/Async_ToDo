import { Image, Text, View, StyleSheet } from "react-native";
import logoImg from "../assets/logo.png";
export function Header() {
  return (
    <>
      <Image style={s.img} source={logoImg} resizeMode="contain" />
      <Text style={s.subtitle}>You probably have something to do</Text>
    </>
  );
}

const s = StyleSheet.create({
  img: {
    width: 170,
  },
  subtitle: {
    marginTop: -20,
    fontSize: 20,
    color: "#ABABAB",
  },
});
