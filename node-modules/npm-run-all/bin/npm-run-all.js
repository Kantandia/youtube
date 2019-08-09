#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

require("babel-polyfill");

/**
 * The main process of `npm-run-all` command.
 *
 * @param {string[]} args - Arguments to parse.
 * @param {stream.Writable} stdout - A writable stream to print logs.
 * @param {stream.Writable} stderr - A writable stream to print errors.
 * @returns {Promise} A promise which comes to be fulfilled when all npm-scripts are completed.
 * @private
 */
function main(args) {
    var stdout = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var stderr = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    switch (args[0]) {
        case undefined:
        case "-h":
        case "--help":
            return require("./help").default(stdout);

        case "-v":
        case "--version":
            return require("./version").default(stdout);

        default:
            return require("./main").default(args, stdout, stderr);
    }
}

/* eslint-disable no-process-exit */
/* istanbul ignore if */

/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

if (require.main === module) {
    // Execute.
    var promise = main(process.argv.slice(2), process.stdout, process.stderr);

    // Error Handling.
    promise.catch(function (err) {
        console.error("ERROR:", err.message); // eslint-disable-line no-console
        process.exit(1);
    });
}