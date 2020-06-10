import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  FlatList,
} from "react-native";

import products from "../Helpers/productsData";

import ProductItem from "./ProductItem";

class Search extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Titre de l'ustensil"
        ></TextInput>
        <Button title="Rechercher" onPress={() => {}}></Button>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductItem product={item}></ProductItem>}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default Search;
