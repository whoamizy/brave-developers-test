export const useSliceName = (name: string) => {
  if (name.length > 12) {
    name = name.slice(0, 11) + "…";
  }

  return name;
};
