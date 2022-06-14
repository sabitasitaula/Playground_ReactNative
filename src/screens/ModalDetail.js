import React from 'react';
import {ScrollView} from 'react-native';
import {ModalComponent} from '../components/ModalComponent';

const ModalDetail = () => {
  return (
    <ScrollView>
      <ModalComponent
        buttonName="Modal"
        modalTitle="Modal"
        modalDescription="Description about Modal"
      />
      <ModalComponent
        buttonName="Popup"
        modalTitle="Popup"
        modalDescription="Description about Popup"
      />
    </ScrollView>
  );
};

export default ModalDetail;
