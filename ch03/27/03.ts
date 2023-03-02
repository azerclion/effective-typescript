// requires node modules: @types/lodash

const csvData = "...";
const rawRows = csvData.split("\n");
const headers = rawRows[0].split(",");
import _ from "lodash";

const rowsA = rawRows.slice(1).map((rowStr) => {
  const row = {};
  rowStr.split(",").forEach((val, j) => {
    row[headers[j]] = val;
    // ~~~~~~~~~~~~~~~ No index signature with a parameter of
    //                 type 'string' was found on type '{}'
  });
  return row;
});

const rowsB = rawRows.slice(1).map((rowStr) =>
  rowStr.split(",").reduce<{ [key: string]: any }>(
    (row, val, i) => ((row[headers[i]] = val), row),
    // ~~~~~~~~~~~~~~~ No index signature with a parameter of
    //                 type 'string' was found on type '{}'
    {}
  )
);

const rowsC = rawRows.slice(1).map((rowStr) =>
  rowStr.split(",").reduce<Record<string, any>>(
    (row, val, i) => ((row[headers[i]] = val), row),
    // ~~~~~~~~~~~~~~~ No index signature with a parameter of
    //                 type 'string' was found on type '{}'
    {}
  )
);

export default {};
