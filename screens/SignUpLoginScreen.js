import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase'

export default class SignUpLoginScreen extends Component{
    constructor(){
        super();
        this.state={
          emailId:'',
          password:'',
        }
      }
      //firebase.auth().createUserWithEmailAndPassword(emailId, password)
      userSignUp = (emailId, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
          return Alert.alert("Sucessfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
      userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          return Alert.alert("Sucessfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
    render(){
    return(
     <View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
          <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
         <TouchableOpacity
           style={[styles.button,{marginBottom:20, marginTop:20}]}
           onPress = {()=>{
             this.userLogin(this.state.emailId, this.state.password)
           }}
           >
           <Text style={{color:'#ff5722',fontSize:18,fontWeight:'bold'}}>Login</Text>
         </TouchableOpacity>
         
         <TouchableOpacity
           style={styles.button}
           onPress={()=>this.userSignUp(this.state.emailId, this.state.password)}
           >
           <Text style={{color:'#ff5722',fontSize:18,fontWeight:'bold'}}>SignUp</Text>
         </TouchableOpacity>
     </View>
    );
 }
}
const styles = StyleSheet.create({
    loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
  }
 })