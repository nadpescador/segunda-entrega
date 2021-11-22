import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native';


export const ActivityScreen = () => {

    const [activity, setActivity] = useState([]);

    const fetchActivities = async () => {
        let resp = await fetch("https://www.boredapi.com/api/activity")
        let respJson = await resp.json()
        setActivity(respJson["activity"]);
    }

    const NewActivity = () => {
        fetchActivities();
    }

    useEffect(() => {
        fetchActivities();
    }, [])

    return (

        <View style={{ marginTop: 10 }}>
            <View style={{ marginLeft: 15 }}>
                <Text style={{
                    justifyContent: 'center', alignContent: 'center', fontSize: 40,
                    fontWeight: 'bold', marginBottom: 50
                }}>What can you do today?</Text>
            </View>
            <View
                style={{
                    height: 380,
                    marginLeft: 10,
                    marginRight: 10
                }}
            >

                <Button
                    title="New Activity"
                    onPress={NewActivity}
                />

                <View>
                    <Text style={{ fontSize: 22, marginTop: 20 }}>
                        Activity:
                    </Text>

                </View>
                <Text>
                    {activity}
                </Text>

            </View>
        </View>
    )
}
