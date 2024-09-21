import { View, Text, StyleSheet, Image, Pressable, Alert, ScrollView } from 'react-native'
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


const SignUp = () => {

  const router = useRouter();
  const usernameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if(!usernameRef.current || !phoneRef.current || !passwordRef.current || !passwordConfirmRef.current){
      Alert.alert('Sign Up', "please fill all the fields!")
      return;
    }
  }
  return (
    <ScreenWrapper bg='white'>
      {/* <Text>SignUp</Text> */}
      {/* <Home strokeWidth={2}/> */}
      <View style={{paddingHorizontal: wp(5)}}>
        <ButtonBack router={router}/>
        <ScrollView>
          <View style={styles.container}>
            

            {/* welcome */}
            <View>
              <Text style={styles.welcomText}>Hey,</Text>
              <Text style={styles.welcomText}>Welcome Back</Text>
            </View>

            <Text style={{fontSize: hp(2), color: theme.colors.text}}>
              Create your account
            </Text>
            <View style={styles.form}>
              

              <View style={{gap:10}}>
                <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                  Username
                </Text>
                <Input
                  
                  placeholder='Enter your username'
                  onChabgeText={value=> usernameRef.current = value}
                />
              </View>

              <View style={{gap:10}}>
                <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                  Phone
                </Text>
                <Input
                  
                  placeholder='Enter your username'
                  onChabgeText={value=> phoneRef.current = value}

                />
              </View>

              <View style={{gap:10}}>
                <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                  Password
                </Text>
                <Input
                  
                  placeholder='Enter your username'
                  secureTextEntry
                  onChabgeText={value=> passwordRef.current = value}

                />
              </View>

              <View style={{gap:10}}>
                <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                  Confirm password
                </Text>
                <Input
                  
                  placeholder='Enter your username'
                  secureTextEntry
                  onChabgeText={value=> passwordConfirmRef.current = value}

                />
              </View>

              <Button title='Register' loading={loading} onPress={onSubmit} />
            </View>

            {/* footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Have an account?
              </Text>
              <Pressable>
                <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}
                      onPress={() => router.push('login')}>
                  Login
                </Text>
              </Pressable>
            </View>

            <View>
              <ButtonGoogle/>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex: 1,
    gap: 30,
    // paddingHorizontal: wp(5)
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
