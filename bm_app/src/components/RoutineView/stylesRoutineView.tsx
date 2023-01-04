import {StyleSheet} from 'react-native';
import {colors} from '../../views/colors';

export const styles = StyleSheet.create({
  safearea: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  addRoutineHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 32,
  },
  arrowBack: {
    resizeMode: 'contain',
    width: 32,
    height: 32,
  },
  headerText: {
    fontSize: 36,
    fontWeight: '500',
    color: 'white',
  },
  dateText: {
    marginHorizontal: 32,
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
  },
  parametersView: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
  parameterView: {
    display: 'flex',
    flexDirection: 'row',
  },
  parameterLabel: {
    fontSize: 16,
    color: 'white',
    textAlignVertical: 'bottom',
  },
  parameterValue: {
    flexShrink: 1,
    fontSize: 20,
    color: 'white',
  },
  infosView: {
    backgroundColor: colors.flash,
  },
  infoTime: {
    marginHorizontal: 32,
    marginTop: 16,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  infoTimeLabel: {
    fontSize: 28,
    color: colors.ultraDark,
    textAlignVertical: 'bottom',
  },
  infoTimeValue: {
    flexShrink: 1,
    fontSize: 36,
    color: colors.medium,
    fontWeight: '800',
  },
  msg: {
    marginHorizontal: 32,
    fontSize: 20,
    textAlign: 'justify',
    color: colors.ultraDark,
    fontStyle: 'italic',
  },
  binButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 32,
    marginVertical: 16,
  },
  binIcon: {
    resizeMode: 'contain',
    width: 32,
    height: 32,
  },
  map: {
    marginHorizontal: 32,
    marginVertical: 16,
    borderRadius: 10,
    borderWidth: 8,
    borderColor: colors.medium,
  },
});
