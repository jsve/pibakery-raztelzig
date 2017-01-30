## PiBakery
PiBakery is a briliant little program for setting up the Raspberry Pi. It differentiates between stuff to do in first boot and all other boots. It also takes care of creating the SD card.

More info can be found here:

http://www.pibakery.org

## My recipie
This recipie is for setting up homebridge, z-wave (razberry), tellstrick duo (telldus) and zigbee (conbee).

## Dealing with stuff you'd rather keep to yourself
Don't post important stuff online. For this reason you shoud create a translator-file, I have named mine "behind_the_stars.json". This file is just a JSON with the secret stuff as values. And the same key as used in PiBakery as key. In PiBakery you use the key, wrapped in brackets, like so: {{{key}}}.

The script "star_replacer.js" will replace stuff for you when you run it with

```
node star_replacer.js
```


