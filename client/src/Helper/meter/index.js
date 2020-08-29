const declination = {
  0: 'метр',
  1: 'метра',
  2: 'метров',
}

const showMeter = (value) => {
  const quantity = parseInt(value, 10);
  const lastNum = parseInt(value[value.length - 1], 10);
  const binary = value.slice(value.length - 2, value.length);

  if (value.length === 1) {
    if (quantity >= 2 && quantity <= 4) {
      return declination[1];
    } else if (quantity === 1) {
      return declination[0];
    } else if ((quantity === 0) || (quantity >=5 && quantity <= 9)) {
      return declination[2];
    }
  } else if (value.length > 1) {
    if (binary >= 10 && binary <= 20) {
      return declination[2];
    } else {
      if (lastNum >= 2 && lastNum <= 4) {
        return declination[1];
      } else if (lastNum === 1) {
        return declination[0];
      } else if (lastNum >=5 && lastNum <= 9) {
        return declination[2];
      } else if (lastNum === 0) {
        return declination[2];
      }
    }
  }
  return declination[2];
}

export default showMeter;