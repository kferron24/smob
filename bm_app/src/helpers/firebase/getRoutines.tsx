import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Routine} from '../type';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../views/colors';
import firestore from '@react-native-firebase/firestore';

export const getRoutines = async (
  user: FirebaseAuthTypes.User | null,
  setRoutines: React.Dispatch<React.SetStateAction<Routine[] | undefined>>,
) => {
  const listRoutines: Routine[] = [];
  try {
    await firestore()
      .collection('Users')
      .doc(user?.uid)
      .collection('routines')
      .get()
      .then(routinesQuery => {
        routinesQuery.docs.map(r => {
          listRoutines.push({
            name: r.data().name,
            arrival: r.data().arrival,
            departure: r.data().departure,
            arrivalTime: r.data().arrivalTime,
            departureTime: r.data().departureTime,
            latArrival: r.data().latArrival,
            lonArrival: r.data().lonArrival,
            latDeparture: r.data().latDeparture,
            lonDeparture: r.data().lonDeparture,
            status: r.data().status,
            msg: r.data().msg,
            id: r.id,
          });
          console.log(r.data());
        });
        setRoutines(listRoutines.reverse());
      });
  } catch (error) {
    Snackbar.show({
      text: "Une erreur s'est produite lors du chargement des routines.",
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.ultraDark,
    });
  }
};
