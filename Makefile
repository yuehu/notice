
build: components index.js notify.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

watch:
	rewatch index.js notify.css -c "make build"

.PHONY: clean
