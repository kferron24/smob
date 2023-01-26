import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {LogBox} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {addRoutine} from '../../helpers/firebase/addRoutine';
import {colors} from '../colors';
import {formatTime} from '../../helpers/format';
import {styles} from './stylesAddRoutine';

export type Adress = {
  description: string;
  lat: number | undefined;
  lon: number | undefined;
  department: string | undefined;
};

const AddRoutine = ({navigation}: any) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [hours, setHours] = useState<{
    time: string | undefined;
    timePicker: boolean;
  }>({time: undefined, timePicker: false});
  const [departure, setDeparture] = useState<Adress | undefined>(undefined);
  const [arrival, setArrival] = useState<Adress | undefined>(undefined);

  const handleAddRoutine = async () => {
    addRoutine(name, hours, departure, arrival, navigation, setLoading);
  };

  // TODO Remove cause it hides errors but it was the only solution to the problem between googleautocomplete and ScrollView
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // TODO: Remove when fixed

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.addRoutineHeader}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Board');
            }}>
            <Image
              style={styles.arrowBack}
              source={require('../../../assets/arrowHeadReverse.png')}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Nouvelle Routine</Text>
        </View>

        <View style={styles.inputsView}>
          <View style={styles.inputView}>
            <Text style={styles.aboveText}>Départ</Text>
            <GooglePlacesAutocomplete
              placeholder="1 Av. du Dr Albert Schweitzer, 33400 Talence"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                setDeparture({
                  description: data.description,
                  lat: details?.geometry.location.lat,
                  lon: details?.geometry.location.lng,
                  department: details?.address_components[3].long_name,
                });
              }}
              query={{
                key: 'GOOGLE API KEY',
                language: 'fr',
                components: 'country:fr',
              }}
              textInputProps={{
                placeholderTextColor: 'rgba(52, 52, 76, 0.5)',
              }}
              numberOfLines={1}
              disableScroll
              styles={{
                textInputContainer: styles.autocompleteInput,
                textInput: styles.autoCompleteTextInput,
                listView: styles.autocompleteListView,
                description: styles.autocompleteDescription,
                row: styles.autocompleteRow,
              }}
              enablePoweredByContainer={false}
              listViewDisplayed={false}
              keyboardShouldPersistTaps="handled"
              fetchDetails
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.aboveText}>Arrivée</Text>
            <GooglePlacesAutocomplete
              placeholder="1 Av. du Dr Albert Schweitzer, 33400 Talence"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                setArrival({
                  description: data.description,
                  lat: details?.geometry.location.lat,
                  lon: details?.geometry.location.lng,
                  department: details?.address_components[3].long_name,
                });
              }}
              query={{
                key: 'GOOGLE API KEY',
                language: 'fr',
                components: 'country:fr',
              }}
              textInputProps={{
                placeholderTextColor: 'rgba(52, 52, 76, 0.5)',
              }}
              numberOfLines={1}
              disableScroll
              styles={{
                textInputContainer: styles.autocompleteInput,
                textInput: styles.autoCompleteTextInput,
                listView: styles.autocompleteListView,
                description: styles.autocompleteDescription,
                row: styles.autocompleteRow,
              }}
              enablePoweredByContainer={false}
              fetchDetails
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.aboveText}>Nom de la routine</Text>
            <TextInput
              value={name}
              selectionColor={colors.ultraDark}
              style={styles.input}
              placeholder="Travail-matin"
              placeholderTextColor={'rgba(52, 52, 76, 0.5)'}
              maxLength={16}
              onChangeText={value => setName(value)}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.aboveText}>Heure d'arrivée</Text>

            <TouchableWithoutFeedback
              onPress={() => setHours({time: hours.time, timePicker: true})}>
              <Text style={hours.time ? styles.inputTime : styles.inputTimeBis}>
                {hours.time ?? '9:30'}
              </Text>
            </TouchableWithoutFeedback>
          </View>

          {hours.timePicker && (
            <DateTimePicker
              mode="time"
              display="clock"
              value={new Date()}
              onChange={value => {
                if (value.nativeEvent.timestamp) {
                  setHours({
                    time: formatTime(new Date(value.nativeEvent.timestamp)),
                    timePicker: false,
                  });
                }
              }}
            />
          )}

          {loading ? (
            <ActivityIndicator size="small" color={colors.medium} />
          ) : (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddRoutine()}>
              <Text style={styles.submitText}>Ajouter</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.adviceText}>
          Pour les adresses de Départ et d'Arrivée, n'oubliez pas que celles-ci
          doivent se trouver dans la métropole bordelaise.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddRoutine;
