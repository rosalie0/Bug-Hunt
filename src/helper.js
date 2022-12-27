//***** */
/**
 * Helper function to let us give rotation values like 'degrees' (eg rotate 90 degrees)
 * Give it 180 to convert it to whatever that is in radians
 * @param {*} degrees
 * @returns value in radians
 */
export const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Helper function to give us a random integer between MIN and MAX.
 * Used for generating random position coordinates
 * @param {integer} min
 * @param {integer} max
 * @param {*} float
 * @returns a random value inbetween min and max
 */
export const random = (min, max, float = false) => {
  const val = Math.random() * (max - min) + min;
  if (float) return val;
  return Math.floor(val);
};

/**
 * Generates a random color in hsl string format:
 *  hsl(180, 50%, 50%);
 *  hsl(color, saturation, lightness)
 */
export const randomHsl = () => {
  const hue = random(0, 360);
  const saturation = random(0, 100);
  const lightness = random(0, 100);
  const hslString = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return hslString;
};
