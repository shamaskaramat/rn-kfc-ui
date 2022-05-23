import React, { useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import ProductCard from "../components/ProductCard";

import products from "../config/products";

function EverydayValueScreen({ navigation, route }) {
  const menuOption = route.params;
  useEffect(() => navigation.setOptions({ title: menuOption.title }));
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={products.id}
        renderItem={({ item }) =>
          item.menuId == menuOption.id ? (
            <ProductCard
              product={item}
              onPress={() => navigation.navigate("ProductDetailsScreen", item)}
            />
          ) : null
        }
        style={{
          padding: "1%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EverydayValueScreen;
