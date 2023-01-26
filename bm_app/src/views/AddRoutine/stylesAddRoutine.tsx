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
    marginBottom: 32,
  },
  inputView: {
    marginBottom: 12,
  },
  aboveText: {
    fontSize: 20,
    color: colors.medium,
    marginBottom: 8,
  },
  autocompleteInput: {
    borderColor: colors.dark,
    borderWidth: 2,
    backgroundColor: 'inherit',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  autoCompleteTextInput: {
    fontSize: 28,
    fontWeight: '400',
    color: colors.ultraDark,
    backgroundColor: 'inherit',
  },
  autocompleteRow: {
    backgroundColor: 'inherit',
  },
  autocompleteListView: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: colors.dark,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  autocompleteDescription: {
    fontSize: 16,
    color: colors.ultraDark,
    fontWeight: '300',
    paddingVertical: 8,
  },
  input: {
    borderColor: colors.dark,
    borderWidth: 2,
    backgroundColor: 'inherit',
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
    margin: 32,
  },
});
