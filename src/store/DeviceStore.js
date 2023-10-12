import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = []
        this._categories = []
        this._brands = []
        this._flavors = []
        this._value = []
        this._devices = []
        this._sklad = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedCategory = {}
        this._selectedFlavor = {}
        this._selectedValue = {}
        this._selectedDevice = {}
        makeAutoObservable(this)
    }

    setSklad(sklad) {
        this._sklad = sklad
    }

    setTypes(types) {
        this._types = types
    }
    setCategories(categories) {
        this._categories = categories
    }
    setBrands(brands) {
        this._brands = brands
    }
    setValue(value) {
        this._value = value
    }
    setFlavors(flavors) {
        this._flavors = flavors
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {

        this._selectedType = type
    }
    setSelectedBrand(brand) {

        this._selectedBrand = brand
    }
    setSelectedCategory(category) {

        this._selectedCategory = category
    }
    setSelectedFlavor(flavor) {

        this._selectedFlavor = flavor
    }
    setSelectedValue(value) {

        this._selectedValue = value
    }
    setSelectedDevice(device) {

        this._selectedDevice = device
    }
    

    get sklad() {
        return this._sklad
    }

    get types() {
        return this._types
    }
    get categories() {
        return this._categories
    }
    get brands() {
        return this._brands
    }
    get value() {
        return this._value
    }
    get flavors() {
        return this._flavors
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedFlavor() {
        return this._selectedFlavor
    }
    get selectedValue() {
        return this._selectedValue
    }
    get selectedDevice() {
        return this._selectedDevice
    }
}