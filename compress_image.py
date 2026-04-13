from PIL import Image

def compress_image(input_path, output_path, quality=60):
    img = Image.open(input_path)

    # Convert to RGB if needed (important for WebP/JPEG)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    img.save(output_path, "WEBP", quality=quality, optimize=True)

    print(f"Compressed image saved to {output_path}")

# Example usage
compress_image(
    "img/exterior-auto-detailing-near-me.webp",
    "img/exterior-auto-detailing-near-me-compressed.webp",
    quality=60  # Adjust 40–80
)




# from PIL import Image

# def resize_and_compress(input_path, output_path, width, height, quality=60):
#     img = Image.open(input_path)
#     img = img.resize((width, height), Image.LANCZOS)

#     if img.mode in ("RGBA", "P"):
#         img = img.convert("RGB")

#     img.save(output_path, "WEBP", quality=quality, optimize=True)

# resize_and_compress(
#     "input.webp",
#     "output.webp",
#     488,
#     650,
#     quality=60
# )