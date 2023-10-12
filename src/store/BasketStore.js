import { makeAutoObservable } from "mobx"

export default class BasketStore {
  constructor() {
    this._baskets = []
    makeAutoObservable(this)
  }

  setBasket(baskets) {
    this._baskets = baskets
  }

  get baskets() {
    return this._baskets
  }
}