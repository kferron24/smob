import React, {useEffect, useRef, useState} from 'react';
import {Animated, Image, SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogIn from '../../components/Log/LogIn';
import SignIn from '../../components/Log/SignIn';
import {colors} from '../colors';

const HomePage = ({navigation}: any) => {
  const [signed, setSigned] = useState<boolean>(true);
  const progress = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 0,
      useNativeDriver: false,
      duration: 3000,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: false,
      duration: 5000,
    }).start();
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[colors.dark, colors.medium, colors.light]}
        style={styles.body}>
        <Animated.Image
          source={require('../../../assets/SmobLOGO.png')}
          style={[styles.smob, {transform: [{translateY: progress}]}]}
        />
        <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
          {signed ? (
            <LogIn setSigned={setSigned} navigation={navigation} />
          ) : (
            <SignIn setSigned={setSigned} navigation={navigation} />
          )}
        </Animated.View>
        <Animated.View style={[styles.logosView, {opacity: fadeAnim}]}>
          <Image
            source={require('../../../assets/ATOS.png')}
            style={styles.logo}
          />
          <Image
            source={require('../../../assets/BDX.png')}
            style={styles.logo}
          />
          <Image
            source={require('../../../assets/enseirb.png')}
            style={styles.logo}
          />
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  body: {
    backgroundColor: 'blue',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  smob: {
    flex: 2,
    width: '50%',
    resizeMode: 'contain',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    flex: 6,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    borderColor: 'rgb(255, 230, 247)',
    borderWidth: 4,
    borderRadius: 30,
    width: '75%',
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
  },

  input: {
    height: 50,
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  noSignUpText: {
    marginVertical: 10,
    fontSize: 16,
  },
  noSignUpButton: {
    marginVertical: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  buttonView: {
    backgroundColor: 'rgb(255, 230, 247)',
    width: '50%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5,
  },
  buttonText: {
    height: 100,
    flex: 1,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logosView: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: undefined,
    height: '100%',
    aspectRatio: 1,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
});

export default HomePage;
