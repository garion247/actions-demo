# Workspace Project

![CI Pipeline](https://github.com/garion247/actions-demo/actions/workflows/ci.yml/badge.svg)

A Node.js application with CI pipeline powered by GitHub Actions.

## Features
- Mathematical utility functions (add, subtract, multiply, power, clamp)
- Comprehensive test suite
- Automated CI pipeline with GitHub Actions

## Running Tests

```bash
node test.js
```

## CI Pipeline

The CI pipeline runs automatically on:
- Every push to `master`
- Every pull request targeting `master`

It performs:
1. **Test** - Runs all unit tests with Node.js
2. **Lint** - Checks JavaScript syntax for errors
