import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const tweetData = [

    {"id":1,"user_id":1,"tweet_text":"Hello World","tweet_date":"2021-11-16T02:22:12.216915"},
    {"id":2,"user_id":1,"tweet_text":"Soy Hacker","tweet_date":"2021-11-16T02:22:19.444136"},
    {"id":3,"user_id":1,"tweet_text":"Mamá estoy programando","tweet_date":"2021-11-16T02:22:31.572241"},
    {"id":4,"user_id":1,"tweet_text":"adios mundo","tweet_date":"2021-11-16T02:26:53.802316"},
  

]


const HomeScreen = ({ route, navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 40}}>Home Screen</Text>
      
      {
          tweetData.map ( tweet => (
            <Text key = {tweet.user_id}> {tweet.tweet_text}</Text>

          ))
      }
      </View>
    );
  }
  export default HomeScreen