let handler = async (m, { conn }) => {
	//-----PRICE
// List Harga
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'

const snya =`
╭┄┄┄┄┄┄〖 𝐒𝐞𝐰𝐚 〗╌╌╌╌╌╌⊶
┊⌬ 𝚂𝚎𝚠𝚊 𝙷𝚎𝚖𝚊𝚝: ${sh}k/Group ( 7 Hari )
┊⌬ 𝚂𝚎𝚠𝚊 𝙽𝚘𝚛𝚖𝚊𝚕: ${sn}k/Group ( 20 Hari )
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄⊶
《 ${bottime} 》
╭┄┄┄┄┄┄〖 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 〗╌╌╌╌╌╌⊶
┊⌬ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝙷𝚎𝚖𝚊𝚝: ${ph}k ( 7 Hari )
┊⌬ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝙽𝚘𝚛𝚖𝚊𝚕: ${pn}k ( 20 Hari )
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄⊶

⫹ ⛾ 𝐏𝐚𝐲𝐦𝐞𝐧𝐭𝐬 ⛾ ⫺
☘ 𝙿𝚞𝚕𝚜𝚊 𝚃𝚎𝚕𝚔𝚘𝚖𝚜𝚎𝚕: [ 082172824438 ]
☘ 𝙿𝚞𝚕𝚜𝚊 𝙸𝚗𝚍𝚘𝚜𝚊𝚝: [ - ]
☘ 𝙿𝚞𝚕𝚜𝚊 𝚃𝚛𝚒: [ 0895600555028 ]
☘ 𝙳𝚊𝚗𝚊: [ 0895600555028 ]
☘ 𝙾𝚟𝚘: [ - ]
☘ 𝙶𝚘𝚙𝚊𝚢: [ - ]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌

${botdate}`

/*const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* PERMANENT • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: snya,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fpayment})*/
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
await conn.sendButton(m.chat, bottime, snya, fp, [['Owner', '.leon'], ['Donasi', '.donasi'], ['Menu', '.menu']], m)

}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler