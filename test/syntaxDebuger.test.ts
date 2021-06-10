import {describe, it, expect} from "@jest/globals";
import {checkAlive} from "../src/syntaxDebuger";

describe("check if the user is still alive", () => {
    it("Should return 1 if receive more than 0", () => {
        expect(checkAlive(-5)).toBe(0);
    });
});
