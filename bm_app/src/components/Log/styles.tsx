import {StyleSheet} from 'react-native';
import {colors} from '../../views/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 6,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainerDouble: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputViewDouble: {
    borderColor: colors.flash,
    borderWidth: 4,
    borderRadius: 30,
    width: '35%',
    height: 50,
    margin: 10,
    alignItems: 'center',
    elevation: 5,
  },
  inputView: {
    borderColor: 'rgb(255, 230, 247)',
    borderWidth: 4,
    borderRadius: 30,
    width: '75%',
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,
  },
  input: {
    height: 50,
    textAlign: 'center',
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: 'white',
    justifyContent: 'center',
  },
  noSignUpText: {
    marginVertical: 10,
    fontSize: 16,
    color: colors.ultraDark,
    opacity: 0.6,
  },
  noSignUpButton: {
    marginVertical: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  buttonView: {
    backgroundColor: 'rgb(255, 230, 247)',
    width: '50%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5,
  },
  buttonText: {
    height: 100,
    flex: 1,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.ultraDark,
    opacity: 0.7,
  },
});