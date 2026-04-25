from PIL import Image

tex = Image.open("tex/king.png")

COLORMAP = {
    (0,0,0,0): "_",
    (255,255,255,255): "P",
    (0,0,0,255): "O",
}

out = ""
for y in range(16):
    for x in range(16):
        out += (COLORMAP[tex.getpixel((x,y))]) + ", "
    out += "\n"

print(out)