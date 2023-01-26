import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {signIn} from '../../helpers/firebase/signIn';
import {styles} from './styles';

type Props = {
  setSigned: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
};

const SignIn = (props: Props) => {
  const {setSigned, navigation} = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');

  const handleSign = () => {
    signIn(navigation, email, password, name, firstName);
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
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={'Mot de passe'}
          placeholderTextColor={'white'}
          onChangeText={value => setPassword(value as any)}
        />
      </View>
      <View style={styles.inputContainerDouble}>
        <View style={styles.inputViewDouble}>
          <TextInput
            value={name}
            style={styles.input}
            selectionColor={'white'}
            placeholder={'Nom'}
            placeholderTextColor={'white'}
            onChangeText={value => setName(value)}
          />
        </View>
        <View style={styles.inputViewDouble}>
          <TextInput
            value={firstName}
            style={styles.input}
            selectionColor={'white'}
            placeholder={'Prénom'}
            placeholderTextColor={'white'}
            onChangeText={value => setFirstName(value)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => {
          handleSign();
        }}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <Text style={styles.noSignUpText}>
        Tu as déjà un compte SMOB ?{' '}
        <Text style={styles.noSignUpButton} onPress={() => setSigned(true)}>
          Connecte toi !
        </Text>
      </Text>
    </>
  );
};

export default SignIn;
