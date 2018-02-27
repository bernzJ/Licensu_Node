import serialNumber from "serialNumber";
import https from "https";
import fs from "fs";

const answers = [
  { KEY_UPDATE: 232 },
  { NOT_FOUD: 321 },
  { EXPIRED_LICENSE: 144 },
  { BANNED: 242 },
  { UPDATE: 69 },
  { PLUGIN_LIST: 3141 },
  { PLUGIN_DATA: 3562 },
  { PLUGIN_NO_ACCESS: 48879 },
  { DATA_EOF: 195894762 },
  { DONE_PROCESSING: 57005 },
  { INTERNAL_ERROR: 194 }
];

const trustedCa = ["../certs/ca.crt", "../certs/clientcert.p12"];

https.globalAgent.options.ca = [];
for (const ca of trustedCa) {
  https.globalAgent.options.ca.push(fs.readFileSync(ca));
}

let options = {
    hostname: 'localhost', 
    port: 6969, 
    path: '/', 
    method: 'GET', 
}