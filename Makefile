
build: components index.js notice.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

watch:
	rewatch index.js *.css -c "make build"

publish:
	@component build
	@rm -fr .gh-pages
	@mkdir .gh-pages
	@mv build .gh-pages/
	@cp example.html .gh-pages/index.html
	@ghp-import .gh-pages -n -p
	@rm -fr .gh-pages

.PHONY: clean
