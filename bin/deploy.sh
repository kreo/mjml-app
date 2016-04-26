#!/bin/bash -e

git checkout gh-pages &&
  find . -maxdepth 1 -not -name node_modules -not -name '.*' | xargs rm -rf &&
  cp -r .dist/* . &&
  git pull origin gh-pages &&
  git add . &&
  git commit -m 'deploy' &&
  git push origin gh-pages
  git checkout site &&
  printf '\n>everything has been done, master.'
