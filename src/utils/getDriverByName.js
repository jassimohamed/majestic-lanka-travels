import { driversData } from "../data/driversData";

export function getDriverByName(name) {
  return driversData.find((driver) => driver.name === name);
}