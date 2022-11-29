const brighterColor = (color: string, percent: number) => {
  // strip the leading # if it's there
  let newColor = color.replace(/^\s*#|\s*$/g, '');

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (newColor.length == 3) {
    newColor = newColor.replace(/(.)/g, '$1$1');
  }

  const r = parseInt(newColor.substr(0, 2), 16);
  const g = parseInt(newColor.substr(2, 2), 16);
  const b = parseInt(newColor.substr(4, 2), 16);

  return (
    '#' +
    (0 | ((1 << 8) + r + ((256 - r) * percent) / 100)).toString(16).substr(1) +
    (0 | ((1 << 8) + g + ((256 - g) * percent) / 100)).toString(16).substr(1) +
    (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
  );
};

const getBorderColors = (level: number, maximumValue: number, color: string) => {
  if (level < maximumValue * 0.25) {
    return { borderStartColor: color };
  }
  if (level < maximumValue * 0.5) {
    return { borderTopColor: color };
  }
  if (level >= 0.75 * maximumValue) {
    return { borderEndColor: color };
  }
};

export { brighterColor, getBorderColors };
