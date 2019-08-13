import { Navigation } from 'react-native-navigation';
import { TouchableOpacity } from 'react-native';
import { setRootLaunch } from './src/helpers/routes';

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

Navigation.events().registerAppLaunchedListener(() => {
	// if (isLoggedIn) {}
	setRootLaunch();
});
