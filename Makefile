
build: components index.js notice.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

watch:
	rewatch index.js *.css -c "make build"

.PHONY: clean
