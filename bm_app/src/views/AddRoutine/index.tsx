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
import {SafeAreaView} from 'react-native-safe-area-context';
import {addRoutine} from '../../helpers/firebase/addRoutine';
import {colors} from '../colors';
import {formatTime} from '../../helpers/format';
import {styles} from './stylesAddRoutine';

const AddRoutine = ({navigation}: any) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [hours, setHours] = useState<{
    time: string | undefined;
    timePicker: boolean;
  }>({time: undefined, timePicker: false});
  console.log(hours);
  const [departure, setDeparture] = useState<string | undefined>(undefined);
  const [arrival, setArrival] = useState<string | undefined>(undefined);

  const handleAddRoutine = async () => {
    addRoutine(name, hours, departure, arrival, navigation, setLoading);
  };

  return (
    <SafeAreaView>
      <ScrollView>
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
                console.log(value);

                if (value.nativeEvent.timestamp) {
                  console.log(
                    new Date(value.nativeEvent.timestamp).getMinutes(),
                  );

                  setHours({
                    time: formatTime(new Date(value.nativeEvent.timestamp)),
                    timePicker: false,
                  });
                }
              }}
            />
          )}
          <View style={styles.inputView}>
            <Text style={styles.aboveText}>Départ</Text>
            <TextInput
              value={departure}
              selectionColor={colors.ultraDark}
              style={styles.input}
              placeholder="1 Av. du Dr Albert Schweitzer, 33400 Talence"
              placeholderTextColor={'rgba(52, 52, 76, 0.5)'}
              maxLength={128}
              onChangeText={value => setDeparture(value)}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.aboveText}>Arrivée</Text>
            <TextInput
              value={arrival}
              selectionColor={colors.ultraDark}
              style={styles.input}
              placeholder="Cedex Esplanande Charles-de-Gaulle, 33000 Bordeaux"
              placeholderTextColor={'rgba(52, 52, 76, 0.5)'}
              maxLength={128}
              underlineColorAndroid="transparent"
              onChangeText={value => setArrival(value)}
            />
          </View>
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
          Les addresses doivent se trouver dans la métropole bordelaise et
          écrites de la manière suivante : 1 Av du Dr Albert Swheitzer, 33400
          Talence
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddRoutine;
