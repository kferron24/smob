import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[colors.dark, colors.medium, colors.light]}
        style={styles.body}>
        <Image
          source={require('../../../assets/SmobLOGO.png')}
          style={styles.smob}
        />
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
});

export default Home;
