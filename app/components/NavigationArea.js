import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";

import FeedNavigator from "./FeedNavigator";
import colors from "../config/colors";

const HomeRoute = () => <FeedNavigator />;

const MenuRoute = () => <FeedNavigator />;

const BucketRoute = () => <FeedNavigator />;

const MoreRoute = () => <FeedNavigator />;

function NavigationArea(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "menu", title: "Menu", icon: "menu-open" },
    { key: "bucket", title: "Bucket", icon: "bucket-outline" },
    { key: "more", title: "More", icon: "dots-vertical" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    menu: MenuRoute,
    bucket: BucketRoute,
    more: MoreRoute,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#fff" }}
        activeColor={colors.primary}
        shifting={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NavigationArea;
