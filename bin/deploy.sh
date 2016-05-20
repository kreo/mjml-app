#!/bin/bash -e

git checkout gh-pages &&
  find . -maxdepth 1 -not -name node_modules -not -name 'favicon.ico' -not -name '.*' | xargs rm -rf &&
  cp -r .dist/* . &&
  git add --all &&
  git add . &&
  git commit -m 'deploy' &&
  git push -f origin gh-pages
  git checkout site &&
  printf '\n>everything has been done, master.'
