import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

/**Menu Item Type */

type Course = "Starter" | "Main" | "Dessert";

//defining a typescript type for menu items
type MenuItem = {
  id: number; //unique id
  name: string;
  description: string;
  course: string;
  price: number;
};

export default function App() {
  //State: array of menu items (empty at start)
  //state for all menu items
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  //controlled input states for the form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");

  //function to add a new menu item
  const handleAddItem = () => {
    //validation check
    if (!name || !description || !course || !price) {
      alert("Please fill in all fields before adding an item");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now(),
      name,
      description,
      course,
      price: parseFloat(price),
    };

    //add item to the list
    setMenuItems([...menuItems, newItem]);

    //clear form
    setName("");
    setDescription("");
    setCourse("");
    setPrice("");
  };

  //count of total items
  const totalCount = menuItems.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Chef's Digital Menu</Text>

      {/* menu item form*/}
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Add a New Menu Item</Text>

        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          style={styles.input}
          placeholder="Course (Starter, Main, Dessert)"
          value={course}
          onChangeText={setCourse}
        />

        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <Button title="Add Menu Item" onPress={handleAddItem} />
      </View>

      {/* Display total items */}
      <Text style={styles.countText}>Total Items: {totalCount}</Text>

      {/* Menu Items List */}
      <Text style={styles.sectionTitle}>Current Menu</Text>
      {menuItems.length === 0 ? (
        <Text>No menu items added yet. Add some above!</Text>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.menuCourse}>{item.course}</Text>
              <Text style={styles.menuPrice}>R {item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  menuItem: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
  },
  menuName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuCourse: {
    fontStyle: "italic",
  },
  menuPrice: {
    color: "#2e8b57",
    fontWeight: "600",
  },
  countText: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2e8b57",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
