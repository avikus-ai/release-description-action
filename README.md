# Release description action

Action to generate description from pull request body for github release.

## Usage

### Pre-requisites

Create a workflow `.yml` file in your `.github/workflows` directory. An [example workflow](#example-workflow---create-a-release) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

- `version`: The name of Jira version.
- `projectKey`: The key of Jira project.
- `jira_token`: The token of Jira.
- `jira_domain`: The name of Jira domain.

### Outputs

- `content`: The description for release details.

### Example workflow - release version

```yaml
name: Jira Release

on:
  push:
    tags:
      - "v*"

jobs:
  version-release:
    name: version-release
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: get pull request message
        id: pulls
        uses: avikus-ai/release-description-action@v0.0.1
        env:
          GIT_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          pull_number: "pull number"
          owner: "project owner"
          repository: "repository name"
      - name: release description
        id: release_description
        uses: avikus-ai/release-description-action@v0.0.1
        with:
          version: "jira version name"
          projectKey: "jira project key"
          jira_token: "jira token"
          jira_domain: "jira domain"
```

## License

The scripts and documentation in this project are released under the MIT License
