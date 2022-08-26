import * as React from 'react';
// import { createPortal } from 'react-dom';
// import { useNavigate } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NewContactCard from 'components/newContactCard/newContactCard';
// import SaveButton from 'components/saveButton/saveButton';
import { OpenBtn, CloseBtn } from './modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // height: 400,
  bgcolor: '#FFFFFF',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BtnStyle = {
  bgcolor: '#FFFFFF',
};
// const modalRoot = document.querySelector('#modal-root');

export default function BasicModal() {
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    // navigate('/contacts');
  };

  const handleClose = () => {
    setOpen(false);
    // navigate('/contacts');
  };

  return (
    <>
      <OpenBtn onClick={handleOpen} sx={BtnStyle}>
        add
      </OpenBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseBtn onClick={handleClose}>
            <IoIosClose size="26" />
          </CloseBtn>

          <NewContactCard />
        </Box>
      </Modal>
      {/* modalRoot */}
    </>
  );
}
