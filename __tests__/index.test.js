import {it} from "@jest/globals";
import statement from "../index";
import * as fs from "fs";

let invoicesJson = fs.readFileSync('invoices.json');
let invoices = JSON.parse(invoicesJson)
let playsJson = fs.readFileSync('plays.json');
let plays = JSON.parse(playsJson)


it('golden main', () => {
	const invoice = invoices[0]
	expect(statement(invoice, plays)).toEqual(`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`)
})
