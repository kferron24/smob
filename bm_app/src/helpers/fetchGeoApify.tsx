import Snackbar from 'react-native-snackbar';
import {colors} from '../views/colors';

const adressManager = (adress: string) => {
  const adressToManage = adress;
  const adressSeparatedByComa = adressToManage.split(',');
  const streetSeparatedBySpace = adressSeparatedByComa[0]?.split(' ');
  const citySeparatedBySpace = adressSeparatedByComa[1]?.split(' ');
  const adressAllSeparated: string[][] = [
    streetSeparatedBySpace,
    citySeparatedBySpace,
  ];

  adressAllSeparated[0]?.map((add, index) => {
    if (add === '') {
      adressAllSeparated[0].splice(index, 1);
    }
  });
  adressAllSeparated[1]?.map((add, index) => {
    if (add === '') {
      adressAllSeparated[1].splice(index, 1);
    }
  });
  return adressAllSeparated;
};

export const fetchGeoApify = async (
  adress: string,
): Promise<[boolean, string, string]> => {
  let fetchAdress = '';
  let fetchResult = false;
  let lat = '';
  let lon = '';
  const adressAllSeparated: string[][] = adressManager(adress);
  adressAllSeparated[0]?.map((add, index) => {
    if (index === 0) {
      fetchAdress += add;
    } else {
      fetchAdress += '%20';
      fetchAdress += add;
    }
  });
  adressAllSeparated[1]?.map((add, index) => {
    if (index === 0) {
      fetchAdress += '%2C%20';
      fetchAdress += add;
    } else {
      fetchAdress += '%20';
      fetchAdress += add;
    }
  });

  var requestOptions = {
    method: 'GET',
  };
  await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${fetchAdress}%2C%20France&format=json&apiKey=3a400ba0223646428cec453c757d1829`,
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      console.log(result.results[0].lat);
      console.log(result.results[0].lon);
      console.log(result.results[0].name);
      console.log(result.results[0].municipality);
      console.log(result.results[0].city);

      if (
        result.results[0].name === 'Bordeaux Centre' ||
        result.results[0].municipality === 'Bordeaux' ||
        result.results[0].city === 'Bordeaux'
      ) {
        console.log('SUCCESSS');
        fetchResult = true;
        lat = result.results[0].lat;
        lon = result.results[0].lon;
      } else {
        fetchResult = false;
      }
    })
    .catch(error => {
      Snackbar.dismiss();
      Snackbar.show({
        text: 'Une erreur est survénu lors de la géolocalisation, veuillez réessayer.',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.ultraDark,
      });
      console.log(error);
      fetchResult = false;
    });
  console.log(fetchResult);
  return [fetchResult, lat, lon];
};
