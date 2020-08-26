// function to generate markdown for README
function generateMarkdown(data) {
  // First replace the spaces in the license name with '%20' for use in the url
  let licenseForURL = removeSpaces(data.license);
  let badgeURL = `![image](https://img.shields.io/badge/license-${licenseForURL}-green)`;

  // Generate the actual markdown:
  let readmeText = "";
  let chapterNum = 1;

  readmeText += "# " + data.title + "\n\n"
    + `${badgeURL}\n\n`
    + "## Table of Contents\n"
  // Generate table of contents dynamically - if a section is blank, don't include it.
  if (data.description !== "") {
    readmeText += `\n${chapterNum++}. <a href="#description">Description</a>`;
  }

  if (data.installation !== "") {
    readmeText += `\n${chapterNum++}. <a href="#installation">Installation</a>`;
  }

  if (data.usage !== "") {
    readmeText += `\n${chapterNum++}. <a href="#usage">Usage</a>`;
  }

  if (data.contributions !== "") {
    readmeText += `\n${chapterNum++}. <a href="#contributions">Contributions</a>`;
  }

  readmeText += `\n${chapterNum++}. <a href="#license">License</a>`;

  data.test !== "" ? readmeText += `\n${chapterNum++}. <a href="#test">Tests</a>` : null;

  readmeText += `\n${chapterNum}. <a href="#questions">Issues and Questions</a>\n`

  readmeText += "<h3 id='description'>Description</h3>\n" + data.description + "\n\n"
    + "<h3 id='installation'>Installation</h3>\n" + data.installation + "\n\n"
    + "<h3 id='usage'>Usage</h3>\n" + data.usage + "\n\n"
    + "<h3 id='contributions'>Contributions</h3>\n" + data.contributions + "\n\n"
    + `<h3 id='license'>License</h3>\n` + `This project is licensed under the ${data.license}.\n\n`
    + "<h3 id='test'>Tests</h3>\n" + data.test + "\n\n"
    + "<h3 id='questions'>Issues and Questions</h3>\n"
    + `Issues and questions can be emailed to ${data.email}. `
    + `The author's GitHub profile may be found at https://github.com/${data.username}.`
    + `<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>`;

    return readmeText;
}

module.exports = {
  generateMarkdown
};

/** Removes spaces from a string and replaces them with "%20" for use in URLs */
function removeSpaces(str) {
  if (str === null) {
      return;
  }
  str = str.trim();
  for (let i = 0; i < str.length; i++)
      if (str[i] === " ") {
          var leftStr = str.slice(0, i);
          var rightStr = str.slice(i + 1,);
          str = leftStr + "%20" + rightStr;
      }
  return str;
}


// Alternate syntax for exporting:
/*
export default {
  generateMarkdown
};
*/