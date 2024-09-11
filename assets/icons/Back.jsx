import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Back = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="back-arrow">
            <Path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></Path>
            <Path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"></Path>
        </Svg>
    )
}

export default Back;