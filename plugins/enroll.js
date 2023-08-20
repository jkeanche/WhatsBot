const { Function, isPublic } = require("../lib");
//const events = require("../lib/events");
const socket = require("../lib/sock");

const LESSONS = {
  python: "Python",
  c: "C Programming",
  pascal: "Pascal",
  c_plus: "C++",
  java: "Java SE (Desktop)",
  java_mobile: "Android Development with Java",
  kotlin: "Kotlin (Android)",
  react: "React (Web)",
  php: "PHP",
  sql: "SQL",
  php: "HTML & CSS",
  MQL4: "Meta Quote Langauge 4",
  MQL5: "Meta Quote Langauge 5",
};

const KEY_USER = "user";
const KEY_SELECTED_LANGUAGE = "language";
const AVAILABILITY = "availability";
const LEVEL_RESPONSE = "level_response";

var currentLevel = 1;

const response = new Map();

Function(
  {
    pattern: "enrol ?(.*)",
    fromMe: isPublic,
    onlyGroup: false,
    desc: "List course catalogue",
    type: "user",
  },
  async (m, text, client) => {
    try {
      let u = await client.groupMetadata(m.jid);
      if (!u) {
        m.reply("Group metadata not available.");
        return;
      }
      let users = u.participants; // for later use
      m.reply(showMenu(m));
    } catch (error) {
      console.error("Error:", error);
      m.reply("An error occurred while processing the request.");
    }
  }
);

const showModes = (client, m) => {
  let menu = `Here is our course catalogue:\n${makeMenu(LESSONS)}`;
  m.reply(menu);
};

const showStartDate = (client, m) => {
  let menu = `Here is our course catalogue:\n${makeMenu(LESSONS)}`;
  menu += `Reply with OK/YES to confirm\n`;
  m.reply(menu);
};

const echoConfirm = (client, m) => {
  let menu = `Here is your selected course:\n${showSelected()}`;
  m.reply(menu);
};

const enrol = (client, m, user) => {
  // send youself enrolment
  // response;
  let menu = `Dear ${client.getName(
    user.id
  )}, your enrolment request has been received. We're reaching you back for further prcessing as soon as possible.
   Thank you!`;
  menu += `Reply with OK/YES to confirm\n`;
  m.reply(menu);

  // send user message
};

const showSelected = () => {};

const makeMenu = (client, m, menuObj) => {
  let msg = "";
  let i = 1;
  menuObj.forEach((k, v) => {
    msg += `${i}. ${v} \n`;
    i++;
  });
  msg += `Dear ${client.getName(
    m
  )}, please note that our catalogue may be updated anytime without notice!\n`;
};
