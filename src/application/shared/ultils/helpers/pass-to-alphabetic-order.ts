export function passToAlphabeticOrder<T, U extends keyof T>(
  array: T[],
  property: U
): T[] {
  if (array?.length <= 0) return array;
  const copiedArray = array?.slice();
  const alphabeticalOrder = (a: T, b: T) => {
    const valorA = String(a[property])?.toUpperCase() || "";
    const valorB = String(b[property])?.toUpperCase() || "";

    return valorA.localeCompare(valorB);
  };

  copiedArray?.sort(alphabeticalOrder);

  return copiedArray;
}
