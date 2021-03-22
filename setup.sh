# Old format
# curl -O http://geolite.maxmind.com/download/geoip/database/GeoLite2-Country.mmdb.gz
# file GeoLite2-Country.mmdb.gz
# gunzip GeoLite2-Country.mmdb.gz

tar -xf GeoLite2-Country_20210316.tar.gz GeoLite2-Country_20210316/GeoLite2-Country.mmdb
mv GeoLite2-Country_20210316/GeoLite2-Country.mmdb .
rm -rf GeoLite2-Country_20210316/
file GeoLite2-Country.mmdb
