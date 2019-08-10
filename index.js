import { Navigation } from 'react-native-navigation';
import { TouchableOpacity } from 'react-native';
import { ROUTES } from './src/helpers/routes';

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

Navigation.events().registerAppLaunchedListener(() => {
	// if (isLoggedIn) {}
	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: { name: 'App', passProps: {} }
					},
					{
						component: { name: 'Settings', passProps: {} }
					},
				],
				options: {
					topBar: { title: { text: 'Welcome' } },
				}
			},
		},
	});
});
