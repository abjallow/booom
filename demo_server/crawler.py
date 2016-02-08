#!/Users/amran/anaconda/bin/python
import eyed3
import os
from os import path

catalog = "./catalog"

# get all files in dir
files = os.listdir(catalog)

for song in files:
	info = eyed3.load(catalog+"/"+song)
	if info.tag is None:
		next
	print info.tag.artist

# get fields we're interested in and save them to DB



