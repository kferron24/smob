import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {logIn} from '../../helpers/firebase/logIn';
import {styles} from './styles';

type Props = {
  setSigned: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
};

const LogIn = (props: Props) => {
  const {setSigned, navigation} = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLog = async () => {
    logIn(navigation, email, password);
  };

  return (
    <>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.input}
          keyboardType="email-address"
          selectionColor={'white'}
          placeholder={'E-mail'}
          placeholderTextColor={'white'}
          onChangeText={value => setEmail(value as any)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.input}
          selectionColor={'white'}
          placeholder={'Mot de passe'}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={'white'}
          onChangeText={value => setPassword(value as any)}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => {
          handleLog();
        }}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <Text style={styles.noSignUpText}>
        Tu n'as pas encore de compte SMOB ?{' '}
        <Text style={styles.noSignUpButton} onPress={() => setSigned(false)}>
          Inscris toi !
        </Text>
      </Text>
    </>
  );
};

export default LogIn;
