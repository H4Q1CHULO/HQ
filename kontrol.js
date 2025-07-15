// Ganti konfigurasi Firebase di bawah ini dengan punyamu
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL3l3Fb9_Q1CAkjwxEBvG6Tb1W-HJwUCI",
  authDomain: "hqchulo.firebaseapp.com",
  databaseURL: "https://hqchulo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hqchulo",
  storageBucket: "hqchulo.firebasestorage.app",
  messagingSenderId: "1008179913372",
  appId: "1:1008179913372:web:be2b758dfc42ee61544359",
  measurementId: "G-LE5GX298ZJ"
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
  