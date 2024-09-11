import React from 'react'
import { Circle, G, Path, Svg } from 'react-native-svg'

const Plus = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" id="user">
            <G fill="none" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1 1)">
                <Path d="M15 18v-2a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v2"></Path>
                <Circle cx="7.5" cy="4" r="4"></Circle>
                <Path d="M19 5v6M22 8h-6"></Path>
            </G>
        </Svg>
    )
}

export default Plus;