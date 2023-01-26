import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections, {
  MapViewDirectionsDestination,
  MapViewDirectionsOrigin,
} from 'react-native-maps-directions';

import React from 'react';
import {Routine} from '../../helpers/type';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../views/colors';
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
  const actualDate: string = format(new Date(), 'dd/MM/yy', {
    locale: fr,
  });

  const origin: MapViewDirectionsOrigin | undefined =
    routineToView.latDeparture && routineToView.lonDeparture
      ? {
          latitude: Number(routineToView.latDeparture),
          longitude: Number(routineToView.lonDeparture),
        }
      : undefined;

  const destination: MapViewDirectionsDestination | undefined =
    routineToView.latArrival && routineToView.lonArrival
      ? {
          latitude: Number(routineToView.latArrival),
          longitude: Number(routineToView.lonArrival),
        }
      : undefined;

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
        <View style={styles.mapView}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialCamera={{
              center: {
                latitude: origin ? origin.latitude : 44.837789,
                longitude: origin ? origin.longitude : -0.57918,
              },
              zoom: 14,
              pitch: 20,
              heading: 20,
            }}
            zoomEnabled
            zoomControlEnabled>
            {origin && (
              <Marker
                coordinate={origin}
                title="Origin"
                pinColor={colors.medium}
              />
            )}
            {destination && (
              <Marker
                coordinate={destination}
                title="Origin"
                pinColor={colors.medium}
              />
            )}
            {origin && destination && (
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={'GOOGLE API KEY'}
                strokeWidth={5}
                strokeColor={colors.light}
              />
            )}
          </MapView>
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
