## crowdmark

[![npm version](https://badge.fury.io/js/crowdmark.svg)](https://badge.fury.io/js/crowdmark) [![Build Status](https://travis-ci.org/kshvmdn/crowdmark.svg?branch=master)](https://travis-ci.org/kshvmdn/crowdmark)

> A CLI to download all test pages from a Crowdmark page.

### Install

Either install via [npm](https://npmjs.org/package/crowdmark) or directly via [source](https://github.com/kshvmdn/crowdmark/archive/master.zip).

- npm

  ```sh
  $ npm install -g crowdmark
  ```

  ```sh
  $ git clone https://github.com/kshvmdn/crowdmark.git && cd crowdmark && npm install
  ```

### Usage

- The CLI will take a list of IDs separated by space. Find the page's ID from the URL. 

  + `https://app.crowdmark.com/score/8fa43520-8fd2-4ad1-9979-40fe05ecf8ab -> 8fa43520-8fd2-4ad1-9979-40fe05ecf8ab`

- View the help dialog with `--help`.

  ```sh
  Usage
    $ crowdmark [--help] [--version] <id, ...> [--show]

  Options
    id             Crowdmark page identifier(s) (separate by space) [required].
    -h --help      Display this help dialog.
    -v --version   Display the current version.
    -s --show      View the scraping in action.

  Example
    $ crowdmark 8fa43520-8fd2-4ad1-9979-40fe05ecf8ab
    $ crowdmark 8fa43520-8fd2-4ad1-9979-40fe05ecf8ab a4893443-e167-4f74-b45c-05b7ae7b6a92
  ```

### Contribute

This project is completely open source. Feel free to [open an issue](https://github.com/kshvmdn/crowdmark/issues) or [submit a pull request](https://github.com/kshvmdn/crowdmark/pulls). :smile:
