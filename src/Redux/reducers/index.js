import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import NewAdminReducer from './Admin/NewAdminReduc';
import CartReducer from './CartReducer';
import SliderReducer from './SliderReducer';
import CheckoutReducer from './checkoutReducer';
// import AnnounceReducer from './announceReducer';
import AdminReducer from './Admin';
  import ProductReducer from './ProductReducer'
import EventReducer from './EventReducer';
import NotifiReducer from './NotificationRed';
import EmailReducer from './EmailReducer';
export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    admin : AdminReducer,
    NewAdmin : NewAdminReducer,
    Cart : CartReducer,
    Product : ProductReducer,
    Slider : SliderReducer,
    checkout : CheckoutReducer,
    Event : EventReducer,
    Notification: NotifiReducer,
    Email : EmailReducer,
});