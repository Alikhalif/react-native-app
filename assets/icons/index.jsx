import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Home from './Home'
import Back from './Back'
import { theme } from '../../constants/Colors'
import Google from './Google'
import Camera from './Camera'
import Next from './Next'
import Plus from './Plus'

const icons = {
    home: Home,
    back: Back,
    google: Google,
    camera: Camera,
    next: Next,
    plus: Plus,
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];
    return (
        <IconComponent
            height = {props.size || 24}
            width = {props.size || 24}
            strokeWidth = {props.strokeWidth || 1.9}
            color = {theme.colors.textLight}
            {...props}
        />
    )
}

export default Icon;

const styles = StyleSheet.create({})