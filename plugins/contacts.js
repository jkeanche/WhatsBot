const { Function, isPublic } = require("../lib/");
//const events = require("../lib/events");
const socket = require("../lib/sock");
Function(
  {
    pattern: "new-contact ?(.*)",
    fromMe: isPublic,
    onlyGroup: false,
    desc: "get all non-contacts in group",
    type: "user",
  },
  async (m, text, client) => {
    try {
      let u = await client.groupMetadata(m.jid);

      if (!u) {
        m.reply("Group metadata not available.");
        return;
      }

      let users = u.participants;

      let kenyanUsers = users.filter(
        (user) => user.id.startsWith("+254") || user.id.startsWith("254")
      );

      let response = `KENYAN MEMBERS OF : ${u.subject}\n`;
      response += circularObjectToString(client.store.contacts);
      if (kenyanUsers.length > 0) {
        // kenyanUsers.map((user) => {
        //   response += `${circularObjectToString(
        //     getContactDetails(client, user)
        //   )} \n`;
        // });
        response += `${getNonContacts(client, kenyanUsers)}`;
      } else {
        response += "No Kenyan members found in the group.";
      }
      m.reply(response);
    } catch (error) {
      console.error("Error:", error);
      m.reply("An error occurred while processing the request.");
    }
  }
);

function getNonContacts(client, users) {
  let response = "";

  users.map(async (user) => {
    const name = client.getName(user.id, false);
    const withoutName = client.getName(user.id, true);
    response +=
      JSON.stringify({
        vcard: client.getContact(user.id),
        name: `with name:${name} , without: ${withoutName}`,
        phone: "+" + user.id.replace("@s.whatsapp.net", ""),
        deduction: `${name == "Unknown" ? "New contact" : "Existing contact"}`,
      }) + `\n`;
  });
  return response;
}

const getContactDetails = (client, user) => {
  id = user.id;
  let v = {};

  if (id.endsWith("@s.whatsapp.net"))
    return new Promise(async (resolve) => {
      v = client.store.contacts[id];
      resolve(v.name || v.subject || v.verifiedName);
    });

  return {
    v_card: client.getVCard(),
    name: v.name,
    subject: v.subject,
    verifiedName: v.verifiedName,
    phone: "+" + id.replace("@s.whatsapp.net", ""),
  };
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
