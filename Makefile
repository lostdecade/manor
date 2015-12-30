default: build

build:
	jekyll build

develop:
	jekyll serve

stage: build
	aws s3 sync _site s3://stage.www.lostdecadegames.com \
		--cache-control max-age=86400 \
		--size-only \
		--acl public-read \
		--delete \
		--profile lostdecadegames

deploy: build
	aws s3 sync _site s3://www.lostdecadegames.com \
		--cache-control max-age=86400 \
		--size-only \
		--acl public-read \
		--delete \
		--profile lostdecadegames

deploy-all: build
	aws s3 sync _site s3://www.lostdecadegames.com \
		--cache-control max-age=86400 \
		--acl public-read \
		--delete \
		--profile lostdecadegames

clean:
	@rm -rf _site

.PHONY: clean
