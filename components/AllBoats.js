import React from 'react';
import {ScrollView} from 'react-native';
import Boat from './Boat';  // Use the Boat component

const AllBoats = () => {
    return (
        <ScrollView>
            <Boat
                name="Bayliner"
                year={2021}
                image={require('../img/bayliner.jpg')}
                description="The Bayliner is a versatile and reliable boat rider, ideal for families seeking fun-filled adventures on the water with top-tier comfort and performance."
            />
            <Boat
                name="Princess"
                year={2022}
                image={require('../img/princess.jpg')}
                description="The Princess boat rider exudes luxury and elegance, designed for those who appreciate high-end craftsmanship and smooth sailing on any voyage."
            />
            {/* Add more boats with descriptions as needed */}
        </ScrollView>
    );
};

export default AllBoats;
