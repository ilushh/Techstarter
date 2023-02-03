// Modul verweden mit dem NAmen OS
let os = require("os");
let kbyte = os.freemem() / 1000;
let kbyteRounded = Math.round(kbyte);

// Rauslesen lassen wie viel Arbeitsspeicher auf dem PC
console.log("Free memory: " + kbyte + " in KBytes.");