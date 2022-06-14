import AlertDetail from '../screens/AlertDetail';
import AvatarDetail from '../screens/AvatarDetail';
import BoxDetail from '../screens/BoxDetail';
import ButtonDetail from '../screens/ButtonDetail';
import CardList from '../screens/CardList';
import CheckboxDetail from '../screens/CheckboxDetails';
import ImageDetail from '../screens/ImageDetail';
import InputDetail from '../screens/InputDetail';
import ModalDetail from '../screens/ModalDetail';
import TextareaDetail from '../screens/TextareaDetail';
import TextDetail from '../screens/TextDetail';

const screens = [
  {
    name: 'CardList',
    component: CardList,
  },
  {
    name: 'ButtonDetail',
    component: ButtonDetail,
  },
  {
    name: 'BoxDetail',
    component: BoxDetail,
  },
  {
    name: 'AvatarDetail',
    component: AvatarDetail,
  },
  {
    name: 'TextDetail',
    component: TextDetail,
  },
  {
    name: 'CheckboxDetail',
    component: CheckboxDetail,
  },
  {
    name: 'InputDetail',
    component: InputDetail,
  },
  {
    name: 'TextareaDetail',
    component: TextareaDetail
  },
  {
    name: 'AlertDetail',
    component: AlertDetail
  },
  {
    name: 'ModalDetail',
    component: ModalDetail
  },
  {
    name: 'ImageDetail',
    component: ImageDetail
  },
];

export default screens;
