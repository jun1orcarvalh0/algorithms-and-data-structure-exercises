function generateRandomID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (i < 3) {
      id += '-';
    }
  }

  return id;
}
console.log(generateRandomID())