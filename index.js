#!/usr/bin/env node
const pkgJson = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJson.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJson.description,
  bgColor: '#FADC00',
  color: '#000000',
  bold: true,
  clear: true,
});

console.log(`
Simen Daehlin

Passionate about building state-of-the-art, easy to use, user-friendly websites and applications as I am, it's no surprise that I go out of my way to seek out new technologies and stay up-to-date on industry trends and advancements.


🌏 LinkedIn: https://www.linkedin.com/in/simendaehlin/
📖 Github: https://github.com/Eventyret
😎 Blog: https://blog.dehlin.dev
`);
