import React, { useState } from "react";
import '../../styles/UserRegister.scss'
import axios from "axios";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


function UserRegister() {

  const [registerType, setRegisterType] = useState('USUARIO');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [documentType, setDocumentType] = useState('')
  const [document, setDocument] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [discapacity, setDiscapacity] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const toogleChangeDiscapacity = () => {
    if (registerType === 'USUARIO') {
      setDiscapacity(null);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      registerType: registerType,
      name: name,
      surname: lastName,
      documentType: documentType,
      personID: document,
      gender: gender,
      phone: phone,
      email: email,
      password: password,
      discapacity: discapacity,
      active: true
    };
    if (data !== []) {
      axios.post('http://localhost:8090/api/discapTrainingUser/auth/register', data)
        .then((response) => { console.log(response) })
        .catch((error) => { console.log(error) })
    } else {
      alert("Debe de Diligenciar todos los datos")
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}>
            <FormControl fullWidth>
              <InputLabel id="registerType">Register Type</InputLabel>
              <Select label="registerType" labelId="selectRegister" id="selectRegister" value={registerType} onClick={toogleChangeDiscapacity} onChange={(event) => setRegisterType(event.target.value)}>
                <MenuItem value={"USUARIO"}>USUARIO</MenuItem>
                <MenuItem value={"ESPECIALISTA"}>ESPECIALISTA</MenuItem>
                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
              </Select>
            </FormControl>
            <TextField id="name" label="Name" value={name} onChange={(event) => setName(event.target.value)} />
            <TextField id="lastName" label="Last name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            <FormControl fullWidth>
              <InputLabel id="documentType">Document Type</InputLabel>
              <Select labelId="documentType" id="selectDocumentType" value={documentType} label="documentType" onChange={(event) => setDocumentType(event.target.value)}>
                <MenuItem value={"CC"}>CC</MenuItem>
                <MenuItem value={"TI"}>TI</MenuItem>
                <MenuItem value={"PASSPORT"}>PASSPORT</MenuItem>
              </Select>
            </FormControl>
            <TextField type="number" id="document" label="Document" value={document} onChange={(event) => setDocument(event.target.value)} />
            <FormControl fullWidth>
              <InputLabel id="documentType">Gender</InputLabel>
              <Select labelId="gender" id="selectGender" value={gender} label="gender" onChange={(event) => setGender(event.target.value)}>
                <MenuItem value={"MASCULINO"}>MASCULINO</MenuItem>
                <MenuItem value={"FEMENINO"}>FEMENINO</MenuItem>
                <MenuItem value={"OTRO"}>OTRO</MenuItem>
              </Select>
            </FormControl>
          </Box>
          </Grid>
          <Grid item xs={6}>
            <Box xs={6} component="form" sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}>
              <TextField type="number" id="phone" label="Phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
              <TextField type="email" id="email" label="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <TextField type="password" id="password" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
              <TextField type="password" id="confirmPassword" label="Confirm Password" />
              {registerType === 'USUARIO' && (
                <FormControl fullWidth>
                  <InputLabel id="discapacity">Discapacity</InputLabel>
                  <Select labelId="discapacity" id="selectGender" value={discapacity} label="discapacity" onChange={(event) => setDiscapacity(event.target.value)}>
                    <MenuItem value={"TETRAPLEJIA"}>TETRAPLEJIA</MenuItem>
                    <MenuItem value={"PARAPLEJIA"}>PARAPLEJIA</MenuItem>
                  </Select>
                </FormControl>
              )}
            </Box>
          </Grid>
      </Grid>
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained" className="button-create-user">Crear Usuario</Button>
        </Stack>
      {/* <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </form>
  );
}

export default UserRegister;
