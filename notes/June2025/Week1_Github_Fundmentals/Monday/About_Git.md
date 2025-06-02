# [About Git](https://docs.github.com/en/get-started/using-git/about-git)

---

## About Version Control and Git

- A version control system, or **VCS**, tracks the history of changes as people and teams collaborate on projects together. 

- **Developers can review project history to find out:**

    - Which changes were made?
    - Who made the changes?
    - When were the changes made?
    - Why were changes needed?

- **Git** is commonly used for both open source and commercial software development, with significant benefits for individuals, teams and businesses.

---

## About repositories

- A **repository**, or **Git** project, encompasses the entire collection of files and folders associated with a project, along with each file's revision history.

- The **commits** can be organized into multiple lines of development called **branches**.

- Git repository also allows for: interaction with the history, cloning the repository, creating branches, committing, merging, comparing changes across versions of code, and more.

---

## How GitHub works

- GitHub builds collaboration directly into the development process.


---

## GitHub and the command line

- **Basic Git commands:**

    - **git init** initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.

    - **git clone** creates a local copy of a project that already exists remotely. The clone includes all the project's files, history, and branches.

    - **git add** stages a change.

        - This command performs staging, the first part of that two-step process.
        - Any changes that are staged will become a part of the next snapshot and a part of the project's history.
        - Staging and committing separately gives developers complete control over the history of their project without changing how they code and work.

    - **git commit** saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo.

    - **git status** shows the status of changes as untracked, modified, or staged.

    - **git branch** shows the branches being worked on locally.

    - **git merge** merges lines of development together. This command is typically used to combine changes made on two distinct branches. For example, a developer would merge when they want to combine changes from a feature branch into the main branch for deployment.

    - **git pull** updates the local line of development with updates from its remote counterpart.

    - **git push** updates the remote repository with any commits made locally to a branch.


---



## Models for collaborative development

- There are two primary ways people collaborate on GitHub:
    1. Shared repository
    2. Fork and pull