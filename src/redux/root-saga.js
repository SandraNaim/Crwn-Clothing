// instead of running each saga seperately in the store
// we can add them all in here and run this root-saga

import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.actions';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas)
    ]);
}