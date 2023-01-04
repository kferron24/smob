import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerText: {
    color: colors.ultraDark,
    fontSize: 36,
    fontWeight: '300',
    width: '50%',
    marginTop: 20,
    marginLeft: 20,
  },
  routinesView: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  dateText: {
    fontSize: 20,
    color: colors.medium,
    fontWeight: '800',
  },
  routineView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 16,
    backgroundColor: colors.dark,
    borderRadius: 10,
    elevation: 5,
  },
  routineText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  routineArrow: {
    resizeMode: 'contain',
    width: 28,
    height: 28,
  },
  addRoutineText: {
    color: colors.light,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'right',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  adviceText: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '400',
    margin: 40,
    textAlign: 'justify',
  },
  disconnectView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  disconnectButton: {
    marginHorizontal: 40,
    marginVertical: 10,
    right: 0,
    resizeMode: 'contain',
    width: 36,
    height: 36,
  },
});
