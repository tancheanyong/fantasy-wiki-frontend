import { Button } from '@blueprintjs/core';
import { FC } from 'react';
import './CustomBtn.scss';

type CustomBtnProps = {
  innerElement: any;
  showBtn?: boolean;
  customClass?: string;
};

const CustomBtn: FC<CustomBtnProps> = ({
  innerElement,
  showBtn,
  customClass,
}) => {
  return (
    <Button
      className={
        (showBtn === undefined
          ? 'custom-btn'
          : showBtn
          ? 'custom-btn__show'
          : 'custom-btn__hide') +
        ' ' +
        customClass
      }
    >
      {innerElement}
    </Button>
  );
};

export default CustomBtn;
