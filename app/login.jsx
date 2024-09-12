import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Home from '../assets/icons/Home'
import ButtonBack from '../components/ButtonBack'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/Colors'
import Input from '../components/input'
import Button from '../components/Button'
import loading from '../components/Loading'
import ButtonGoogle from '../components/ButtonGoogle'


const Login = () => {

  const router = useRouter();
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    router.push('client/profile')
    // if(!phoneRef.current || !passwordRef.current){
    //   Alert.alert('Login', "please fill all the fields!")
    //   return;
    // }
  }
  return (
    <ScreenWrapper bg='white'>
      
      <View style={styles.container}>
        <ButtonBack router={router}/>

        {/* welcome */}
        <View>
          <Text style={styles.welcomText}>Hey,</Text>
          <Text style={styles.welcomText}>Welcome Back</Text>
        </View>

        <Text style={{fontSize: hp(2), color: theme.colors.text}}>
        Sign In to your account
        </Text>
        <View style={styles.form}>

          <View style={{gap:10}}>
            <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
              Phone
            </Text>
            <Input
              
              placeholder='Enter your phone'
              onChabgeText={value=> phoneRef.current = value}

            />
          </View>

          <View style={{gap:10}}>
            <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
              Password
            </Text>
            <Input
              
              placeholder='Enter your password'
              secureTextEntry
              onChabgeText={value=> passwordRef.current = value}

            />
          </View>

          <Button title='Login' loading={loading} onPress={onSubmit} />
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don’t have an account?
          </Text>
          <Pressable>
            <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}
                  onPress={() => router.push('signUp')}>
              SignIn
            </Text>
          </Pressable>
        </View>

        <View>
          <ButtonGoogle/>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5)
  },
  welcomText:{
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text
  },
  form:{
    gap:10,
  },
  forgotPassword:{
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:5,
  },
  loginText:{
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})
