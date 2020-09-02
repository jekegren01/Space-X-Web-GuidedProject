import React from 'react';
import MissionsList from './MissionsList';
import { render, queryAllByTestId, getAllByTestId } from '@testing-library/react';

test('Successfully renders and shows data when rendered with new mission data', () => {
    //Arrange simulate the behavior of rendering this component to the page before we've made an api call
    //The below method is a simple way to test
    // const a = render(<MissionsList missions={[]}/>);
    // console.log(a);

    //The below method is done by destructuring
    const { queryAllByTestId, getAllByTestId, rerender } = render(<MissionsList missions={[]} />);
    // sanity check: make sure that there are no missions yet when the component mounts
    const initialMissions = queryAllByTestId(/mission/i);
    expect(initialMissions).toHaveLength(0);
    expect(initialMissions).toEqual([]);

    // Act: re-render the component with missions data
    // (this simulates when the user clicks "Get Data", triggering an api fetch)
    rerender(<MissionsList error="" missions={data} />);
    const missions = getAllByTestId(/mission/i);

    // Assert: 3 missions should render to the page
    expect(missions).toHaveLength(3);
});

const data = [
    {
        "mission_name": "Orbcomm OG2",
        "mission_id": "CE91D46",
        "manufacturers": [
            "Sierra Nevada Corporation"
        ],
        "payload_ids": [
            "Orbcomm-OG2",
            "Orbcomm-OG2-M1",
            "Orbcomm-OG2-M2"
        ],
        "wikipedia": "https://en.wikipedia.org/wiki/Orbcomm_(satellite)#Orbcomm-OG2",
        "website": "https://www.orbcomm.com/",
        "twitter": "https://twitter.com/orbcomm_inc",
        "description": "Orbcomm Generation 2 (OG2) second-generation satellites are intended to supplement and eventually replace the current first generation constellation. Eighteen satellites were ordered by 2008—nominally intended to be launched in three groups of six during 2010–2014—and by 2015 have all been launched, on three flights. Orbcomm has options for a further thirty OG2 spacecraft. The satellites were launched by SpaceX on the Falcon 9 launch system. Originally, they were to launch on the smaller Falcon 1e rocket."
    },
    {
        "mission_name": "ABS",
        "mission_id": "2CF444A",
        "manufacturers": [
            "Boeing"
        ],
        "payload_ids": [
            "ABS-3A",
            "ABS-3B"
        ],
        "wikipedia": "https://en.wikipedia.org/wiki/ABS_(satellite_operator)",
        "website": "http://www.absatellite.com/",
        "twitter": null,
        "description": "ABS, formerly Asia Broadcast Satellite, is a global satellite operator based in Hong Kong and officially incorporated in Bermuda. Its services include direct-to-home and satellite-to-cable TV distribution, cellular services, and internet services. Operating 6 communication satellites, the satellite fleet currently covers 93% of the world's population including the Americas, Africa, Asia Pacific, Europe, the Middle East, Russia and Commonwealth of Independent States."
    },
    {
        "mission_name": "Eutelsat",
        "mission_id": "F7709F2",
        "manufacturers": [
            "Boeing"
        ],
        "payload_ids": [
            "Eutelsat 115 West B",
            "Eutelsat 117 West B"
        ],
        "wikipedia": "https://en.wikipedia.org/wiki/Eutelsat",
        "website": "https://www.eutelsat.com/en/home.html#",
        "twitter": "https://twitter.com/Eutelsat_SA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        "description": "Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues."
    }
];


