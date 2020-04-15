import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function EmployeeCard({
  id,
  employee_name,
  employee_salary,
  employee_age,
})
{
  const navigation = useNavigation();
  const handlePress =(id)=>{
    navigation.navigate('Employee')
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress(id)}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View>
        <Text>{employee_name}</Text>
        <Text>{employee_salary}</Text>
        <Text>{employee_age}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'white',
    padding:10,
    marginBottom:10

  },
  logo: {
    height: 50,
    width: 50,
    marginRight:20
    
  },
});
