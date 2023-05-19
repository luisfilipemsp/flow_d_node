const fs = require("fs");

async function leerData(ruta) {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

async function lastStemdoerId() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "./data/stemdoers/datos_st.json",
      "utf-8",
      (error, data) => {
        if (error) {
          reject(error);
        } else {
          const datosSt = JSON.parse(data);
          var id = 0;
          for (let propiedad in datosSt) {
            id = datosSt[propiedad]["id"];
          }
          resolve(id);
        }
      }
    );
  });
}

module.exports = {
  leerData,
  lastStemdoerId,
};
