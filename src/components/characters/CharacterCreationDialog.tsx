import { Dialog, InputGroup } from '@blueprintjs/core';
import React, { FunctionComponent } from 'react';

type CharacterCreationDialogProps = {
  dialogOpen: boolean;
  handleDialogOpenClose: Function;
};

const CharacterCreationDialog: FunctionComponent<
  CharacterCreationDialogProps
> = ({ dialogOpen, handleDialogOpenClose }) => {
  return (
    <Dialog isOpen={dialogOpen} onClose={() => handleDialogOpenClose(false)}>
      <div className="picture-upload">Upload Picture</div>
      <InputGroup placeholder="Name" />
      <InputGroup placeholder="Description" />
    </Dialog>
  );
};

export default CharacterCreationDialog;
