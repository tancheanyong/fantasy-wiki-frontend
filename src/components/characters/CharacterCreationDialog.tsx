import { Button, Dialog, InputGroup } from '@blueprintjs/core';
import React, { FormEvent, FunctionComponent, useState } from 'react';

type CharacterCreationDialogProps = {
  dialogOpen: boolean;
  handleDialogOpenClose: Function;
};

const CharacterCreationDialog: FunctionComponent<
  CharacterCreationDialogProps
> = ({ dialogOpen, handleDialogOpenClose }) => {
  const [characterInfo, setCharacterInfo] = useState({ name: '', desc: '' });

  const handleSubmit = () => {
    if (characterInfo.name.length > 0) {
      fetch('http://localhost:8000/characters/character-creation', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: characterInfo.name,
          age: '',
          description: characterInfo.desc,
        }),
      }).then(() => handleDialogOpenClose(false));
    } else {
      alert('Character must have a name!');
    }
  };

  return (
    <Dialog isOpen={dialogOpen} onClose={() => handleDialogOpenClose(false)}>
      {/* TODO: Handle picture */}
      <div className="picture-upload">Upload Picture</div>
      <InputGroup
        placeholder="Name"
        onBlur={(e) =>
          setCharacterInfo((prev) => {
            prev.name = e.target.value;
            return { ...prev };
          })
        }
      />
      <InputGroup
        placeholder="Description"
        onBlur={(e) =>
          setCharacterInfo((prev) => {
            prev.desc = e.target.value;
            return { ...prev };
          })
        }
      />
      <Button
        text="Save Character"
        type="button"
        onClick={() => handleSubmit()}
      />
    </Dialog>
  );
};

export default CharacterCreationDialog;
