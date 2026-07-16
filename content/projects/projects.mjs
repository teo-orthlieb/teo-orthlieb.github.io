import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const starIcon = `<svg aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="star">
	<path fill - rule="evenodd" d = "M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z" ></path >
</svg>`;
const forkIcon = `<svg aria-label="forks" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="forks">
<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
</svg>`;
const colors = await (await fetch("lang_colors.json")).json();

function htmlToElement(html) {
	var template = document.createElement('template');
	html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	return template.content.firstChild;
}

const octokit = new Octokit();
const DAY_MS = 24 * 60 * 60 * 1000;

load_github_repos();

async function get_repo_data(owner, repo) {
	const cache_key = `gh_repo_stats:${owner}/${repo}`;
	const cached = JSON.parse(localStorage.getItem(cache_key) || "null");
	if (cached && Date.now() - cached.timestamp < DAY_MS) {
		return cached.data;
	}
	try {
		let resp = await octokit.request('GET /repos/{owner}/{repo}', {
			owner: owner,
			repo: repo
		});
		localStorage.setItem(cache_key, JSON.stringify({ timestamp: Date.now(), data: resp["data"] }));
		return resp["data"];
	} catch (err) {
		console.error(`Failed to fetch GitHub data for ${owner}/${repo}:`, err);
		return null;
	}
}

async function add_repo_stats(project) {
	let repository = project.getAttribute("data-repository");
	if (!repository) return;
	let [owner, repo] = repository.split("/");
	let data = await get_repo_data(owner, repo);
	if (!data) return;
	let stats = project.querySelector(".stats");

	// stars
	let starCount = data["stargazers_count"];
	if (starCount > 0) {
		let star = htmlToElement(starIcon);
		let stars = document.createElement("small");
		stars.innerText = starCount;
		stats.appendChild(star);
		stats.appendChild(stars)
	}
	// forks
	let forkCount = data["forks"];
	if (forkCount > 0) {
		let fork = htmlToElement(forkIcon);
		let forks = document.createElement("small");
		forks.innerText = forkCount;
		stats.appendChild(fork);
		stats.appendChild(forks);
	}
	// lang
	let language = data["language"];
	if (language !== null) {
		let lang_color = document.createElement("span");
		lang_color.classList.add("language_color");
		lang_color.style.backgroundColor = colors[language];
		let lang = document.createElement("small");
		lang.innerText = language;
		stats.appendChild(lang_color);
		stats.appendChild(lang);
	}
}

async function load_github_repos() {
	for (const project of window.document.querySelectorAll(".projects > .project")) {
		await add_repo_stats(project);
	}
}
