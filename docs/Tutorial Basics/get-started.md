---
sidebar_position: 2
---

# Get Started

## Required Hardware

- For the best experience, we recommend using a Raspberry Pi 3B+ or 4B.
- An SD Card. We recommend the Sandisk Extreme Pro series. 8GB should be plenty enough for this project.
- Power supply

## Software required

- Software to flash an SD card ([balenaEtcher](https://balena.io/etcher))
- A free [balenaCloud](https://balena.io/cloud) account
- (optional) A download of this project
- (optional) The [balena CLI tools](https://github.com/balena-io/balena-cli/blob/master/INSTALL.md)

### Provision your device

Once your application has been created you'll need to add a device to it:

1. Add a device to the application by clicking the `add device` button
2. Download the OS and flash it to your SD card with [balenaEtcher](https://balena.io/etcher)
3. Power up your device and check it's online in the dashboard!

## CLI deploy

This is the traditional and more advanced approach for deploying applications to balena powered devices. Installing and setting up the balena CLI is definitely more involved than using the `Deploy with balena` button, but it allows for more flexibility and customization when choosing what and when to deploy.

For example, if you don't plan on using the Spotify integration, you can edit the `docker-compose.yml` file and remove the Spotify service before deploying the application.

### Provision your device

1. Sign up for or login to the [balenaCloud dashboard](https://dashboard.balena-cloud.com)
2. Create an application, selecting the correct device type.
3. Add a device to the application, enabling you to download the OS
4. Flash the downloaded OS to your SD card with [balenaEtcher](https://balena.io/etcher)
5. Power up your device and check it's online in the dashboard

### Deploy the application

- Install the [balena CLI tools](https://github.com/balena-io/balena-cli/blob/master/INSTALL.md)
- Login with `balena login`
- Clone the project and from the project directory run `balena push <appName>` where `<appName>` is the name you gave your balenaCloud application in the first step.

## Having trouble?

If you are running into issues getting your application running, please try the following:

1. Check the existing issues on GitHub.
2. Post in the Balena [forums](https://forums.balena.io/) for help from the Balena community.
3. Create a new GitHub issue
