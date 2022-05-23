import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-paper";

import colors from "../config/colors";

function ProductCard({ product, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={product.imageUrl} style={styles.productImage} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{product.title}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            mode="outlined"
            color={colors.dark}
            fontWeight="bold"
            dark
            style={styles.button}
          >
            PKR {product.price}
          </Button>

          <Button
            mode="contained"
            onPress={() => console.log("Ordered!")}
            dark
            style={{
              width: "50%",
              height: "100%",
              borderRadius: 0,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Order
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 320,
    marginBottom: "2%",
  },
  imageContainer: {
    width: "100%",
    height: "75%",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "110%",
  },
  titleContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
  },
  titleText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    height: "13%",
  },
  button: {
    width: "50%",
    height: "100%",
    borderRadius: 0,
    borderColor: colors.primary,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductCard;
