import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Routine} from '../../helpers/type';
import RoutineView from '../../components/RoutineView';
import auth from '@react-native-firebase/auth';
import {colors} from '../colors';
import {firebase} from '@react-native-firebase/auth';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import {getRoutines} from '../../helpers/firebase/getRoutines';
import {styles} from './stylesBoard';
import {useIsFocused} from '@react-navigation/native';

const Board = ({navigation}: any) => {
  const [routines, setRoutines] = useState<Routine[]>();
  const [routinetoView, setRoutineToView] = useState<Routine>();
  // TODO doc à partir de l'utilisateur uid
  const user = firebase.auth().currentUser;

  const isFocused = useIsFocused();

  const getRoutinesAgain = () => getRoutines(user, setRoutines);

  useEffect(() => {
    setInterval;
    getRoutines(user, setRoutines);
  }, [user, isFocused]);

  const logOut = () => {
    auth().signOut;

    navigation.navigate('HomePage');
  };

  const actualDate: string = format(new Date(), "'Routines du' eeee dd MMMM", {
    locale: fr,
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      {routinetoView ? (
        <RoutineView
          setRoutineToView={setRoutineToView}
          routineToView={routinetoView}
          getRoutinesAgain={getRoutinesAgain}
        />
      ) : (
        <ScrollView>
          <Text style={styles.headerText}>Bordeaux, aujourd'hui</Text>
          <View style={styles.routinesView}>
            <Text style={styles.dateText}>{actualDate}</Text>
            {routines ? (
              routines.map(r => {
                return (
                  <TouchableOpacity
                    style={styles.routineView}
                    key={r.name}
                    onPress={() => setRoutineToView(r)}>
                    <Text style={styles.routineText}>{r.name}</Text>
                    <Image
                      style={styles.routineArrow}
                      source={require('../../../assets/arrowhead.png')}
                    />
                  </TouchableOpacity>
                );
              })
            ) : (
              <ActivityIndicator size="large" color={colors.dark} />
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddRoutine');
            }}>
            <Text style={styles.addRoutineText}>
              + ajouter une nouvelle routine
            </Text>
          </TouchableOpacity>
          <Text style={styles.adviceText}>
            Bordeaux métropole s’engage à vous aider au mieux lors de vos
            déplacements. Déclarez vos routines de déplacements et observez les
            chaque jour avec l’application SMOB.
          </Text>
          <TouchableOpacity
            style={styles.disconnectView}
            onPress={() => {
              logOut();
            }}>
            <Image
              style={styles.disconnectButton}
              source={require('../../../assets/logout.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Board;
