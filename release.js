module.exports = {
    branches: "develop",
    repositoryUrl: "https://github.com/milesuarez/test-gh-actions/",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
              "changelogFile": "CHANGELOG.md"
            }
          ],
          [
            "@semantic-release/git",
            {
              "assets": ["CHANGELOG.md"]
            }
          ]
      ] 
  }