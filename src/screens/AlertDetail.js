import React from 'react';
import {ScrollView} from 'react-native';
import AlertComponent from '../components/Alert';
import Header from '../components/Headers';

const AlertDetail = () => {
  return (
    <ScrollView>
      <Header text="Alert" />

      <AlertComponent
        ButtonName="Submit"
        button1="Submit"
        button2="Cancel"
        description="Form Submitted"
        title="Submit Form"
      />

      <AlertComponent
        ButtonName="Alert"
        button1="OK"
        button2="Cancel"
        description="Alert Message here"
      />
    </ScrollView>
  );
};

export default AlertDetail;
