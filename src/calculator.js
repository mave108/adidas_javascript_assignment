export default function calcString(calculation) {
  var f = { add: "+", sub: "-", div: "/", mlt: "*" };

  // Create array for Order of Operation and precedence
  f.opt = [
    [[f.mlt], [f.div]],
    [[f.add], [f.sub]]
  ];

  function calc_internal(a, op, b) {
    a = a * 1;
    b = b * 1;
    switch (op) {
      case f.add:
        return a + b;
      case f.sub:
        return a - b;
      case f.div:
        return a / b;
      case f.mlt:
        return a * b;
      default:
        return null;
    }
  }

  var output;
  for (var i = 0, n = f.opt.length; i < n; i++) {
    // Regular Expression to look for operators between operands
    var re = new RegExp(
      "(\\d+\\.?\\d*)([\\" + f.opt[i].join("\\") + "])(\\d+\\.?\\d*)"
    );
    re.lastIndex = 0;
    // Loop while there is still calculation for level of precedence
    while (re.test(calculation)) {
      console.log("re", re, RegExp.$1, RegExp.$2, RegExp.$3);
      output = calc_internal(RegExp.$1, RegExp.$2, RegExp.$3);
      if (isNaN(output) || !isFinite(output)) return output;
      calculation = calculation.replace(re, output);
    }
  }

  return output;
}
