import auth, {firebase} from '@react-native-firebase/auth';

import Snackbar from 'react-native-snackbar';
import {colors} from '../../views/colors';
import firestore from '@react-native-firebase/firestore';

export const signIn = async (
  navigation: any,
  email: string,
  password: string,
  name: string,
  firstName: string,
) => {
  let response: string = 'Veuillez remplir chaque formulaire';
  if (email && password && name && firstName) {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        const user = firebase.auth().currentUser;
        await firestore()
          .collection('Users')
          .doc(user?.uid)
          .set({
            email: email,
            password: password,
            name: name,
            firstName: firstName,
          })
          .then(() => {
            console.log('User added!');
          })
          .catch(error => {
            console.log(error);
          });
        response = '';
        navigation.navigate('Board');
      })
      .catch(e => {
        console.log(e.code);
        switch (e.code) {
          case 'auth/email-already-in-use':
            response = 'Cet email est déjà pris.';
            break;
          case 'auth/invalid-email':
            response = "L'email n'est pas valide.";
            break;
          case 'auth/unknown':
            response = 'Remplissez chacun des formulaires.';
            break;
          case 'auth/weak-password':
            response = 'Le mot de passe doit faire au moins 6 caractères';
            break;
          default:
            response = "Une erreur s'est produite.";
            break;
        }
      });
  }
  response &&
    Snackbar.show({
      text: response,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.ultraDark,
    });
};
