"use server";
import { Octokit } from "octokit";

export async function getGithubBuildData() {
    const octokit = new Octokit({
        auth: "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", // Use your token here
    });

    try {
        const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
            owner: "jay-lchicken", // Replace with your GitHub username
            repo: "hongyuportfolio", // Replace with your repository name
            headers: {
                "X-GitHub-Api-Version": "2022-11-28", // Optional: Use the correct API version
            },
        });

        const commits = response.data;

        if (commits.length === 0) {
            return (
                <div>
                    <p>No commits found.</p>
                </div>
            );
        }

        const latestCommit = commits[0]; // Get the latest commit
        const commitDate = new Date(latestCommit.commit.author.date);
        const hoursAgo = Math.floor((Date.now() - commitDate) / (1000 * 60 * 60));
        return (
            <div>
                <p>Build {latestCommit.sha.substring(0, 7)} from about {hoursAgo} hours ago</p>
            </div>
        );
    } catch (error) {
        console.error("Error fetching commits:", error.message);
        return (
            <div>
                <p>Error: Failed to fetch commits.</p>
            </div>
        );
    }
}