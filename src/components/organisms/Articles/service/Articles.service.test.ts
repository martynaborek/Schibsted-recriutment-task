import { convertNorwegianDate } from "./Articles.service"

describe("Articles service tests", () => {
  test("Convert Norwegian Date to javascript", () => {
    expect(convertNorwegianDate("2. februar 2019").toDateString()).toEqual(
      new Date("2019-02-02").toDateString()
    )
    expect(convertNorwegianDate("1. oktober 2018").toDateString()).toEqual(
      new Date("2018-10-01").toDateString()
    )
    expect(convertNorwegianDate("24. mai 2018").toDateString()).toEqual(
      new Date("2018-05-24").toDateString()
    )
    expect(convertNorwegianDate("13. desember 2018").toDateString()).toEqual(
      new Date("2018-12-13").toDateString()
    )
  })
})


// TODO: test the cache and data retrieval functions