import {describe} from "mocha";

const path = require("path");
const wasm_tester = require("circom_tester").wasm;
const chai = require("chai");
const assert = chai.assert;

export {};

describe("Test",  function() {
    let circuit;

    describe("#Test", function (){
        it("#Test 1 2", async () => {
            circuit = await wasm_tester(path.join(__dirname, "../circuits", "test.circom"));
            const inputs = {
                in1:"1",
                in2:"2",
            }

            const expOut = {out: 2}

            const w = await circuit.calculateWitness(inputs, true);

            // console.log(w)
            await circuit.assertOut(w, expOut);
        });

        it("#Test 1 1", async () => {
            circuit = await wasm_tester(path.join(__dirname, "../circuits", "test.circom"));
            const inputs = {
                in1:"1",
                in2:"1",
            }

            const expOut = {out: 1}

            const w = await circuit.calculateWitness(inputs, true);

            // console.log(w)
            await circuit.assertOut(w, expOut);
        });

        it("#Test Error", async () => {
            circuit = await wasm_tester(path.join(__dirname, "../circuits", "test.circom"));
            const inputs = {
                in1:"1",
            }

            // In this case proof should not be generated
            const expOut = {out: 0}

            const w = await circuit.calculateWitness(inputs, true);

            // console.log(w)
            await circuit.assertOut(w, expOut);
        });
    });


});
