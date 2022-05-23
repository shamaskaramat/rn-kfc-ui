import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import MenuScreenItem from "../components/MenuScreenItem";
import colors from "../config/colors";
import menuItems from "../config/menuItems";

function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={menuItems.id}
        renderItem={({ item }) => (
          <MenuScreenItem
            title={item.title}
            imageUrl={item.image}
            onPress={() => navigation.navigate("EVERYDAY VALUE", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: colors.background,
  },
});

export default MenuScreen;
