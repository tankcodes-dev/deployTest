# Cloud Instance Test Repository

This repository is used as a **testing and validation workspace** whenever a new cloud instance (VM, server, or container host) is created.

Its purpose is to quickly verify that:
- The instance is reachable
- Development tools are installed correctly
- Networking, permissions, and runtimes work as expected
- Basic workflows (git, build, run, deploy) function properly

---

## Purpose

When spinning up a fresh cloud instance, this repository helps to:

- Confirm SSH access and git authentication
- Validate language runtimes (e.g., Python, Node.js, Java, etc.)
- Test package managers and system dependencies
- Verify environment variables and secrets
- Run simple scripts or smoke tests
- Serve as a sandbox before deploying real workloads

This repo is **not meant for production code**.

---

## Typical Usage

1. **Create a new cloud instance**
   - VM / Droplet / EC2 / GCE / Azure VM / etc.

2. **Clone this repository**
   ```bash
   git clone https://github.com/tankcodes-dev/deployTest.git
   cd deployTest
