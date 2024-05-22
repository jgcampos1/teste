import { ConfigModel } from "~/application/feature/config/domain/model/config-model";

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

const mountObjectByKeys = (
  obj: Record<string, string>,
  objDict: string[][],
  path: string = ""
): Record<string, unknown> => {
  const newObj: Record<string, unknown> = {};
  const levelKeys = objDict.map((key) => key[0]);
  const uniqueLevelKeys = [...new Set(levelKeys)];

  uniqueLevelKeys.forEach((levelKey) => {
    const nextLevelKeys = objDict
      .filter((key2) => key2[0] === levelKey)
      .map((key2) => key2.slice(1));
    if (nextLevelKeys.length === 1 && !nextLevelKeys[0].length) {
      try {
        newObj[levelKey] = JSON.parse(obj[`${path}${levelKey}`]);
      } catch (_e) {
        newObj[levelKey] = obj[`${path}${levelKey}`];
      }
    } else {
      newObj[levelKey] = mountObjectByKeys(
        obj,
        nextLevelKeys,
        `${path}${levelKey}.`
      );
    }
  });

  return newObj;
};

export const settingsAdapter = (
  data: Record<string, string>
): RecursivePartial<ConfigModel> => {
  const objDict = Object.keys(data).map((text) => text.split("."));

  return mountObjectByKeys(data, objDict) as RecursivePartial<ConfigModel>;
};
