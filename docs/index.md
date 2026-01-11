<meta name="google-site-verification" content="rlOSHB1UUYku_RvEswiF5NisDyJucoH4_tcMIMbTQK4" />
# APN Changer API for MSM8916 Modems

**APN Auto-Updater for Qualcomm 4G LTE USB Modem Dongles**

This project is available on GitHub: [APN-Changer-API-for-MSM8916-Modems](https://github.com/karimaswan22/APN-Changer-API-for-MSM8916-Modems). It provides a simple JavaScript automation script, originally packaged as a Chrome extension, to update the APN of certain low-cost 4G LTE modem/router sticks automatically.

---

## What It Does

The [APN-Changer-API-for-MSM8916-Modems](https://github.com/karimaswan22/APN-Changer-API-for-MSM8916-Modems) project performs the following steps:

1. Sends a login request to `http://192.168.100.1/api/json` with `fid: "login"`.
2. Retrieves a session token from the modem.
3. Sends an APN update request with a **random 5-letter APN value** using `fid: "setApn"`.

This allows automatic APN updates without manual intervention.

---

## Supported Modem Models

The script supports modems based on Qualcomm MSM8916/MDM9200 chipsets:

- **Model:** MDM9K-U-CIGO-7.3.9-4M (or clones)
- **Manufacturer:** Hilan Technology Co., Ltd (Shenzhen, China)
- **Common marketplace names:**
  - “4G LTE WiFi Hotspot USB Dongle”
  - “4G LTE WiFi Modem”
  - “4G UFI”
  - “3-in-1 USB Modem Router”
- **Internal SoC:** Qualcomm MDM9200 or MSM8916
- **MAC OUI Prefix:** 38:1C:23 (Hilan Technology)

These modems typically expose:

- Admin UI at `http://192.168.100.1`
- Web API at `/api/json`
- Default login: `admin / admin`
- WiFi SSID: `4G-UFI-XXX`
- Default password: `1234567890`

All of these details are documented in [APN-Changer-API-for-MSM8916-Modems](https://github.com/karimaswan22/APN-Changer-API-for-MSM8916-Modems).

---

## How To Use

This tool is packaged as a **Chrome extension** that listens for a keyboard shortcut:

**Trigger Shortcut:** Type `pp`  

Anywhere on a webpage, typing `pp` quickly will:

1. Trigger the extension’s background script.
2. Automatically log into the modem at `http://192.168.100.1`.
3. Retrieve a session token.
4. Send a request to change the APN with a new randomly generated 5-letter string.

---

## Setup Steps

1. **Clone or download the repository:**

```bash
git clone https://github.com/karimaswan22/APN-Changer-API-for-MSM8916-Modems.git
Open Chrome Extensions:

arduino
Copy code
chrome://extensions
Enable Developer Mode.

Load the unpacked extension: Select the project folder.

Use the shortcut: Go to any webpage and type pp. The APN will be updated automatically.

For more details, visit the GitHub repo: APN-Changer-API-for-MSM8916-Modems.

Code Example
The main function logs in and sets a new APN with a random 5-letter string:

javascript
Copy code
// Example from APN-Changer-API-for-MSM8916-Modems
async function loginAndSetApn() {
  // Sends login request
  // Retrieves session token
  // Sends APN update request with random 5-letter string
}
