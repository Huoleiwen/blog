# Book

Now I used the
[forked version](https://github.com/dieterplex/mdbook-epub/tree/fix-local-md-link)
of [mdbook-epub](https://github.com/Michael-F-Bryan/mdbook-epub) to generate
epub book.

## Install

```bash
cargo install --git https://github.com/dieterplex/mdbook-epub --branch fix-local-md-link mdbook-epub
```

## Build Book

```bash
make buildbook
```

Then the book will be generated on `book-dist/random/epub/xxx.epub`