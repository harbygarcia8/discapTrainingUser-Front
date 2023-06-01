import React, { useState } from "react";
import axios from "axios";
import { Grid, Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { toast } from "react-toastify";
import "../../styles/UserRegister.scss";

function UserRegister() {
  const [registerType, setRegisterType] = useState("USUARIO");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [document, setDocument] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [discapacity, setDiscapacity] = useState("");

  const toogleChangeDiscapacity = () => {
    if (registerType === "USUARIO") {
      setDiscapacity(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    const data = {
      registerType,
      name,
      surname: lastName,
      documentType,
      personID: document,
      gender,
      phone,
      email,
      password,
      discapacity,
      active: true,
    };

    axios
      .post("http://localhost:8090/api/discapTrainingUser/auth/register", data)
      .then((response) => {
        console.log(response);
        toast.success("Registro exitoso");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error al registrar el usuario");
      });
  };

  const validateFields = () => {
    if (
      !registerType ||
      !name ||
      !lastName ||
      !documentType ||
      !document ||
      !gender ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Debe diligenciar todos los campos");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return false;
    }

    return true;
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box xs={6} sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}>
              <FormControl fullWidth>
                <InputLabel id="registerType">Register Type</InputLabel>
                <Select
                  label="registerType"
                  labelId="selectRegister"
                  id="selectRegister"
                  value={registerType}
                  onClick={toogleChangeDiscapacity}
                  onChange={(event) => setRegisterType(event.target.value)}
                >
                  <MenuItem value={"USUARIO"}>USUARIO</MenuItem>
                  <MenuItem value={"ESPECIALISTA"}>ESPECIALISTA</MenuItem>
                  <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="name"
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="lastName"
                label="Last name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="documentType">Document Type</InputLabel>
                <Select
                  labelId="documentType"
                  id="selectDocumentType"
                  value={documentType}
                  label="documentType"
                  onChange={(event) => setDocumentType(event.target.value)}
                >
                  <MenuItem value={"CC"}>CC</MenuItem>
                  <MenuItem value={"TI"}>TI</MenuItem>
                  <MenuItem value={"PASSPORT"}>PASSPORT</MenuItem>
                </Select>
              </FormControl>
              <TextField
                type="number"
                id="document"
                label="Document"
                value={document}
                onChange={(event) => setDocument(event.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="documentType">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="selectGender"
                  value={gender}
                  label="gender"
                  onChange={(event) => setGender(event.target.value)}
                >
                  <MenuItem value={"MASCULINO"}>MASCULINO</MenuItem>
                  <MenuItem value={"FEMENINO"}>FEMENINO</MenuItem>
                  <MenuItem value={"OTRO"}>OTRO</MenuItem>
                </Select>
              </FormControl>
              <TextField
                type="number"
                id="phone"
                label="Phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <TextField
                type="email"
                id="email"
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <TextField
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              {registerType === "USUARIO" && (
                <FormControl fullWidth>
                  <InputLabel id="discapacity">Discapacity</InputLabel>
                  <Select
                    labelId="discapacity"
                    id="selectDiscapacity"
                    value={discapacity}
                    label="discapacity"
                    onChange={(event) => setDiscapacity(event.target.value)}
                  >
                    <MenuItem value={"MONOPLEJIA"}>MONOPLEJIA</MenuItem>
                    <MenuItem value={"PARAPLEJIA"}>PARAPLEJIA</MenuItem>
                    <MenuItem value={"HEMIPLEGIA"}>HEMIPLEGIA</MenuItem>
                    <MenuItem value={"TETRAPLEJIA"}>TETRAPLEJIA</MenuItem>
                    <MenuItem value={"ESPINA BIFIDA"}>ESPINA BIFIDA</MenuItem>
                    <MenuItem value={"DISTROFIA MÚSCULAR"}>DISTROFIA MÚSCULAR</MenuItem>
                    <MenuItem value={"PARÁLISIS CEREBRAL"}>PARÁLISIS CEREBRAL</MenuItem>
                    <MenuItem value={"AMPUTACIÓN"}>AMPUTACIÓN</MenuItem>
                  </Select>
                </FormControl>
              )}
            </Box>
          </Grid>
        </Grid>
        <Stack spacing={2} direction="row" className="frame">
          <Button type="submit" className="custom-btn btn-10">
            Crear Usuario
          </Button>
          <Button className="custom-btn btn-10">
            <a href="/">Iniciar Sesión</a>
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default UserRegister;
