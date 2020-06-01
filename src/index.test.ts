/**
 * @file **this-module** | Tests for index.ts.
 * @author Ian Sanders
 * @copyright 2019 Ian Sanders
 * @license MIT
 */

import * as assert from "assert";
import * as index from "./index";

context("index.ts", function(): void {
  describe("#getOne()", function(): void {
    it("should return 1", function(): void {
      assert.strictEqual(index.getOne(), 1);
    });
  });
});

// This is used by pipelines to determine whether to run the test publish task
console.log("##vso[task.setvariable variable=testsRan]true");
