import React from 'react';
import {View, Text, Image} from 'react-native';

const Boat = ({name, year, image, description}) => {
    return (
        <View>
            <Image source={image} style={{width: 500, height: 300}} />
            <Text>
                {name} ({year})
            </Text>
            <Text>
                {description}  {/* Display the boat's advertisement description */}
            </Text>
        </View>
    );
};

export default Boat;
