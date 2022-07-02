import { Dialog } from '@blueprintjs/core';
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
      sa
    </Dialog>
  );
};

export default CharacterCreationDialog;
