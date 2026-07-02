const fs = require('fs');
const src = '/Users/firas/.gemini/antigravity-ide/brain/e17a8a0b-826e-40b8-88e4-4231a941c94d/hero_bg_1782363579416.png';
const dest = '/Users/firas/Documents/GitHub/ahlem/frontend/public/hero-bg.png';

try {
  fs.copyFileSync(src, dest);
  console.log('Success: Copied background image to frontend/public/hero-bg.png');
} catch (err) {
  console.error('Error copying file:', err);
}
