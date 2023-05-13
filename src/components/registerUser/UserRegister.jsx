import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function UserRegister() {
  const [registerType, setRegisterType] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [discapacity, setDiscapacity] = useState("");
  const [documentType, setDocumentType] = useState("");

  const handleChangeRegisterType = (event) => {
    setRegisterType(event.target.value);
  };

  const handleChangeDiscapacity = (event) => {
    setDiscapacity(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeDocumentType = (event) => {
    setDocumentType(event.target.value);
  };

  return (
    <>
      <Box item xs={12}>
        <Box
          xs={6}
          className="column"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
        >
          <FormControl fullWidth>
            <InputLabel id="registerType">Register Type</InputLabel>
            <Select
              labelId="gender"
              id="selectGender"
              value={registerType}
              label="Age"
              onChange={handleChangeRegisterType}
            >
              <MenuItem value={30}>USUARIO</MenuItem>
              <MenuItem value={20}>ESPECIALISTA</MenuItem>
              <MenuItem value={10}>ADMIN</MenuItem>
            </Select>
          </FormControl>
          <TextField id="name" label="Name" />
          <TextField id="lastname" label="Last name" />
          <FormControl fullWidth>
            <InputLabel id="documentType">Document Type</InputLabel>
            <Select
              labelId="documentType"
              id="selectDocumentType"
              value={documentType}
              label="Age"
              onChange={handleChangeDocumentType}
            >
              <MenuItem value={10}>CC</MenuItem>
              <MenuItem value={20}>TI</MenuItem>
              <MenuItem value={30}>PASSPORT</MenuItem>
            </Select>
          </FormControl>
          <TextField type="number" id="document" label="Document" />
          <FormControl fullWidth>
            <InputLabel id="documentType">Gender</InputLabel>
            <Select
              labelId="gender"
              id="selectGender"
              value={gender}
              label="Age"
              onChange={handleChangeGender}
            >
              <MenuItem value={10}>MASCULINO</MenuItem>
              <MenuItem value={20}>FEMENINO</MenuItem>
              <MenuItem value={30}>OTRO</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          xs={6}
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
        >
          <TextField type="number" id="phone" label="Phone" />
          <TextField type="email" id="email" label="Email" />
          <TextField type="password" id="password" label="Password" />
          <TextField
            type="password"
            id="confirmPassword"
            label="Confirm Password"
          />
          <FormControl fullWidth>
            <InputLabel id="documentType">Discapacity</InputLabel>
            <Select
              labelId="gender"
              id="selectGender"
              value={discapacity}
              label="Age"
              onChange={handleChangeDiscapacity}
            >
              <MenuItem value={10}>TETRAPLEJIA</MenuItem>
              <MenuItem value={20}>PARAPLEJIA</MenuItem>
              <MenuItem value={30}>OTRO</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default UserRegister;
