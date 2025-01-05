import { View, Text, StatusBar, Platform, Image } from 'react-native'
import React, { FC } from 'react'
import { useStyles } from 'react-native-unistyles'
import { loginStyles } from '@unistyles/authStyles'
import Animated from 'react-native-reanimated'
import CustomText from '@components/global/CustomText'
import BreakerText from '@components/ui/BreakerText'

const LoginScreen:FC = () => {

  const {styles} = useStyles(loginStyles);
  return (
    <View style={styles.container}>
       <StatusBar hidden={Platform.OS !== 'android'} />
             <Image
               source={require('@assets/images/login.png')}
               style={styles.cover}
             />

             <Animated.ScrollView
             bounces={false}
             keyboardShouldPersistTaps='handled'
             keyboardDismissMode='on-drag'
             contentContainerStyle={styles.bottomContainer}
             >

              <CustomText
              variant='h2'
              fontFamily='Okra-Bold'
              style={styles.title}
              >
                India's #1 Food Delivery and Dining App
              </CustomText>

              <BreakerText text='Log in or signup'/>

              {/* Phone inpur component has to be added here. */}
              
             </Animated.ScrollView>
    </View>
  )
}

export default LoginScreen