#!/bin/env bash

yarn build --base ./
git add dist -f && git commit -m "deploy"
git subtree push --prefix dist origin gh-pages
echo https://ygcedu.github.io/vue-nolatenote-client/index.html
