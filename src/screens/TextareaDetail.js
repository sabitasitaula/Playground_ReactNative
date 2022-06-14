import React,{useState} from 'react'
import { ScrollView } from 'react-native'
import Header from '../components/Headers'
import Textarea from '../components/Textarea'

const TextareaDetail = () => {
  const [description, descriptionSet] = useState('');
  const descriptionHandler = val => {
    descriptionSet(val);
  };
  return (
    <ScrollView>
      <Header text="Textarea" />
      <Textarea numberOfLines={4} placeholder="Descriptions..." value={description} onChangeHandler={descriptionSet} />
      <Textarea numberOfLines={10} placeholder="Descriptions..." borderColor='purple' borderRadius={40} borderWidth={1.5} />
      <Textarea numberOfLines={10} placeholder="Descriptions..."  borderColor='purple' borderRadius={40} borderWidth={3} borderBottom={true} />
    </ScrollView>
  )
}

export default TextareaDetail