import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogBox } from "react-native";

import colors from "../config/colors";
import DropDownList from "../components/DropDownList";
import drinks from "../config/drinks";
import addons from "../config/addons";

function ProductDetailsScreen({ route, navigation }) {
  const product = route.params;

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(product.price);

  const increment = () => {
    setCount(count + 1);
    setPrice(price + product.price);
  };

  const decrement = () => {
    if (count == 1) return;
    setCount(count - 1);
    setPrice(price - product.price);
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <ScrollView
      style={{ flex: 1, marginTop: 32 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="close"
              color={colors.light}
              size={25}
              style={{
                position: "absolute",
                top: "7%",
                left: "3%",
                zIndex: 999,
              }}
            />
          </TouchableWithoutFeedback>
          <Image source={product.imageUrl} style={styles.productImage} />
        </View>

        <View style={styles.title_priceContainer}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {product.title}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>PKR {price}</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={{ fontSize: 16 }}>
            Enjoy the crispy chicken fillet in a soft bun with spicy mayo and
            our signature sauce with fresh lettuce.
          </Text>
        </View>

        <View style={styles.dropdownsContainer}>
          <DropDownList dropTitle={"Add Drinks"} options={drinks} />
          <DropDownList dropTitle={"Add Ons"} options={addons} />
        </View>

        <View style={styles.addToBucketContainer}>
          <View style={styles.addToBucketBar}>
            <View style={styles.productCounter}>
              <Button
                color={colors.primary}
                labelStyle={{ fontSize: 20 }}
                onPress={decrement}
              >
                -
              </Button>
              <Text style={{ color: colors.primary }}> {count} </Text>
              <Button
                color={colors.primary}
                labelStyle={{ fontSize: 20 }}
                onPress={increment}
              >
                +
              </Button>
            </View>
            <Button mode="contained" style={styles.addButton}>
              ADD TO BUCKET
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: "scroll",
  },

  imageContainer: {
    flex: 35,
    overflow: "hidden",
  },
  productImage: {
    width: 400,
    height: 270,
  },

  title_priceContainer: {
    flex: 10,
    paddingHorizontal: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  subtitleContainer: {
    flex: 10,
    paddingHorizontal: "2%",
    marginVertical: "1%",
    justifyContent: "center",
  },

  dropdownsContainer: {
    flex: 20,
    paddingHorizontal: "2%",
  },
  dropdownBar: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderColor: colors.lightGray,
    borderWidth: 2,
    padding: "5%",
    marginVertical: "3%",
    justifyContent: "space-between",
  },

  addToBucketContainer: {
    flex: 35,
    justifyContent: "flex-end",
  },
  addToBucketBar: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderTopColor: colors.lightGray,
    borderTopWidth: 2,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 2,
    padding: "4%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productCounter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 0,
  },
});

export default ProductDetailsScreen;
