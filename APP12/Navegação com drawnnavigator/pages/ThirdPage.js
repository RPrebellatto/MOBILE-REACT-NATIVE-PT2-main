// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const ThirdPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Expêriencia!
          </Text>
          <Button
            onPress={() => navigation.navigate('FirstPage')}
            title="Go to First Page"
          />
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Go to Second Page"
          />
        </View>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'blue'}}>
          Custom React Navigate Drawer
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'blue'}}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
