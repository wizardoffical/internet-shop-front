import { $authHost } from "./index";

export const addToBasket = async (userId, deviceId) => {
  const { data } = await $authHost.post("api/basket/" + userId + "/" + deviceId);
  return data;
};

export const removeFromBasket = async (userId, deviceId) => {
  const { data } = await $authHost.delete("api/basket/" + userId + "/" + deviceId);
  return data;
};

export const getBasket = async (userId) => {
  const { data } = await $authHost.get("api/basket/" + userId);
  return data;
};

