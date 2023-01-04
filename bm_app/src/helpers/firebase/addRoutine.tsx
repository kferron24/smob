import Snackbar from 'react-native-snackbar';
import {colors} from '../../views/colors';
import {fetchGeoApify} from '../../helpers/fetchGeoApify';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const addRoutine = async (
  name: string | undefined,
  hours: {
    time: string | undefined;
    timePicker: boolean;
  },
  departure: string | undefined,
  arrival: string | undefined,
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
    const [fetchResultDeparture, latDeparture, lonDeparture] =
      await fetchGeoApify(departure);
    const [fetchResultArrival, latArrival, lonArrival] = await fetchGeoApify(
      arrival,
    );
    console.log('Protu', fetchResultArrival, fetchResultDeparture);
    console.log('LAT:', latDeparture, lonDeparture, latArrival, lonArrival);

    if (!fetchResultDeparture || !fetchResultArrival) {
      setLoading(false);
      Snackbar.dismiss();
      Snackbar.show({
        text: "L'une de vos adresses n'est pas dans le bon format ou ne s'ouvre pas dans la métropole bordelaise.",
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
          departure,
          arrival,
          latDeparture,
          lonDeparture,
          latArrival,
          lonArrival,
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
