const getCurrentLocation = (cb) => {
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      const currentLocation = {
        lat: coords.latitude,
        lng: coords.longitude
      };
      cb(currentLocation);
    });
  }
};
export default getCurrentLocation;
