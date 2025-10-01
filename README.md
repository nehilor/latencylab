# LatencyLab

LatencyLab is a cross-platform application built with Python, Electron, and Apache, designed for network latency testing and monitoring. The project aims to provide a reliable and extensible tool for developers, sysadmins, and researchers to analyze latency metrics in real-time.

## Features

- Network latency testing with configurable endpoints
- Real-time monitoring dashboard
- Cross-platform (Linux, macOS, Windows)
- Backend powered by Python + Apache
- Desktop interface built with Electron
- Dockerized environment for easy deployment
- Released under the MIT License

## Requirements

- [Python 3.9+](https://www.python.org/)
- [Node.js 20.19+ or 22.12+](https://nodejs.org/)
- [Apache HTTP Server](https://httpd.apache.org/)
- [Docker](https://www.docker.com/) (for database and deployment)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nehilor/latencylab.git
   cd latencylab
   ```

2. **Backend setup (Python + Apache)**
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Linux/Mac
   # venv\Scripts\activate   # On Windows
   pip install -r requirements.txt
   ```

3. **Frontend setup (Electron)**
   ```bash
   cd electron
   pnpm install
   pnpm run build
   ```

## Usage

**Start the backend:**
```bash
python app.py
```

**Launch the Electron app:**
```bash
cd electron
pnpm start
```