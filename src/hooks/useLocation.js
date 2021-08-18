import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default (callback) => {

  const [errorMsg, setErrorMsg] = useState(null);
  
    const access = async () => {
      location = await Location.requestForegroundPermissionsAsync();
      status !== "granted" ? setErrorMsg("permission not granted") : null;
    };
  
    useEffect(() => {
      access();
        await Location.watchPositionAsync(
          {
            enableHighAccuracy: true,
            timeInterval: 3000,
            distanceInterval: 1,
          },
          callback
        );
    }, []);
  

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  return [errorMsg];
};