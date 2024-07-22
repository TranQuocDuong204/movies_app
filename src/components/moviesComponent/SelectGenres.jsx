import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import getApiAll from "../../services/GetApiAll";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectGenres = ({ getDataSelect }) => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [dataGenres, setDataGenres] = useState([]);
  const [listSelect, setListSelect] = useState([]);

  const fetchApiGenresMovies = useCallback(async () => {
    try {
      const genr = await getApiAll.getAPiGenresMovies();
      const { genres } = genr;
      setDataGenres(genres);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleGetListSelect = (e, dataId) => {
    const checked = e.target.checked;
    setListSelect((prevList) =>
      checked ? [...prevList, dataId] : prevList.filter((item) => item !== dataId)
    );
  };

  useEffect(() => {
    fetchApiGenresMovies();
  }, [fetchApiGenresMovies]);

  useEffect(() => {
    getDataSelect(listSelect);
  }, [listSelect, getDataSelect]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="flex items-center px-3">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label" style={{ color: "white" }}>
          Genres
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Genres" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          style={{ color: "white", borderColor: "white" }}
        >
          {dataGenres.map((item) => (
            <MenuItem
              key={item.id}
              value={item.name}
              onClick={(e) => handleGetListSelect(e, item.id)}
            >
              <Checkbox checked={personName.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectGenres;
