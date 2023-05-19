require("dotenv").config();
const exp = require("express");
const fs = require("fs");
const app = exp();
const funcs = require(__dirname + "/js/funciones.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const express_port = process.env.SERVER_PORT;

app.listen(express_port, () => {
  console.log(
    `El servidor Final Lenguajes Express esta escuchando el puerto ${express_port}`
  );
});

app.get("/stemdoers", async (req, res) => {
  const data = await funcs.leerData(
    __dirname + "/data/stemdoers/datos_st.json"
  );

  if (!data) {
    console.log(`Error ${data}`);
    res.send({
      success: false,
      message: data,
    });
  } else {
    //console.log(data)
    res.send({
      success: true,
      message: JSON.parse(data),
    });
  }
});

app.post("/stemdoers", async (req, res) => {
  let id = await funcs.lastStemdoerId();
  if (parseInt(id) >= 0) {
    const data = await funcs.leerData(
      __dirname + "/data/stemdoers/datos_st.json"
    );
    id = id + 1;

    const nuevo = req.body;
    let dataJson = JSON.parse(data);
    nuevo.id = id;
    dataJson.push(nuevo);
    //console.log(req.body)
    fs.writeFileSync(__dirname+"/data/stemdoers/datos_st.json", JSON.stringify(dataJson));
    res.send({
      success: true,
      message: "Datos del Stemdoer insertado",
      data: dataJson,
    });
  }
});
