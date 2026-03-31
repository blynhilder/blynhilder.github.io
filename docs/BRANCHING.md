# Branching Strategy

## Long-lived branches

- `main`: production-ready code.
- `develop`: integration branch for ongoing development.
- `staging`: pre-release validation branch.

## Short-lived branches

- `feature/<name>`: new feature work.
- `fix/<name>`: non-urgent bug fixes.
- `hotfix/<name>`: urgent production fixes from `main`.
- `release/<version>`: release hardening and changelog preparation.

## Typical workflow

1. Branch from `develop` using `feature/<name>`.
2. Open PR into `develop`.
3. Periodically merge `develop` into `staging` for final QA.
4. Merge `staging` into `main` for release.
5. Tag release on `main` (e.g. `v1.0.0`).

## Local branch bootstrap

```bash
git checkout -b main
git checkout -b develop
git checkout -b staging
```

> If your remote already has `main`, create `develop` and `staging` from it.
