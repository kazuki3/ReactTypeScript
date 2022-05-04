/* eslint-disable @typescript-eslint/unused-vars */

/**TypeScriptの基本形*/
// boolean
let bool: boolean = true;

// int
let num: number = 0;

// string
let str: string = "string";

// Array
let arr1: Array<number> = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

// tuple
let tuple: [number, string] = [7, "string"];

// any
let any1: any = false;

// void (何も返却しない, voidは暗黙的に設定されるので、書かなくてもよい)
const func1 = (): void => {
  const test = "test1";
};

// null
const null1: null = null;

// undefined
const undefined1: undefined = undefined;

// object
const obj1: object = {};
const obj2: { id: num; name: string } = { id: 6, name: "jessy" };
