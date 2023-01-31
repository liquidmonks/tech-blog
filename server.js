// Import the functions you need from the SDKs you need
const path = require("path");
const express = require("express");

// TODO: Replace with your app's Firebase project configuration

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server listening on Port: ", PORT));
});
