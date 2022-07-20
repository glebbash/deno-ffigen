# Steps for building c2ffi docker image

```sh
# clone c2ffi repo
git clone https://github.com/rpav/c2ffi.git && cd c2ffi

# add entrypoint to dockerfile
echo "ENTRYPOINT [\"/c2ffi/build/bin/c2ffi\"]" >> Docker/Test-Build-Archlinux.docker

# build and tag the image
docker build -f Docker/Test-Build-Archlinux.docker . -t c2ffi
```