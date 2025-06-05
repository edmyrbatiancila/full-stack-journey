# [Learn Git Branching Interactive](https://learngitbranching.js.org/)


## Git Rebase

- Rebasing essentially takes a set of commits, "copies" them, and plops them down somewhere else.

## HEAD

- HEAD is the symbolic name for the currently checked out commit -- it's essentially what commit you're working on top of.

- HEAD always points to the most recent commit which is reflected in the working tree. Most git commands which make changes to the working tree will start by changing HEAD.

- **Detaching HEAD**

    - Detaching HEAD just means attaching it to a commit instead of a branch. This is what it looks like beforehand:

        - HEAD -> main -> C1

## The "~" operator

- The tilde operator (optionally) takes in a trailing number that specifies the number of parents you would like to ascend. Let's see it in action.

## Git Reset

- git reset reverses changes by moving a branch reference backwards in time to an older commit. In this sense you can think of it as "rewriting history;" git reset will move a branch backwards as if the commit had never been made in the first place.


## Reversing Changes in Git

- There are two primary ways to undo changes in Git -- one is using git reset and the other is using git revert. We will look at each of these in the next dialog