const core = require("@actions/core")
const { Octokit } = require("@octokit/rest")

async function run() {
  const pull_number = core.getInput("pull_number")
  const owner = core.getInput("owner")
  const repository = core.getInput("repository")

  const octokit = new Octokit({
    auth: process.env.GIT_TOKEN,
  })
  const {
    data: { body },
  } = await octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
    owner: owner,
    repo: repository,
    pull_number: pull_number,
  })

  const newLine = `
`
  const content = body.replace(/\\r\\n/g, newLine).replace(/"/g, "")

  core.setOutput("content", content)
}

run()
