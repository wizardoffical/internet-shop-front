import { $authHost, $host } from ".";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createCategory= async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createValue= async (value) => {
    const {data} = await $authHost.post('api/value', value)
    return data
}

export const fetchValue = async () => {
    const {data} = await $host.get('api/value')
    return data
}

export const createFlavor= async (flavor) => {
    const {data} = await $authHost.post('api/flavor', flavor)
    return data
}

export const fetchFlavor = async () => {
    const {data} = await $host.get('api/flavor')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, categoryId, flavorId, valueId) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, categoryId, flavorId, valueId
    }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

// Удаления

export const deleteValue = async (valueId) => {
    const {data} = await $authHost.delete('api/value/' + valueId)
    return data
}

export const deleteFlavor = async (flavorId) => {
    const {data} = await $authHost.delete('api/flavor/' + flavorId)
    return data
}

export const deleteType = async (typeId) => {
    const {data} = await $authHost.delete('api/type/' + typeId)
    return data
}

export const deleteBrand = async (brandId) => {
    const {data} = await $authHost.delete('api/brand/' + brandId)
    return data
}

export const deleteCategory = async (categoryId) => {
    const {data} = await $authHost.delete('api/category/' + categoryId)
    return data
}

export const deleteDevice = async (deviceId) => {
    const {data} = await $authHost.delete('api/device/' + deviceId)
    return data
}

// Изменения 

export const changeValue = async (formData) => {
    const {data} = await $authHost.put('api/value', formData)
    return data
}