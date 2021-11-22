import { all, call } from "redux-saga/effects";
import { fetchCollectionsFailure } from "./shop/shop.actions";
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSags } from "./user/user-saga";
import { cartSagas } from "./cart/cart.saga";
import { shopSagas } from "./shop/shop.sagas";
export default function* rootSaga() {
  yield all([call(shopSagas), call(userSags), call(cartSagas)]);
}
