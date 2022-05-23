import * as React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { List, Text } from "react-native-paper";
import CheckBox from "react-native-check-box";
import colors from "../config/colors";

function DropDownList({ dropTitle, options }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [checked, setChecked] = React.useState([]);

  return (
    <List.Section
      style={{
        backgroundColor: "white",
        borderColor: colors.lightGray,
        borderWidth: 2,
      }}
    >
      <List.Accordion title={dropTitle} style={{ backgroundColor: "white" }}>
        <FlatList
          //   style={{ height: "200%" }}
          data={options}
          renderItem={({ item }) => (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    const newIds = [...checked];
                    const index = newIds.indexOf(item.id);
                    if (index > -1) {
                      newIds.splice(index, 1);
                    } else {
                      newIds.push(item.id);
                    }
                    setChecked(newIds);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                    }}
                  >
                    <CheckBox
                      checkBoxColor="red"
                      uncheckedCheckBoxColor="#999"
                      isChecked={checked.includes(item.id)}
                      onClick={() => console.log("")}
                    />
                    <Text style={{ marginHorizontal: "5%" }}>{item.text}</Text>
                  </View>
                </TouchableOpacity>
                {dropTitle == "Add Ons" ? (
                  <Text style={{ paddingHorizontal: "7%" }}>
                    PKR {item.price}
                  </Text>
                ) : null}
              </View>
            </View>
          )}
          nestedScrollEnabled
        />
      </List.Accordion>
    </List.Section>
  );
}

export default DropDownList;
