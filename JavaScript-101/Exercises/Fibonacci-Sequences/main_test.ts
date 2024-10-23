import { assertEquals } from "@std/assert";
import { fib } from "./main.ts";

Deno.test(function fibonacciSeq() {
  assertEquals(fib(19), 4181);
});
