# Makefile
# tanb.github.io

NODE_MODULES=$(CURDIR)/node_modules

PHONY: build-articles

run:
	yarn run start

build-articles:
	yarn run build-articles

node-modules:
	yarn install

clean-node-modules:
	rm -rf $(CURDIR)/node_modules

clean-dist:
	rm -rf $(CURDIR)/dist

build:
	yarn run prebuild
	yarn run build-articles
	yarn ng build -c devel
#	yarn run prerender

release-build:
	yarn run prebuild
	yarn run build-articles
	yarn ng build -c production
#	yarn run prerender
