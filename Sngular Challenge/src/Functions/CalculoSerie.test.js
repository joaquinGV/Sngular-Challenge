import CalculoSerie from "./CalculoSerie";
import { describe, it, expect } from "vitest";

describe("CalculoSerie Testing", () => {
  it("Should render CalculoSerie with n value as 0", () => {
    const result0 = CalculoSerie(0);
    expect(result0).toEqual(0);
  });
  it("Should render CalculoSerie with n value as 1", () => {
    const result1 = CalculoSerie(1);
    expect(result1).toEqual(0);
  });
  it("Should render CalculoSerie with n value as 2", () => {
    const result2 = CalculoSerie(2);
    expect(result2).toEqual(-14);
  });
  it("Should render CalculoSerie with n value as 3", () => {
    const result3 = CalculoSerie(3);
    expect(result3).toEqual(-16);
  });
  it("Should render CalculoSerie with n value as 4", () => {
    let res = CalculoSerie(4);
    expect(res).toEqual(-24);
  });
  it("Should render CalculoSerie with n value as 5", () => {
    let res = CalculoSerie(5);
    expect(res).toEqual(-27);
  });
  it("Should render CalculoSerie with n value as 6", () => {
    let res = CalculoSerie(6);
    expect(res).toEqual(-41);
  });
  it("Should render CalculoSerie with n value as 7", () => {
    let res = CalculoSerie(7);
    expect(res).toEqual(-36);
  });
  it("Should render CalculoSerie with n value as 8", () => {
    let res = CalculoSerie(8);
    expect(res).toEqual(-40);
  });
  it("Should render CalculoSerie with n value as 9", () => {
    let res = CalculoSerie(9);
    expect(res).toEqual(-23);
  });
  it("Should render CalculoSerie with n value as 10", () => {
    let res = CalculoSerie(10);
    expect(res).toEqual(-11);
  });
});

describe("CalculoSerie Testing with Negative Cases", () => {
  it("Should render CalculoSerie with n value as -10", () => {
    let result = CalculoSerie(-10);
    expect(result).toEqual(0);
  });
  it("Should render CalculoSerie with n value as -100", () => {
    let result = CalculoSerie(-100);
    expect(result).toEqual(0);
  });
});
