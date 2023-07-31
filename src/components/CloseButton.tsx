import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CloseIcon from "@mui/icons-material/Close";

interface CloseButtonProps {
  handleClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClick }) => {
  return (
    <ButtonGroup variant="contained" aria-label="split button">
      <Button onClick={handleClick}>
        <CloseIcon />
      </Button>
    </ButtonGroup>
  );
};

export default CloseButton;
