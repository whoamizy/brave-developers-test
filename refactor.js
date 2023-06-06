const test = (s, a, b) => {
  return (a || b) && s
    ? Math.max(s.split("").lastIndexOf(a), s.split("").lastIndexOf(b))
    : -1;
};
console.log("test: ", test("stroka", "s", ""));