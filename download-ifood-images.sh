#!/bin/bash

# Create directory
mkdir -p public/images/ifood

echo "📥 Downloading iFood images..."

# Array of image hashes and filenames
images=(
  "f4fe117a8f8979dfaa8dc7253b5e2b97a964830a.png|projeto-remover-fundo-11.png"
  "4764b7d1af0e64ffcc8fb9cc5e568bdc6144fa02.png|image-23.png"
  "774a5e2f27319d61ddc60bea34308a33ec213521.png|image-1755.png"
  "63fa529617cf3c30fb5b581658d1a0a5a5c4b1cb.png|image-1756.png"
  "c7060f79c2e2cb0da52dc230bd9addb781e532d5.png|image-1757.png"
  "6e1b2b3a5fdc6f39cfa3151844d31894ef41e997.png|image-1758.png"
  "37c3a15f0806ff7fb97f9caf3adba9480bba8baa.png|oval-1.png"
  "38d03375788c93e1ad7834a6945c045071242467.png|image-1753.png"
  "08fc1b2b8327eaf44620523ba763b420c683f627.png|oval-2.png"
  "afa33cb29d6b22e2c70a2e8125dbe982ec6fd47d.png|image-1759.png"
  "f05590e79dd00e26f74ce300080e0db7ec86e602.png|oval-3.png"
  "5dbf519770e1e92478a9c0b49ad9ea11977a8ced.png|image-1760.png"
  "9142305c2111ae2a5c980fecbc627a61b9786c28.svg|logo-ifood.svg"
  "cb575f6e277f1490888ccc98aa103376763d5110.svg|icon-chevron.svg"
  "d2193187ac50f036d32fea97101dc0c652e10df5.svg|icon-chevron-alt.svg"
  "98a2894ab957c173a45a1cfee4029628caba7d8e.svg|frame-decorative.svg"
  "9c98afc38d1092ab81fc20035fb66d67e9d85aa2.svg|group-1597888230.svg"
  "c4af7834de97fdf00ea59259ad9caecde21599aa.svg|vector-decoration.svg"
  "27dfd9473b88e50c0d224c7def334257ac7b3cf2.svg|group-1597888227.svg"
  "90624ffc12277fac1b64b669c27519a3ca2ffb12.svg|image-22.svg"
  "65e167b6eac864f78a8b09360c1a7507d69a95ec.svg|rectangle-34626385.svg"
  "de73f2e0eaaa1b4b9356433bb8a11ad25da864ff.svg|image-1754.svg"
  "a67a6bfbaed953f09727002ceb8443fc7217560e.svg|oval-mask.svg"
  "01e58500bbe1fff2983063122217f49eb089a76a.svg|line-copy.svg"
  "698a83f634c46ed2766254e0af6dadb567fd0c70.svg|logo-facebook.svg"
  "7643512209b55aa176b38f146c70636e62bcec13.svg|logo-instagram.svg"
  "7d8d48d6fc915429d68fe2862b46f3083b3d2c4d.svg|logo-linkedin.svg"
  "2a15417159b9770ef8f3bb2196fed4b6d0909f0f.svg|logo-footer.svg"
)

count=0
total=${#images[@]}

for item in "${images[@]}"; do
  hash=$(echo "$item" | cut -d'|' -f1)
  filename=$(echo "$item" | cut -d'|' -f2)
  ((count++))

  echo "[$count/$total] Downloading $filename..."
  curl -s "http://localhost:3845/assets/$hash" -o "public/images/ifood/$filename" 2>/dev/null

  # Check if file was downloaded successfully
  if [ -f "public/images/ifood/$filename" ] && [ -s "public/images/ifood/$filename" ]; then
    echo "  ✓ Downloaded"
  else
    echo "  ✗ Failed to download"
  fi
done

echo ""
echo "✅ Download complete!"
echo "Images saved to: public/images/ifood/"
ls -lh public/images/ifood/
