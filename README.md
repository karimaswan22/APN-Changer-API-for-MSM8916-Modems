# APN Auto-Updater for Qualcomm 4G LTE USB Modem Dongles

This is a simple JavaScript-based automation script (originally used in a Chrome extension) to update the APN of certain low-cost 4G LTE modem/router sticks.

## What It Does
- Sends a login request to `http://192.168.100.1/api/json` with `fid: "login"`
- Retrieves a session token
- Sends an APN update request with a random 5-letter APN value using `fid: "setApn"`

## Supported Modem Model

- **Model:** MDM9K-U-CIGO-7.3.9-4M (or clones)
- **Manufacturer:** Hilan Technology Co., Ltd (Shenzhen, China)
- **Common names on marketplaces:**  
  - “4G LTE WiFi Hotspot USB Dongle”  
  - “4G LTE WiFi Modem”  
  - “4G UFI”  
  - “3-in-1 USB Modem Router”  
- **Internal SoC:** Qualcomm MDM9200 or MSM8916
- **MAC OUI prefix:** 38:1C:23 (Hilan Technology)

These modems typically expose:
- Admin UI at `http://192.168.100.1`
- Web API at `/api/json`
- Default login: `admin` / `admin`
- WiFi SSID: `4G-UFI-XXX`
- Password: `1234567890`

## How To Use

This tool is packaged as a Chrome extension that listens for a keyboard shortcut:

### 🔤 Trigger: Type `pp`
Anywhere on a webpage, simply type the letters `pp` quickly. This will:

1. Trigger the extension's background script
2. Automatically log into the modem at `http://192.168.100.1`
3. Retrieve a session token
4. Send a request to change the APN with a new randomly generated 5-letter string

### 💻 Setup Steps:
1. Clone or download this repo
2. Open `chrome://extensions` in your browser
3. Enable **Developer Mode**
4. Click **“Load unpacked”** and select the project folder
5. Go to any webpage and type `pp` — it will send the update to the modem instantly

---

Let me know if you want to support additional shortcuts, show a success popup, or make the APN configurable via popup or settings page.

```js
// This function logs in and sets a new APN with a random 5-letter name
async function loginAndSetApn() { ... }
