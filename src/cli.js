#!/usr/bin/env node

require = require("esm")(module /*, options*/);
require("./index.js").cli(process.argv);