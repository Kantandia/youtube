"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = spawn;

var _child_process = require("child_process");

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Kills the new process and its sub processes forcibly.
 * @this ChildProcess
 */
function kill() {
  _child_process2.default.spawn("taskkill", ["/F", "/T", "/PID", this.pid]);
}

/**
 * Launches a new process with the given command.
 * This is almost same as `child_process.spawn`.
 *
 * This returns a `ChildProcess` instance.
 * `kill` method of the instance kills the new process and its sub processes forcibly.
 *
 * @param {string} command - The command to run.
 * @param {string[]} args - List of string arguments.
 * @param {object} options - Options.
 * @returns {ChildProcess} A ChildProcess instance of new process.
 * @private
 */
/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
function spawn(command, args, options) {
  var child = _child_process2.default.spawn(command, args, options);
  child.kill = kill;

  return child;
}