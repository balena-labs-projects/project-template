# Balena Labs Project Template

This repository constitutes the key components required for creating a new Balena Labs project. It aims to help standardise the project repos, and act as a quick and easy way to deploy a new project with all the required actions and documentation.

Setting up this template requires the following steps:

## 1. Initial setup

1. Click `Use this template` from the top of the page.
2. Configure the basic GitHub files relevant to your setup and code language, such as `.gitignore` and `.dockerignore`.
3. Replace `docker-compose.yml` and `Dockerfile` with your own.
4. Replace `logo.svg` with your own custom logo to display on the Balena Hub. If you are using a different image format, update the filename in `balena.yml` accordingly.
5. Update `balena.yml` with your project details, paying attention to the URLs to ensure they reflect your project paths. `post-provisioning` is handled automatically by a GitHub action, mirroring the GitHub README.md file and can be ignored.
6. If not using tags to trigger deploys, you can set `sync_tag: false` on the `balena.yml Action` inputs in `.github/workflows/deploy-to-balena.yml` to prevent matching the version shown on Balena Hub with with the semver tag pushed to GitHub.

## 2. Configure the documentation

If docs are not required, simply delete the `docs` folder. You could also delete the `deploy-docs.yml` action if you wish, but it isn't necessary as it only triggers when the `docs` folder exists and when changes are made inside the folder.

If you do require docs, Labs themed docs will be built and deployed to a branch called `gh_pages`. From there, the docs can be published to GitHub pages by selecting the `Deploy from a branch` mode in `Settings -> Pages`, choosing the `gh_pages` branch and `/` as the source folder.

### Getting started with developing your project docs

You can set the name of your project in `docs/docusaurus-config.yml`. This will amend the title in the header of the documentation.

You can edit documentation by pushing changes to the markdown files in the `docs` folder. For large changes, the easiest way is to use the local development environment. From your terminal window within your new project, run:

```
git clone --depth 1 https://github.com/balena-io-experimental/labs-docs-builder.git
npm i --prefix labs-docs-builder
DOCS_PATH="../docs" npm start --prefix labs-docs-builder
```

A browser window will open and display how your docs will look when deployed. Changes made to the files in `docs` will be seen in realtime.

Sidebars are generated automatically based on the file and folder names inside the `docs` folder.

To change the order of items in the sidebars amend the section at the top of each file to specify where it should be in the list:

```
---
sidebar_position: 1
---
```

Static assets such as images go in `docs/static` and can be referenced as `/your-asset.jpeg` in the docs.

To replace the default header image include your own in `docs/static` called `primary-header-logo.png`.

Documentation will deploy automatically on every doc amendment pushed to the main or master branches.

## 3. Deploy to Balena

To deploy to Balena Hub, specify the app name in `.github/workflows/deploy-to-balena.yml` by editing the environment variable:

```
env:
  BALENA_APP: maggie0002/test-block
```

Finally, push a tag to the repository in semver format (i.e. `0.0.1`) to trigger a deployment.

> Tags are the recommended means of pushing builds, as the default `deploy-to-balena-action` action requires accessing a GitHub secret that is only available when creating a PR from a branch on the GitHub repository. Users looking to contribute by creating PRs from forks will experiences errors about the `BALENA_TOKEN` being missing. Labs is seeking community contribution and ownership of projects, making these barriers significant.

By default `BALENA_API_KEY` is used from the org wide GitHub secrets. If you are not using the default deploy mechanisms and need a custom API key, replace `BALENA_API_KEY` in `.github/workflows/deploy-to-balena.yml` with your own secret.

## 4. Deploy to GitHub Container Registry

To build and deploy Docker images to the GitHub container registry, configure the `GHCR_IMAGE_NAME` environment variable in `.github/workflows/deploy-to-ghcr.yml`

```
env:
    GHCR_IMAGE_NAME: balena-labs-research/project-template
```

Then push the tag `ghcr` to begin a build and deploy.

## 5. Delete this README content

Once you have finished your setup, you can delete all of this top section of the README. The following sections provide some basic templates useful for creating your own project specific README. Remember to update the URLs to match your project.

# Example README content

![logo](https://raw.githubusercontent.com/balena-io-projects/balena-sound/master/docs/images/balenaSound-logo.png)

**Subtitle detailing key aspects of the project.**

## Highlights

- **Highlight 1**: Remove friction from using...
- **Highlight 2**: Easily access the...
- **Highlight 3**: Upgrade to the...

## Setup and configuration

Running this project is as simple as deploying it to a balenaCloud application. You can do it in just one click by using the button below:

[![deploy button](https://balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balena-labs-projects/project-template)

## Supported hardware

This project is developed for Raspberry Pi 4. Other hardware may be compatible, but is untested.

## Documentation

Head over to our [docs](https://balena-labs-projects.github.io/project-template/) for detailed installation and usage instructions.

## Getting Help

If you're encountering bugs, please raise an issue.

## Contributing

Do you want to help improve the project? We welcome PRs, and would be happy to discuss contributions via a raised feature request issue.
