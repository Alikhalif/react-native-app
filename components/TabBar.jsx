import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Route } from 'expo-router/build/Route';



const TabBar = ({ state, descriptors, navigation }) => {

    const icons = {
        home: (props)=> <Feather name='home' size={30} color='gray' {...props}/>,
        staff: (props)=> <Ionicons name="people-outline" size={30} color="gray" {...props} />,
        deliveries: (props)=> <Fontisto name="broken-link" size={31} color="gray" {...props} />,
        notification: (props)=> <Ionicons name="notifications-outline" size={30} color="gray" {...props} />,
        more: (props)=> <Feather name="more-horizontal" size={30} color="gray" {...props} />,
        // plan: (props)=> <Feather name='cup' size={26} color='gray' {...props}/>,
        // profile: (props)=> <Ionicons name="person-circle-outline" size={26} color={theme.colors.text} {...props}/>,

    }

    return (
        <View style={ styles.tabbar }>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            console.log(route.name);
            if(['_sitemap', '+not-found', 'login', 'signUp', 'welcome', 'index', 'congrats', 'clients', 'createDelivery'].includes(route.name)) return null;

            const isFocused = state.index === index;

            const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
            }
            };

            const onLongPress = () => {
            navigation.emit({
                type: 'tabLongPress',
                target: route.key,
            });
            };

            return (
            <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabbarItem}
            >
                {
                    icons[route.name]({
                        color: isFocused? theme.colors.primary : 'gray'
                    })
                }
                <Text style={{ 
                    color: isFocused ? theme.colors.primary : '#222', 
                    fontSize: 11,
                }} >
                {label}
                </Text>
            </TouchableOpacity>
            );
        })}
        </View>
    );
}

export default TabBar;

const styles = StyleSheet.create({
    tabbar:{
        // position:'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.gray,
        paddingHorizontal:10,
        paddingVertical: 8,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderCurve: 'continuous',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.1,


    },
    tabbarItem:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    }
})