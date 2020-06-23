export function isDef(val) {
  return val !== undefined && val !== null;
}

export function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}

export function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}

