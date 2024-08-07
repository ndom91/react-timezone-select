import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { test, expect, vi } from "vitest"
import TimezoneSelect, { allTimezones } from "../../dist"

test("loads and displays default timezone - passing string", async () => {
  const { getByText } = render(<TimezoneSelect value={"Europe/Amsterdam"} onChange={(e) => e} />)

  expect(
    getByText(/\(GMT\+[1-2]:00\) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna$/),
  ).toBeInTheDocument()
})

test("loads and displays default timezone - passing full object", async () => {
  const { getByText } = render(
    <TimezoneSelect
      value={{
        value: "Europe/Amsterdam",
        label: "(GMT+1:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        offset: 60,
      }}
      onChange={(e) => e}
    />,
  )

  expect(
    getByText(/\(GMT\+[1-2]:00\) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna$/),
  ).toBeInTheDocument()
})

test("load and displays labelStyle - altName", async () => {
  const { getByText } = render(
    <TimezoneSelect value={"America/Juneau"} labelStyle="altName" onChange={(e) => e} />,
  )

  expect(
    getByText(/\(GMT-[8-9]:00\) Alaska \(Alaska (Daylight|Standard) Time\)$/),
  ).toBeInTheDocument()
})

test("load and displays labelStyle - abbrev", async () => {
  const { getByText } = render(
    <TimezoneSelect value={"America/Juneau"} labelStyle="abbrev" onChange={(e) => e} />,
  )

  expect(getByText(/\(GMT-[8-9]:00\) Alaska \(AK[D|S]T\)$/)).toBeInTheDocument()
})

test("load and displays custom timezone", async () => {
  const { getByText } = render(
    <TimezoneSelect
      value={"America/Lima"}
      timezones={{
        ...allTimezones,
        "America/Lima": "Pittsburgh",
      }}
      onChange={(e) => e}
    />,
  )

  expect(getByText(/\(GMT-[5-6]:00\) Pittsburgh$/)).toBeInTheDocument()
})

test("load and passes react-select props", async () => {
  const { getByText } = render(
    <TimezoneSelect
      value={""}
      timezones={{
        ...allTimezones,
        "America/Lima": "Pittsburgh",
      }}
      placeholder={"Please Select a Timezone"}
      onChange={(e) => e}
    />,
  )

  expect(getByText("Please Select a Timezone")).toBeInTheDocument()
})

test("can determine timezone by approximate match", async () => {
  const { getByText } = render(<TimezoneSelect value="Europe/Rome" onChange={(e) => e} />)

  expect(
    getByText(/\(GMT\+[1-2]:00\) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna$/),
  ).toBeInTheDocument()
})

test("select drop-downs must use the fireEvent.change", () => {
  const onChangeSpy = vi.fn()
  const { container } = render(
    <TimezoneSelect value={"Europe/Amsterdam"} onChange={onChangeSpy} menuIsOpen={true} />,
  )

  const selectOption = [...container.querySelectorAll('div[id^="react-select"]')].find(
    (n) => n.textContent === "(GMT-10:00) Hawaii",
  )

  selectOption && fireEvent.click(selectOption)

  expect(onChangeSpy).toHaveBeenCalledTimes(1)
  expect(onChangeSpy).toHaveBeenCalledWith({
    value: "Pacific/Honolulu",
    label: "(GMT-10:00) Hawaii",
    altName: "Hawaii-Aleutian Standard Time",
    offset: -10,
    abbrev: "HAST",
  })
})

test("loads and does not throw on missing timezone", async () => {
  expect(() =>
    render(
      <TimezoneSelect
        value={"Europe/Berlin"}
        timezones={{
          "America/SmallTownMissing": "Missing",
        }}
        onChange={(e) => e}
      />,
    ),
  ).not.toThrowError(/Please enter an IANA timezone id/i)
})

test("load and does not omit timezone that isDST is true and doesn not have daylight definitions", async () => {
  const { getByText } = render(
    <TimezoneSelect
      value={"Asia/Tehran"}
      timezones={{
        ...allTimezones,
        "Asia/Tehran": "Tehran",
      }}
      onChange={(e) => e}
    />,
  )

  expect(getByText(/Tehran/)).toBeInTheDocument()
})

test("load and displays UTC", async () => {
  const { getByText } = render(
    <TimezoneSelect value={"America/Juneau"} displayValue="UTC" onChange={(e) => e} />,
  )

  expect(getByText(/\(UTC-[8-9]:00\) Alaska$/)).toBeInTheDocument()
})

test("can set current time (DST)", async () => {
  const { getByText } = render(
    <TimezoneSelect value={"America/Detroit"} currentDatetime="2017-07-08" onChange={(e) => e} />,
  )

  expect(getByText(/GMT-4/)).toBeInTheDocument()
})

test("can set current time (standard)", async () => {
  const { getByText } = render(
    <TimezoneSelect value={"America/Detroit"} currentDatetime="2017-01-27" onChange={(e) => e} />,
  )

  expect(getByText(/GMT-5/)).toBeInTheDocument()
})

test("can handle null input", async () => {
  // @ts-expect-error Explicitly testing null input
  const { container } = render(<TimezoneSelect value={null} />)

  expect(container.firstChild).toBeInTheDocument()
})
