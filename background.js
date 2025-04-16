chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'triggerApnUpdate') {
      loginAndSetApn();
    }
  });
  async function loginAndSetApn() {
    const routerUrl = "http://192.168.100.1/api/json";
  
    // Generate random 5-letter APN name
    function getRandomLetters(length = 5) {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += letters[Math.floor(Math.random() * letters.length)];
      }
      return result;
    }
  
    const randomApnName = getRandomLetters();
    console.log("Generated APN name:", randomApnName);
  
    try {
      // Step 1: Login
      const loginResponse = await fetch(routerUrl, {
        method: "POST",
        headers: {
          "accept": "application/json, text/plain, */*",
          "content-type": "application/json;charset=UTF-8"
        },
        referrer: "http://192.168.100.1/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: JSON.stringify({
          fid: "login",
          username: "",
          password: "admin",
          sessionId: ""
        })
      });
  
      const loginData = await loginResponse.json();
      if (loginData.reply !== "ok" || !loginData.session) {
        console.error("Login failed:", loginData);
        return;
      }
  
      const sessionId = loginData.session;
      console.log("Logged in. Session ID:", sessionId);
  
      // Step 2: Set APN with random name
      const setApnResponse = await fetch(routerUrl, {
        method: "POST",
        headers: {
          "accept": "application/json, text/plain, */*",
          "authorization": sessionId,
          "content-type": "application/json;charset=UTF-8"
        },
        referrer: "http://192.168.100.1/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: JSON.stringify({
          fid: "setApn",
          fields: {
            pdpType: "IP",
            authtype: -1,
            configName: "",
            currentConfig: "",
            apnPort: "",
            mcc: "604",
            currentApn: randomApnName,
            apnPassword: "",
            id: 3544,
            apnProxy: "",
            apnMode: "auto",
            mnc: "02",
            apnUser: "",
            apn: randomApnName,
            apnConfigs: [
              { id: 3544, name: "" },
              { id: 3545, name: "" }
            ],
            selectId: 3544
          },
          sessionId: sessionId
        })
      });
  
      const setApnData = await setApnResponse.json();
      console.log("APN Set Response:", setApnData);
  
    } catch (err) {
      console.error("Error during APN update:", err);
    }
  }
  