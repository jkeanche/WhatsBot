const { Function, isPublic } = require("../lib");
//const events = require("../lib/events");
const socket = require("../lib/sock");

const LESSONS = {
  python: {
    course: "Python",
    title: "Introduction to python",
    description: "Python Description",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  c: {
    course: "C",
    title: "Introduction structured Programming with C",
    description: "Python Description",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  pascal: {
    course: "Pascal",
    title: "Pascal",
    description: "Introduction to Structure Programming Using Pascal",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  c_plus: {
    course: "C++",
    title: "C++",
    description: "Introduction to C++ Programming",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  java: {
    course: "Java",
    title: "Java",
    description: "Introduction to Java Programming",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  java_mobile: {
    course: "Android (Java)",
    title: "Android Development with Java",
    description: "Java Description",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  kotlin: {
    course: "(Android) Kotlin",
    title: "Android Development with Kotlin",
    description: "Kotlin Description",
    fee: "KES 500 Per Lesson",
    lessons: "14",
    duration: {
      theory: "28 hours",
      practical: "56 hours",
    },
    course_outline: [
      "Introduction to Android Programming",
      "Kotlin basics",
      "Functions",
      "Classes & Objects",
      "Building your first Android App",
      "Layouts",
      "App Navigation",
      "Activity & Fragments",
      "App Architecture (UI layer)",
      "App Architecture (Permissions)",
      "Advanced Recyclerview",
      "Connecting to the Internet",
      "Repository Pattern",
      "App UI Design",
    ],
  },
  react: {
    course: "React",
    title: "React (Web)",
    description: "Java Description",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  react: {
    course: "Express JS",
    title: "API development using Express JS",
    description: "Java DescriptionExpress JS",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  php: {
    course: "PHP",
    title: "PHP",
    description: "Java Description",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  php: {
    course: "Laravel",
    title: "Introduction to Laravel framework",
    description: "Laravel Description",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  data_science: {
    course: "Data Science (Python)",
    title: "Data Science",
    description: "Introduction to Data Science Using Python",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  MQL4: {
    course: "MQL4",
    title: "MQL4 Expert Advisor Development",
    description: "MQL4 Description",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
  MQL5: {
    course: "MQL5",
    title: "MQL5 Expert Advisor Development",
    description: "MQL5 Description",
    fee: "KES 300 Per Lesson",
    duration: {
      theory: "21 hours",
      practical: "40 hours",
    },
    course_outline: {
      introduction: "Introduction to Android",
      structure: "Android Application Structure",
      emulator: "Emulator -Android Virtual devices",
      basic_ui: "Basic UI Design",
      preferences: "Preferences",
      menu: "Working with menu",
      intents: "Intents",
      ui: "UI Design -extra",
      styles: "Styles and themes",
      providers: "Content Providers",
      adb: "Android Debug Bridge (ADB)",
      link: "Linkfy",
      adapters: "Adapters and Widgets",
      notifications: "Notifications",
      custom: "Custom Components",
      threads: "Threads",
      advanced: "Advanced Concepts(Optional)",
    },
  },
};

const KEY_USER = "user";
const KEY_SELECTED_LANGUAGE = "laanguage";
const AVAILABILITY = "availability";
const LEVEL_RESPONSE = "level_response";

var currentLevel = 1;

const response = new Map();

Function(
  {
    pattern: "offer ?(.*)",
    fromMe: isPublic,
    onlyGroup: false,
    desc: "send and offer",
    type: "group",
  },
  async (m, text, client) => {
    try {
      let u = await client.groupMetadata(m.jid);

      if (!u) {
        m.reply("Group metadata not available.");
        return;
      }

      let users = u.participants;

      m.reply(makeMenu(client, m, "course"));
    } catch (error) {
      console.error("Error:", error);
      m.reply("An error occurred while processing the request.");
    }
  }
);

const makeMenu = (client, message, key) => {
  let msg = "OUR OFFERS:\n";
  let i = 1;
  const userId = message.mention[0] || message.reply_message?.sender;
  for (const lesson in LESSONS) {
    const value = `${LESSONS[lesson]}.${key}`;
    msg += `${i}. ${value} \n`;
    // msg += `${i}. ${lesson} \n`;
    i++;
  }
  msg += `Dear ${client.getName(
    userId
  )}, please note that our catalogue may be updated anytime without notice!\n`;
  // msg += `Please Note that our catalogue may be updated anytime without notice!\n`;
};

function circularObjectToString(obj) {
  let cache = [];
  let str = JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      cache.push(value);
    }
    return value;
  });
  cache = null; // reset the cache
  return str;
}
