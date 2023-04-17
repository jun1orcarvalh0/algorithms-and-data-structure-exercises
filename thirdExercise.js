function generateRandomID(defaultFormat = "XXXX-AAAA-BBBB-CCCC") {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';

  for (let i = 0; i < defaultFormat.length; i++) {
    if (defaultFormat[i] === 'X') {
      for (let j = 0; j < 4; j++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    } else if (defaultFormat[i] === 'A' || defaultFormat[i] === 'B' || defaultFormat[i] === 'C') {
      for (let j = 0; j < 4; j++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      id += '-';
    } else {
      id += defaultFormat[i];
    }
  }

  return id;
}