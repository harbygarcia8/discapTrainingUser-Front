import React, { useState } from "react";
import "../../styles/UserRegister.scss";
import axios from "axios";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function NewVideoTraining() {
  const [title, setTitle] = useState("");
  const [descriptionVideo, setDescriptionVideo] = useState("");
  const [duration, setDuration] = useState("");
  const [url, setUrl] = useState("");
  const [discapacity, setDiscapUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      descriptionVideo: descriptionVideo,
      duration: duration,
      title: title,
      url: url,
      discapUser: {
        id: sessionStorage.getItem('selectedUserId'),
      },
    };

    if (data !== []) {
      axios
        .post(
          "http://localhost:8091/api/discapTrainingMedicalUser/TrainingPlan",
          data
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Debe de Diligenciar todos los datos");
        });
    } else {
      alert("Debe de Diligenciar todos los datos");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <TextField
          id="title"
          label="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          id="descriptionVideo"
          label="Descripcion del video"
          value={descriptionVideo}
          onChange={(event) => setDescriptionVideo(event.target.value)}
        />
        <TextField
          id="duration"
          label="Duracion del video"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
        <TextField
          id="url"
          label="Link del video"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />

        <FormControl style={{ width: "100%", margin: "auto 0 " }}>
          <InputLabel id="discapacity">Discapacidad</InputLabel>

          <Select
            label="Discapacidades"
            labelId="discapacity"
            id="selectDiscapacity"
            value={discapacity}
            onChange={(event) => setDiscapUser(event.target.value)}
          >
            <MenuItem value={"1"}>MONOPLEJIA</MenuItem>
            <MenuItem value={"2"}>PARAPLEJIA</MenuItem>
            <MenuItem value={"3"}>HEMIPLEGIA</MenuItem>
            <MenuItem value={"4"}>TETRAPLEJIA</MenuItem>
            <MenuItem value={"5"}>ESPINA BIFIDA</MenuItem>
            <MenuItem value={"6"}>DISTROFIA MÚSCULAR</MenuItem>
            <MenuItem value={"7"}>PARÁLISIS CEREBRAL</MenuItem>
            <MenuItem value={"8"}>AMPUTACIÓN</MenuItem>
          </Select>
        </FormControl>

        <Stack className="frame">
          <Button type="submit" className="custom-btn btn-10 ">
            Agregar Video De entrenamiento
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default NewVideoTraining;
