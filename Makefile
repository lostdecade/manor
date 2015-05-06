default: build

build:
	jekyll build

develop:
	jekyll serve

deploy: build
	aws s3 sync _site s3://www.lostdecadegames.com --cache-control max-age=86400 --size-only --acl public-read --delete --profile lostdecadegames

clean:
	@rm -rf _site

.PHONY: clean
