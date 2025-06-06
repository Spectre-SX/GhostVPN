# 👻 GhostVPN – WireGuard-Based Lightweight VPN

**GhostVPN** is a self-hosted, modern VPN service built on top of **WireGuard**. It is designed to route all device traffic (browser, apps, games, etc.) securely through a private server. With blazing-fast performance, strong encryption, and ultra-low resource usage, GhostVPN is a perfect fit for privacy-focused individuals and small groups.

---

## 🌐 Project Goal

GhostVPN aims to offer a simple, scalable VPN solution that:

- Routes **all device traffic** through a secure tunnel
- Works with **any platform** (Windows, macOS, Linux, iOS, Android)
- Runs on a **minimal VPS** while supporting up to hundreds of users
- Requires **no client software** (just import `.conf` or scan a QR code)
- Prioritizes **privacy, speed, and simplicity**

---

## 📦 Server Resources

| Resource      | Value                  | Notes                                                 |
|---------------|------------------------|--------------------------------------------------------|
| **RAM**       | 12 GB                  | Easily supports 500+ clients (1–10MB RAM per user)     |
| **vCPUs**     | 2 OCPUs                | Handles encryption/decryption for 100–200 active users |
| **Storage**   | 100 GB                 | Enough for storing repo files.                         |
| **Bandwidth** | 5 TB / month           | Primary usage limiter; scales based on client usage    |
| **OS**        | Ubuntu 22.04 (or newer) | Lean and WireGuard-friendly                            |

---

## 📊 Bandwidth Estimation (PER SERVER)

| Usage Type               | Per User / Month | Max Users on 5TB Cap |
|--------------------------|------------------|-----------------------|
| Light (web, chat, email) | ~5–15 GB         | 300–1000 users        |
| Medium (YouTube, socials)| ~25–50 GB        | 100–200 users         |
| Heavy (streaming, torrent)| 100–200 GB      | 25–50 users           |

> ⚠️ Actual performance depends on usage patterns and simultaneous connections.

---

## 🔐 WireGuard Technology

GhostVPN uses WireGuard for its core tunnel layer:

- **Protocol:** UDP-based, kernel-level for high performance  
- **Encryption:** ChaCha20 (data), Poly1305 (auth), Curve25519 (key exchange)  
- **Authentication:** Public/private keypair per client  
- **DNS Leak Protection:** Optional and configurable  
- **Routing Mode:** Full tunnel (default)

---

## ✅ Features

- Fast, low-latency VPN with minimal CPU/memory usage  
- Firewall to protect user data and connections
- Fully self-hosted — no 3rd party control  
- Works on **Windows**, **macOS**, **Linux**, **Android**, **iOS**, and **routers**  
- Easy `.conf` or QR code config  
- No logs by default (privacy-focused)

---

## ⚙️ System Requirements (Server-Side)

- Ubuntu 20.04+ or Debian-based distro  
- Root access (for kernel modules and IP forwarding)  
- Open UDP port (default: `51820`)  
- Optional firewall rules (UFW/iptables)

---

## 📲 Client Compatibility

GhostVPN supports all platforms with native WireGuard apps:

- ✅ Windows (official WireGuard client)
- ✅ macOS (WireGuard or Tunnelblick)
- ✅ Linux (CLI or GUI like NetworkManager)
- ✅ iOS / Android (official mobile apps)
- ✅ Routers (OpenWRT, pfSense, etc.)

---

## 🧱 Expansion Ideas

- Add a web-based user panel (e.g., wg-dashboard)
- Rate limit or cap data per user
- Deploy multiple GhostVPN nodes (multi-country)
- Build a desktop/mobile toggle app (e.g., GhostVPN Manager)
- Integrate 2FA or invite-only user access

---

## 🌍 Server Locations

- Europe (Amsterdam, Netherlands)
- North America (Ashburn, Virginia, America)

---

## 🔚 Summary

GhostVPN is a modern, efficient VPN solution for individuals, devs, and small teams who want speed, privacy, and control. It's optimized for self-hosting on low-cost VPS instances and scales comfortably to support dozens or even hundreds of users — depending on usage.

---

