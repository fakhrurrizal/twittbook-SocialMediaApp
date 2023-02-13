import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../Post/PostShare'

function ShareModal({showModal, setShowModal}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={showModal}
      size='55%'
      onClose={()=> setShowModal(false)}
    >
        <PostShare/>
    </Modal>
  );
}

export default ShareModal;