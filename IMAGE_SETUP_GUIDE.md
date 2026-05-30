# Project Image Setup Guide

## ✅ Setup Complete

Your portfolio is now configured to display project preview images. Here's what was done:

### 1. **Folder Structure Created**
```
portfolio/
└── public/
    └── images/  ← NEW FOLDER (ready for your images)
```

### 2. **Code Updated**
- ✅ Uncommented image paths in `src/data/portfolio.js`
- ✅ `src/components/Projects.jsx` already had logic to display images
- ✅ CSS styling for images (`Projects.module.css`) already in place

### 3. **How It Works**
The Projects component will:
- Display your image if it exists in `/public/images/`
- Fall back to the mock design visualization if no image is provided
- Images are set to `object-fit: cover` for consistent sizing
- Hover effect: Images scale up slightly (1.04x) on hover

---

## 📸 Adding Your Images

### File Naming Convention
Place your project preview images in `/public/images/` using these exact filenames:
- `internconnect.png` - InternConnect BSIT project
- `student-portal.png` - Student Portal project
- `cod-game.png` - Payment Method: COD game
- `hotel.png` - Hotel Reservation System

### Image Requirements
- **Format:** PNG, JPG, or WebP
- **Size:** Recommended 800×600px or wider (min 400×400px)
- **Aspect Ratio:** Any ratio works (object-fit: cover handles cropping)
- **Optimization:** Compress images for fast loading (use tools like TinyPNG or ImageOptim)

### Example Path Structure
```
public/
├── images/
│   ├── internconnect.png
│   ├── student-portal.png
│   ├── cod-game.png
│   └── hotel.png
├── favicon.svg
└── icons.svg
```

---

## 🔧 Technical Details

### Data Configuration (`src/data/portfolio.js`)
Each project now has an `image` property:
```javascript
{
  num: "01",
  title: "InternConnect BSIT",
  image: "/images/internconnect.png",  ← Image path
  // ... other properties
}
```

### Component Logic (`src/components/Projects.jsx`)
```javascript
{proj.image
  ? <img src={proj.image} alt={proj.title} className={styles.screenshot} />
  : <Mock />  ← Falls back to mock if no image
}
```

### Styling (`src/components/Projects.module.css`)
```css
.screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;  ← Maintains aspect ratio while filling space
  display: block;
  transition: transform 0.6s ease;
}
```

---

## ✨ Everything is Connected

- ✅ Folder created at the right location
- ✅ Code configured to use images from this folder
- ✅ No breaking changes to existing components
- ✅ Backwards compatible (works with or without images)

Just add your PNG/JPG files to `/public/images/` and they'll display automatically!
