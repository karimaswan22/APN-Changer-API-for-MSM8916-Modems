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

You can use this as a Chrome extension or extract the logic as a standalone script (browser or Node.js). Basic usage:

```js
// This function logs in and sets a new APN with a random 5-letter name
async function loginAndSetApn() { ... }
