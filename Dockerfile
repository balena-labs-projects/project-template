# Docker images should always be pinned to specific versions to avoid breaking changes (i.e. 3.16 as seen below)!
FROM alpine:3.16

CMD ["cat", "/etc/os-release"]
