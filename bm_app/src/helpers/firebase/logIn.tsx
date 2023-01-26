import Snackbar from 'react-native-snackbar';
import auth from '@react-native-firebase/auth';
import {colors} from '../../views/colors';

export const logIn = async (
  navigation: any,
  email: string,
  password: string,
) => {
  let response: string = 'Veuillez remplir chaque formulaire';
  if (email && password) {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        response = '';
        navigation.navigate('Board');
      })
      .catch(e => {
        switch (e.code) {
          case 'auth/invalid-email':
            response = "L'email n'est pas valide.";
            break;
          case 'auth/user-not-found':
            response = "Cet utilisateur n'existe pas.";
            break;
          case 'auth/wrong-password':
            response = "Le mot de passe n'est pas bon.";
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
