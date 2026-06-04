import { GITHUB_USERNAME } from "./data";

const GITHUB_API = "https://api.github.com/graphql";

export async function getGitHubData() {
  try {
    const fromDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 6);

    const res = await fetch(GITHUB_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
        query {
          user(login: "${GITHUB_USERNAME}") {
            login
            url

            repositories {
              totalCount
            }

            contributionsCollection(from: "${fromDate.toISOString()}") {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
        `,
      }),
      next: { revalidate: 3600 },
    });

    const json = await res.json();

    if (!json?.data?.user) return null;

    const u = json.data.user;

    return {
      login: u.login,
      url: u.url,
      repos: u.repositories.totalCount,
      totalContributions:
        u.contributionsCollection.contributionCalendar.totalContributions,
      weeks:
        u.contributionsCollection.contributionCalendar.weeks,
    };
  } catch (err) {
    console.log("GitHub API error:", err);
    return null;
  }
}