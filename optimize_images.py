import os
from PIL import Image

ASSETS_DIR = 'assets'
MAX_WIDTH = 1200
QUALITY = 85

def optimize_images():
    if not os.path.exists(ASSETS_DIR):
        print(f"Directory {ASSETS_DIR} not found.")
        return

    for filename in os.listdir(ASSETS_DIR):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(ASSETS_DIR, filename)
            try:
                with Image.open(filepath) as img:
                    # Resize if too large
                    if img.width > MAX_WIDTH:
                        ratio = MAX_WIDTH / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized {filename} to {MAX_WIDTH}x{new_height}")

                    # Save as WebP
                    webp_filename = os.path.splitext(filename)[0] + '.webp'
                    webp_path = os.path.join(ASSETS_DIR, webp_filename)
                    
                    img.save(webp_path, 'WEBP', quality=QUALITY)
                    
                    old_size = os.path.getsize(filepath) / 1024
                    new_size = os.path.getsize(webp_path) / 1024
                    print(f"Converted {filename}: {old_size:.1f}KB -> {new_size:.1f}KB")

            except Exception as e:
                print(f"Failed to process {filename}: {e}")

if __name__ == '__main__':
    optimize_images()
