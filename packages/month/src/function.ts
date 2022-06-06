import { MonthGenerator } from "./generator";
import { MonthGeneratorFunction, MonthOptions, Month, MonthOrName } from "./interfaces";

export const month: MonthGeneratorFunction = <T extends boolean>(
  options?: MonthOptions<T>,
  seed?: number
): MonthOrName<T> => {
  const monthGenerator = new MonthGenerator({ seed });
  return monthGenerator.month(options);
};
