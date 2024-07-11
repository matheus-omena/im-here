import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
    paddingTop: (Platform.OS === 'ios') ? 60 : 0,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#fff',    
  },
  button: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#31CF67'
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  },
  emptyListContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  emptyListText: {
    color: '#ffffff'
  }
});