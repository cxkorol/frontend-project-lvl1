install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint . --ext .js

build:
	rm -rf dist
	npm run build