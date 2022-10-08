import { Button } from '@blueprintjs/core';
import { FC } from 'react';
import './CustomBtn.scss';

type CustomBtnProps = {
  innerElement: any;
  showBtn?: boolean;
  minimal?: boolean;
  customClass?: string;
};

const CustomBtn: FC<CustomBtnProps> = ({
  innerElement,
  showBtn,
  minimal,
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
      minimal={minimal}
    >
      {innerElement}
    </Button>
  );
};

export default CustomBtn;
