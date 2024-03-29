import {Adress} from '../../views/AddRoutine';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../views/colors';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const addRoutine = async (
  name: string | undefined,
  hours: {
    time: string | undefined;
    timePicker: boolean;
  },
  departure: Adress | undefined,
  arrival: Adress | undefined,
  navigation: any,
  setLoading: (value: React.SetStateAction<boolean>) => void,
) => {
  if (!name || !hours.time || !departure || !arrival) {
    Snackbar.show({
      text: 'Veuillez remplir chaque information sur votre routine.',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.ultraDark,
    });
  } else {
    setLoading(true);

    if (
      departure.department !== 'Gironde' ||
      arrival.department !== 'Gironde'
    ) {
      setLoading(false);
      Snackbar.dismiss();
      Snackbar.show({
        text: "L'une de vos adresses ne se trouve pas dans la métropole bordelaise ou dans le dapartement.",
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.ultraDark,
      });
    } else {
      const user = firebase.auth().currentUser;
      await firestore()
        .collection('Users')
        .doc(user?.uid)
        .collection('routines')
        .doc()
        .set({
          name,
          departureTime: '',
          arrivalTime: hours.time,
          departure: departure.description,
          arrival: arrival.description,
          latDeparture: departure.lat,
          lonDeparture: departure.lon,
          latArrival: arrival.lat,
          lonArrival: arrival.lon,
          status: '',
          msg: '',
        })
        .then(() => {
          navigation.navigate('Board');
        })
        .catch(() => {
          Snackbar.dismiss();
          Snackbar.show({
            text: "Une erreur est survenue lors de l'enregistrement de votre routine. Veuillez réessayer.",
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.ultraDark,
          });
        });
      setLoading(false);
    }
  }
};

export const deleteRoutine = async (docId: string) => {
  const user = firebase.auth().currentUser;
  await firestore()
    .collection('Users')
    .doc(user?.uid)
    .collection('routines')
    .doc(docId)
    .delete()
    .catch(() => {
      Snackbar.dismiss();
      Snackbar.show({
        text: 'Une erreur est survenue lors de la suppression de votre routine. Veuillez réessayer.',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.ultraDark,
      });
    });
};
