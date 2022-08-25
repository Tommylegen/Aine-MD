let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0895-0505-4287]
│ •  [0895-1281-0601]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
