const str = `
    Frankenstein; or, The Modern Prometheus
    by Mary Shelley

    You will rejoice to hear that no disaster has accompanied the commencement
    of an enterprise which you have regarded with such evil forebodings. I arrived
    here yesterday, and my first task is to assure my dear sister of my welfare and
    increasing confidence in the success of my undertaking.

    I am already far north of London, and as I walk in the streets of Petersburgh,
    I feel a cold northern breeze play upon my cheeks, which braces my nerves and
    fills me with delight.
`;

function parseTaggedText(lines: string[]): (readonly string[])[] {
  let currPara: readonly string[] = [];
  const paragraphs: (readonly string[])[] = [];

  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push(currPara);
      currPara = []; // Clear lines
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara = currPara.concat(line);
    }
  }
  addParagraph();
  return paragraphs;
}
console.log(parseTaggedText(str.split(`\n`)));

// export default {}
