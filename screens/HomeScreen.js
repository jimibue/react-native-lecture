import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import EmployeeCard from "../components/EmployeeCard";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("mounted");
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmployees(data.data);
        setLoading(false);
      });
  }, []);

  const renderEmployees = () => {
    if(loading){
     return  <ActivityIndicator size="large" color="#0000ff" />
    } else {
      return employees.map((emp) => <EmployeeCard key={emp.id} {...emp} />);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Employees</Text>
      <ScrollView style={styles.scroll}>
        {renderEmployees()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scroll:{
    marginHorizontal:10
  },
  text: {
    borderWidth: 1,
    fontSize:36,
    textAlign:'center',
    borderColor: "black",
    marginBottom:10
  },
});
HomeScreen.navigationOptions = {
  header: null,
};
