#!/Users/amran/anaconda/bin/python
import eyed3
import glob 
from os import path

from pymongo import MongoClient
client = MongoClient()
db = client.catalog_db
songs = db.songs

catalog = "./catalog/"
filt = "*.mp3"

song_fields = {"title": "",  "artist": "",  "album": "",  "track_num": "",  "year": "",  "genre": "",  "album_art": ""}

# get all files in dir
files = glob.glob(catalog+filt)

for song in files:
	info = eyed3.load(song)
	path = info.path
	print info.tag.artist

# get fields we're interested in and save them to DB
