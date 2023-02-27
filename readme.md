> ⚠️ Work in progress - use at your own risk

# Kirby & Sveltekit setup

This repo is my own starterkit for Kirby 3 projects with SvelteKit. Featuring [Kirby CMS](https://getkirby.com/) and [Kirby Headless](https://github.com/sinanatra/kirby-headless).

## Requirements

+ [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).
+ [Composer](https://getcomposer.org/doc/00-intro.md)

## Installation

1. In Terminal, go to your production folder:
```
cd path/to/my/folder
```

2. Clone this repository with the submodules
```
git clone https://github.com/sinanatra/kirby-sveltekit NAME-OF-MY-FOLDER
cd NAME-OF-MY-FOLDER
git clone --depth=1 https://github.com/sinanatra/kirby-headless.git admin/
rm -rf ./admin/.git
```

3. Install and run Kirby

- `cd admin`
- `composer install`
- `composer update`
- `composer start`
- Create an API user at `{url}/panel`.

4. Separately install dependencies with yarn
```
cd ../
yarn
```

5. Run and build the development environment.
```
yarn start
yarn build
```

## Folder structure and important files

```
.
├─── admin
│    ├── content
│    ├── kirby
│    ├── media
│    ├── site
│    │   ├── blueprints
│    │   │   └── users
│    │   │       ├── api.yml
│    │   │       └── default.yml
│    │   ├── config
│    │   │   └── config.php
│    │   └── plugins
│    │       └── kql
│    └── vendor
│    
├── src
│    ├── components
│    └── routes
│        ├── +layout.svelte
│        ├── +page.svelte
│        ├── +page.js
│        └── api
│            └── query
│                └── +server.js
├── static
├── package.json
└── svelte.config.js

```