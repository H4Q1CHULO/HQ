// Ganti konfigurasi Firebase di bawah ini dengan punyamu
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKzX5Z2MPAabKkrTYuXvdRr8cqYbDhoWM",
    authDomain: "grow-iot-8fba8.firebaseapp.com",
    databaseURL: "https://grow-iot-8fba8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "grow-iot-8fba8",
    storageBucket: "grow-iot-8fba8.firebasestorage.app",
    messagingSenderId: "455814807543",
    appId: "1:455814807543:web:18f406aaeae13dee3b78f2",
    measurementId: "G-RTRHSX4E70"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  const setpointRef = db.ref("HQ/CONTROL/setpoin");
  const kpRef = db.ref("HQ/CONTROL/kp");
  const kiRef = db.ref("HQ/CONTROL/ki");
  const kdRef = db.ref("HQ/CONTROL/kd");
  
  function updateSetpoint() {
    const newSetpoint = parseFloat(document.getElementById("setpointInput").value);
    if (!isNaN(newSetpoint)) {
      setpointRef.set(newSetpoint.toFixed(1));
    }
  }
  
  
  setpointRef.on("value", (snapshot) => {
    const val = snapshot.val();
    document.getElementById("currentSetpoint").innerText = val;
    document.getElementById("setpointInput").value = val;
  });
  
  
  kpRef.on("value", (snapshot) => {
    document.getElementById("kp").innerText = snapshot.val();
  });
  kiRef.on("value", (snapshot) => {
    document.getElementById("ki").innerText = snapshot.val();
  });
  kdRef.on("value", (snapshot) => {
    document.getElementById("kd").innerText = snapshot.val();
  });
  