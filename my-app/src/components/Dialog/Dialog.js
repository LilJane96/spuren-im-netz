import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SimpleDialog from "@mui/material/SimpleDialog";

const Dialog = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        variant="subtitle1"
        component="div"
        style={{ textDecoration: "none" }}>
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};
export default Dialog;
