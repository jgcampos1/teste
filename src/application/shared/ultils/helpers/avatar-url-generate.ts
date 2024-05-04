export const avatarUrlGenerate = (name: string, size?: number) => {
  return `https://ui-avatars.com/api/?name=${name}&size=${
    size || 25
  }6&rounded=true&color=464646&format=svg&bold=true`;
};
