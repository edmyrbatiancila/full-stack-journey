# [Fork a Repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?platform=windows&tool=cli)
- A fork is a new repository that shares code and visibility settings with the original “upstream” repository.


---

## About forks
- A fork is a new repository that shares code and visibility settings with the original “upstream” repository.
- Forks are often used to iterate on ideas or changes before they are proposed back to the upstream repository, such as in open source projects or when a user does not have write access to the upstream repository. 


--- 

### Propose changes to someone else's project
- For example, you can use forks to propose changes related to fixing a bug. Rather than logging an issue for a bug you have found, you can:
    - Fork the repository.
    - Make the fix.
    - Submit a pull request to the project owner.


---

### Use someone else's project as a starting point for your own idea.
- Open source software is based on the idea that by sharing code, we can make better, more reliable software.
- When creating your public repository from a fork of someone's project, make sure to include a license file that determines how you want your project to be shared with others. 

---

### Forking a repository

- To create a fork of a repository, use the gh repo fork subcommand.

```git
    gh repo fork REPOSITORY
```

- To create the fork in an organization, use the --org flag.

```git
    gh repo fork REPOSITORY --org "octo-org"
```


---

### Cloning your forked repository

- To create a clone of your fork, use the --clone flag.

```git
    gh repo fork REPOSITORY --clone=true
```


---


### Configuring Git to sync your fork with the upstream repository

- When you fork a project in order to propose changes to the upstream repository, you can configure Git to pull changes from the upstream repository into the local clone of your fork.

- To configure a remote repository for the forked repository, use the --remote flag.
```git
    gh repo fork REPOSITORY --remote=true
```

- To specify the remote repository's name, use the --remote-name flag.

```git
    gh repo fork REPOSITORY --remote-name "main-remote-repo"
```


---


### Editing a fork

- You can make any changes to a fork, including:

    - Creating branches: Branches allow you to build new features or test out ideas without putting your main project at risk.

    - Opening pull requests: If you want to contribute back to the upstream repository, you can send a request to the original author to pull your fork into their repository by submitting a pull request.


---


### Find another repository to fork

- You can fork any public repository to your personal account, or to an organization where you have permission to create repositories.


