// function to generate markdown for README
function generateMarkdown(data) {
  let badgeURL = `![image](https://img.shields.io/badge/license-${data.license}-green)`;
  return "# " + data.title + "\n\n"
    + `${badgeURL}\n\n`
    + "## Table of Contents\n"
    + `\n1. <a href="#description">Description</a>`
    + `\n2. <a href="#installation">Installation</a>`
    + `\n3. <a href="#usage">Usage</a>`
    + `\n4. <a href="#contributions">Contributions</a>`
    + `\n5. <a href="#license">License</a>`
    + `\n6. <a href="#test">Tests</a>`
    + `\n7. <a href="#questions">Issues and Questions</a>\n`

    + "<br>"
    + "<h3 id='description'>Description</h3>\n" + data.description + "\n\n"
    + "<h3 id='installation'>Installation\n" + data.installation + "\n\n"
    + "<h3 id='usage'>Usage\n" + data.usage + "\n\n"
    + "<h3 id='contributions'>Contributions\n" + data.contributions + "\n\n"
    + `<h3 id='license'>License\n` + `This project is licensed under the ${data.license}.\n\n`
    + "<h3 id='test'>Tests\n" + data.test + "\n\n"
    + "<h3 id='questions'>Issues and Questions\n"
    + `Issues and questions can be directed to ${data.email}. `
    + `The author's GitHub profile may be found at https://github.com/${data.username}.`;
}

module.exports = {
  generateMarkdown
};



// Alternate syntax for exporting:
/*
export default {
  generateMarkdown
};
*/