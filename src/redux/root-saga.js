// instead of running each saga seperately in the store
// we can add them all in here and run this root-saga

import { all, call } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.sagas';
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ]);
}