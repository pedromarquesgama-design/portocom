const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateAssets() {
  console.log('Generating tab icons with single P logo...');

  // Ensure directories exist
  const publicDir = path.resolve(__dirname, '../public');
  const appDir = path.resolve(__dirname, '../src/app');

  // 1. Single P tab browser logo (icon.png - 512x512)
  const pBuffer = await sharp(path.join(publicDir, 'images/logo-mark-p.png'))
    .resize({ height: 440, fit: 'contain' })
    .toBuffer();

  const icon512 = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: pBuffer, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'icon.png'), icon512);
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon512);
  console.log('Created icon.png (512x512)');

  // Favicon 32x32
  const fav32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), fav32);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), fav32);
  console.log('Created favicon.ico (32x32)');

  // Apple touch icon (180x180 on dark background #0A0A0E)
  const pApple = await sharp(path.join(publicDir, 'images/logo-mark-p.png'))
    .resize({ height: 135, fit: 'contain' })
    .toBuffer();

  const appleIcon = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 10, g: 10, b: 14, alpha: 1 }
    }
  })
    .composite([{ input: pApple, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleIcon);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), appleIcon);
  console.log('Created apple-touch-icon.png (180x180)');

  // 2. WhatsApp OG Image (1200x630) using original logo (logo-portocom.png)
  console.log('Generating WhatsApp OG image with original logo...');

  const glowSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.22" />
          <stop offset="45%" stop-color="#F59E0B" stop-opacity="0.08" />
          <stop offset="75%" stop-color="#0A0A0E" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="topLight" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#0A0A0E" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="#0A0A0E" />
      <rect width="1200" height="630" fill="url(#amberGlow)" />
      <rect width="1200" height="630" fill="url(#topLight)" />
      <line x1="240" y1="626" x2="960" y2="626" stroke="#F59E0B" stroke-opacity="0.4" stroke-width="2" />
    </svg>
  `);

  const glowBase = await sharp(glowSvg).png().toBuffer();

  // Resize original logo to width 840px (height: 840 * 881 / 2263 = 327px)
  const logoBuffer = await sharp(path.join(publicDir, 'images/logo-portocom.png'))
    .resize({ width: 840, fit: 'contain' })
    .toBuffer();

  const ogCompositeJpg = await sharp(glowBase)
    .composite([{ input: logoBuffer, gravity: 'center' }])
    .jpeg({ quality: 92 })
    .toBuffer();

  const ogCompositePng = await sharp(glowBase)
    .composite([{ input: logoBuffer, gravity: 'center' }])
    .png({ quality: 92 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), ogCompositeJpg);
  fs.writeFileSync(path.join(publicDir, 'og-image.png'), ogCompositePng);
  console.log(`Created og-image.jpg (${(ogCompositeJpg.length / 1024).toFixed(1)} KB)`);
  console.log(`Created og-image.png (${(ogCompositePng.length / 1024).toFixed(1)} KB)`);

  console.log('All branding assets generated successfully!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
