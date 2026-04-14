if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
        alert("Latitude:", position.coords.latitude);
        alert("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Error:", error.message);
    }
  );
} else {
  console.log("Geolocation not supported");
}