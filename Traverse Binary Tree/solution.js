function traverse(root) {
  let arr = [];

  const recur = ({ _root, x = 0, y = 0 }) => {
    if (!_root || !_root.value) return;
    arr.push({ value: _root.value, x, y });

    recur({ _root: _root.left, x: x - 1, y: y - 1 });
    recur({ _root: _root.right, x: x + 1, y: y - 1 });
  };

  recur({ _root: root });
  return arr
    .sort((a, b) => {
      if (a.x !== b.x) return a.x - b.x;
      if (a.y !== b.y) return b.y - a.y;
      return a.value - b.value;
    })
    .map((e) => e.value);
}
