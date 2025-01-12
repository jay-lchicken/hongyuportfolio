"use server";
import { Octokit } from "octokit";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import dotenv from "dotenv";
dotenv.config();

export async function getGithubBuildData() {
    const githubKey = process.env.NEXT_PUBLIC_GITHUB_KEY;
    const octokit = new Octokit({
        auth: githubKey, // Use your token here
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
                <p>Error: {error.message}</p>
            </div>
        );
    }
}