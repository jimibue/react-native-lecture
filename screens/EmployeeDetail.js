import React from 'react'
import { View,Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function EmployeeDetail(){
  
  const navigation = useNavigation()
  return(
    <View>
      <Button 
        onPress={()=> navigation.goBack()}
        title="Go back"
      />
      <Text>yo EmployeeDetail</Text>
    </View>
  )
}