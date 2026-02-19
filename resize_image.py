from PIL import Image, ImageOps

def resize_image(input_path, output_path, target_width):
    # OPEN IMAGE
    img = Image.open(input_path)

    # FIX ORIENTATION USING EXIF DATA
    img = ImageOps.exif_transpose(img)

    # CALCULATE NEW HEIGHT (keeps proportions)
    width, height = img.size
    ratio = target_width / width
    new_height = int(height * ratio)

    # RESIZE IMAGE
    resized_img = img.resize((target_width, new_height), Image.LANCZOS)

    # SAVE IMAGE (compressed)
    resized_img.save(output_path, format="WEBP", quality=75)

    print(f"Image resized to {target_width}x{new_height} and saved as {output_path}")


# images = [("img/upholestry-cleaning-west-palm-beach.webp", "img/upholstery-cleaning-west-palm-beach-500.webp", 500),
#           ("img/pet-hair-cleanup-car-detailing.webp", "img/pet-hair-cleanup-car-detailing-500.webp", 500),]

images = [
        # ("img/white_toyota_sedan.webp", "img/white_toyota_sedan-500.webp", 500),
        #   ("img/blue_volkswagen.webp", "img/blue_volkswagen-500.webp", 500),
        #   ("img/gmc-pickup-truck-1200.webp", "gmc-pickup-truck-500.webp", 500),
         ("img/bmw-steering-wheel.webp", "img/bmw-steering-wheel-500.webp", 500),
         ("img/black-red-infiniti.webp", "img/black-red-infiniti-500.webp", 500)]

for i in images:
    print(i[0], i[1], i[2])
    resize_image(i[0], i[1], i[2])