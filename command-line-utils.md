
#### how to resize image on linux simple way :
1. simple issue Convert command :

Same command, with an extra option:
```sh
convert myfigure.png -resize 200x100 myfigure.jpg

```
or
```sh
convert -resize 50% myfigure.png myfigure.jpg
```
To resize multiple files, you can try the following command ()
```sh
find . -maxdepth 1 -iname "*.jpg" | xargs -L1 -I{} convert -resize 30% "{}" _resized/"{}"
```


2. using imagetek command:
```sh
sudo apt-get install imagemagick
mogrify -resize 320x240 Image.png 
mogrify -resize 50% Image.png
mogrify -resize 320x240 *.jpg
```

3. pyhon script:
```python
import os, sys
import Image

size = 128, 128

for infile in sys.argv[1:]:
    outfile = os.path.splitext(infile)[0] + ".thumbnail"
    if infile != outfile:
        try:
            im = Image.open(infile)
            im.thumbnail(size, Image.ANTIALIAS)
            im.save(outfile, "JPEG")
        except IOError:
            print "cannot create thumbnail for '%s'" % infile
```
4. Python script:
```python
from PIL import Image
import sys

filename = sys.argv[1:]
basewidth = 300
img = Image.open(filename)
wpercent = (basewidth/float(img.size[0]))
hsize = int((float(img.size[1])*float(wpercent)))
img = img.resize((basewidth,hsize), Image.ANTIALIAS)
img.save(filename) 
```
