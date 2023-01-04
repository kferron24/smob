import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {LeafletView} from 'react-native-leaflet-view';
import React from 'react';
import {Routine} from '../../helpers/type';
import {SafeAreaView} from 'react-native-safe-area-context';
import {deleteRoutine} from '../../helpers/firebase/addRoutine';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import {styles} from './stylesRoutineView';

type Props = {
  setRoutineToView: React.Dispatch<React.SetStateAction<Routine | undefined>>;
  routineToView: Routine;
  getRoutinesAgain: () => Promise<void>;
};

const RoutineView = (props: Props) => {
  const {setRoutineToView, routineToView, getRoutinesAgain} = props;
  console.log(routineToView.latArrival);
  const actualDate: string = format(new Date(), 'dd/MM/yy', {
    locale: fr,
  });

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  console.log('Prout', Number(routineToView.latDeparture));

  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <View>
          <View style={styles.addRoutineHeader}>
            <TouchableOpacity onPress={() => setRoutineToView(undefined)}>
              <Image
                style={styles.arrowBack}
                source={require('../../../assets/arrowHeadLeftWhite.png')}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>{routineToView.name}</Text>
          </View>
          <Text style={styles.dateText}>{actualDate}</Text>
        </View>
        <View style={styles.parametersView}>
          <View style={styles.parameterView}>
            <Text style={styles.parameterLabel}>Heure d'arrivée: </Text>
            <Text style={styles.parameterValue}>
              {routineToView.arrivalTime}
            </Text>
          </View>
          <View style={styles.parameterView}>
            <Text style={styles.parameterLabel}>Départ: </Text>
            <Text numberOfLines={1} style={styles.parameterValue}>
              {routineToView.departure}
            </Text>
          </View>
          <View style={styles.parameterView}>
            <Text style={styles.parameterLabel}>Arrivée: </Text>
            <Text numberOfLines={1} style={styles.parameterValue}>
              {routineToView.arrival}
            </Text>
          </View>
        </View>
        <ScrollView style={styles.infosView}>
          <View style={styles.infoTime}>
            <Text style={styles.infoTimeLabel}>Départ conseillé: </Text>
            <Text style={styles.infoTimeValue}>
              {routineToView.departureTime}
            </Text>
          </View>
          <Text style={styles.msg}>{routineToView.msg}</Text>
        </ScrollView>
        <View style={styles.map}>
          <LeafletView
            mapCenterPosition={{lat: 44.837789, lng: -0.57918}}
            zoom={10}
            mapMarkers={[
              {
                position: {
                  lat: Number(routineToView.latDeparture),
                  lng: Number(routineToView.lonDeparture),
                },
                icon: 'Arrivée',
                size: [10, 10],
              },
              {
                position: {
                  lat: Number(routineToView.latArrival),
                  lng: Number(routineToView.lonArrival),
                },
                icon: 'Départ',
                size: [10, 10],
              },
            ]}
          />
          {/* Necessary cause of the webView, add space to display the web view of the leafmap */}
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
        </View>
        <TouchableOpacity
          style={styles.binButton}
          onPress={() => {
            deleteRoutine(routineToView.id);
            setRoutineToView(undefined);
            getRoutinesAgain();
          }}>
          <Image
            style={styles.binIcon}
            source={require('../../../assets/bin.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RoutineView;
