import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CategoriesProps {}

const CategoriesScr = (props: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  );
};

export default CategoriesScr;

const styles = StyleSheet.create({
  container: {},
});
