import React, {useContext, useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ActivityIndicator,
    Image
} from 'react-native';

import SocialButton from '../components/SocialButton';
import { AuthScreen } from '../navigation/AuthScreen';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Login({navigation}) {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true,
    });
 
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleEmailChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                email: val,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                email: val,
                isValidEmail: false
            });
        }
    }

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#e9f4f8' barStyle="dark-content"/>
        <View style={styles.header}>
        <Image source={require('../assets/Martopia.jpeg')} style={styles.logo}></Image>  
        <Text style={styles.text_header}>
                Welcome to Martopia!
            </Text>  
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <Text style={styles.text_footer}>Email ID</Text>
            <View style={styles.action}>
                <MaterialIcons 
                    name="email"
                    color="#666666"
                    size={20}
                />
                <TextInput
                    placeholder="Your email address"
                    keyboardType="email-address"
                    style={styles.textInput}
                    autoCapitalize="none"
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
            />

        </View>
        { data.isValidEmail ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={styles.errorMsg}>Email must be 8 characters long.</Text>
        </Animatable.View>
        }

            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#666666"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword) }
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="#A9A9A9"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="#e9f4f8"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#FF7F50', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.login}
                    onPress={() => navigation.navigate('MainTab')}
                >
                <LinearGradient
                    colors={['#e9f4f8', '#e9f4f8']}
                    style={styles.login}
                >
                    <Text style={[styles.textSign, {
                        color:'#102c36'
                    }]}>Login</Text>
                </LinearGradient>
                </TouchableOpacity>
     
                <SocialButton 
                    buttonTitle="Sign In with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#e9f4f8"
                    onPress={() => { }}
                    //onPress={() => googleLogin()}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={[styles.login, {
                        borderColor: '#102c36',
                        borderWidth: 1,
                        marginTop: 15,
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#e9f4f8'
                    }]}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#e9f4f8'
    },
    header: {
        flex: 1,
        justifyContent:'center',
        paddingHorizontal: 30,
        paddingTop:30,
        paddingLeft:55
    },
    footer: {
        flex: 3,
        backgroundColor: '#102c36',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#102c36',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom:20,
    },
    text_footer: {
        color: 'white',
        fontSize: 18,
        paddingTop:15,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'white',
    },
    errorMsg: {
        color: '#FA8072',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorLabelContainerStyle: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center"
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center"
    },
    logo:{
        height: '50%',
        width: '50%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center',
     },
  });