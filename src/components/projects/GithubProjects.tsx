import { useEffect, useState } from "react";
import { Alert, Button, CircularProgress } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import type { GithubRepo } from "../../types/github";
import { GITHUB_URL, GITHUB_USERNAME } from "../../data/portfolio";

const GithubProjects = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          { signal: controller.signal },
        );
        if (!res.ok) throw new Error("Could not load repositories from GitHub.");

        const data: GithubRepo[] = await res.json();
        // most recently updated first
        data.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        // keep only repositories that have a Vercel live link in "homepage"
        setRepos(data.filter((repo) => repo.homepage?.includes("vercel.app")));
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchRepos();
    return () => controller.abort();
  }, []);

  return (
    <Section id="projects" eyebrow="What I've done" title="My Projects" subtitle="Explore my projects and GitHub repositories." tone="leaf" next="education">
      {isLoading && (
        <div className="flex justify-center py-10" role="status" aria-label="Loading repositories">
          <CircularProgress />
        </div>
      )}

      {error && <Alert severity="error">{error}</Alert>}

      {!isLoading && !error && repos.length === 0 && (
        <Alert severity="info">No deployed (Vercel) projects found yet.</Alert>
      )}

      {!isLoading && !error && repos.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <Button variant="contained" size="large" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" startIcon={<GitHub />}>
          View GitHub Profile
        </Button>
      </div>
    </Section>
  );
};

export default GithubProjects;
