import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const styles = StyleSheet.create({
  addRoutineHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 32,
  },
  arrowBack: {
    resizeMode: 'contain',
    width: 28,
    height: 28,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '500',
    color: colors.light,
  },
  inputsView: {
    marginHorizontal: 32,
    marginTop: 32,
    marginBottom: 8,
  },
  inputView: {
    marginBottom: 12,
  },
  aboveText: {
    fontSize: 20,
    color: colors.medium,
    marginBottom: 8,
  },
  input: {
    borderColor: colors.dark,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 28,
    fontWeight: '400',
    paddingHorizontal: 20,
    color: colors.ultraDark,
  },
  inputTime: {
    borderColor: colors.dark,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 28,
    fontWeight: '400',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: colors.ultraDark,
  },
  inputTimeBis: {
    borderColor: colors.dark,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 28,
    fontWeight: '400',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'rgba(52, 52, 76, 0.5)',
  },
  addButton: {
    width: 'auto',
    alignSelf: 'flex-end',
  },
  submitText: {
    color: colors.medium,
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'right',
    marginHorizontal: 10,
    marginVertical: 8,
  },
  adviceText: {
    fontSize: 12,
    color: colors.dark,
    fontWeight: '400',
    textAlign: 'justify',
    marginHorizontal: 30,
  },
});
