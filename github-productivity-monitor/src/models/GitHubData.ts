export interface GitHubData {
  user: GitHubUser;
  repositories: GitHubRepository[];
  activities: GitHubActivity[];
  pullRequests: GitHubPullRequest[];
  issues: GitHubIssue[];
  commits: GitHubCommit[];
  lastSyncDate: Date;
}

export interface GitHubUser {
  id: number;
  login: string;
  name?: string;
  email?: string;
  avatar_url: string;
  html_url: string;
  company?: string;
  location?: string;
  bio?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  owner: GitHubUser;
  private: boolean;
  html_url: string;
  description?: string;
  language?: string;
  languages?: { [language: string]: number };
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  size: number;
  default_branch: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  isTrackingRepo?: boolean;
}

export interface GitHubActivity {
  id: string;
  type: GitHubActivityType;
  actor: GitHubUser;
  repo: GitHubRepository;
  payload: any;
  public: boolean;
  created_at: string;
}

export enum GitHubActivityType {
  PUSH = 'PushEvent',
  PULL_REQUEST = 'PullRequestEvent',
  ISSUES = 'IssuesEvent',
  ISSUE_COMMENT = 'IssueCommentEvent',
  CREATE = 'CreateEvent',
  DELETE = 'DeleteEvent',
  FORK = 'ForkEvent',
  WATCH = 'WatchEvent',
  STAR = 'StarEvent',
  RELEASE = 'ReleaseEvent',
  DEPLOYMENT = 'DeploymentEvent'
}

export interface GitHubPullRequest {
  id: number;
  number: number;
  title: string;
  body?: string;
  state: 'open' | 'closed' | 'merged';
  user: GitHubUser;
  head: GitHubBranch;
  base: GitHubBranch;
  merged: boolean;
  merged_at?: string;
  created_at: string;
  updated_at: string;
  closed_at?: string;
  additions: number;
  deletions: number;
  changed_files: number;
  review_comments: number;
  comments: number;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  body?: string;
  state: 'open' | 'closed';
  user: GitHubUser;
  assignee?: GitHubUser;
  assignees: GitHubUser[];
  labels: GitHubLabel[];
  milestone?: GitHubMilestone;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
}

export interface GitHubCommit {
  sha: string;
  commit: {
    author: GitHubCommitAuthor;
    committer: GitHubCommitAuthor;
    message: string;
    tree: { sha: string };
    verification?: GitHubVerification;
  };
  author?: GitHubUser;
  committer?: GitHubUser;
  parents: { sha: string }[];
  stats?: {
    additions: number;
    deletions: number;
    total: number;
  };
  files?: GitHubCommitFile[];
}

export interface GitHubCommitAuthor {
  name: string;
  email: string;
  date: string;
}

export interface GitHubCommitFile {
  filename: string;
  status: 'added' | 'modified' | 'removed' | 'renamed';
  additions: number;
  deletions: number;
  changes: number;
  patch?: string;
  previous_filename?: string;
}

export interface GitHubBranch {
  label: string;
  ref: string;
  sha: string;
  user: GitHubUser;
  repo: GitHubRepository;
}

export interface GitHubLabel {
  id: number;
  name: string;
  color: string;
  description?: string;
}

export interface GitHubMilestone {
  id: number;
  number: number;
  title: string;
  description?: string;
  state: 'open' | 'closed';
  created_at: string;
  updated_at: string;
  due_on?: string;
  closed_at?: string;
}

export interface GitHubVerification {
  verified: boolean;
  reason: string;
  signature?: string;
  payload?: string;
}

export interface GitHubAPIError {
  message: string;
  documentation_url?: string;
  errors?: Array<{
    resource: string;
    field: string;
    code: string;
  }>;
}