import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function MenuScreenItem({ imageUrl, title, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={imageUrl} style={styles.menuIcon} />
          <Text style={styles.text}>{title}</Text>
        </View>

        <View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            style={{ paddingRight: 15 }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    margin: 5,
    justifyContent: "space-between",
  },
  menuIcon: {
    margin: 5,
    height: 35,
    width: 35,
  },
  text: {
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default MenuScreenItem;
