import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ MEDIA SOSSIAL ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.sig = 'https://instagram.com/stvrxiety'
global.tautanwa = 'https://wa.me/6282172824438'
global.sgh = 'https://github.com/Arief-zx' //github
global.sgc = 'https://chat.whatsapp.com/E2xVtHtkPxn1xmye1RGtRl'  //group whatsapp
global.sdc = '-' //discord
global.linkyt = 'https://youtube.com/@Rief_Kanaeru'
global.syt = 'https://youtube.com/@Rief_Kanaeru'
global.sfb = ''// facebook
global.snh = 'https://chat.whatsapp.com/E2xVtHtkPxn1xmye1RGtRl'
global.media = 'https://telegra.ph/file/4c41e3fa6c1e02a8d1e87.jpg'
global.wame = 'https://wa.me/6282172824438'
//⫹⫺ ╳╶┈ ⎝ NOOWNER,NOBOT,NAMAOWNER,NAMABOT  ⎞ ┈╾╴╳ ⫹⫺
global.owner = [['6282172824438', 'RiefBotz-MD', true]]
global.mods = []
global.prems = []
global.nomorbot = '6289654379726' //pasang no bot lo 
global.nomorown = '6282172824438' //pasang no own lo
global.nomorown1 = '6282172824438'
global.nomorown2 = '6282172824438'
global.nomorwa = '0'
global.nameown = 'Riefz'
global.gcname = 'Ryuzu'
global.author = 'Arief Westa'
global.namabot = 'RiefBotz-MD'
global.namebot = namabot
global.packname2 = namabot

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ OWNER INFO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.nameown1= 'Riefz'
global.nameown2 = 'Riefz'

/*============== STAFF ==============*/
//kosong
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ WM ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.readMore = readMore
global.wm = 'RiefBotz-MD|Riefz'
global.wm2 = 'RiefBotz-MD'
global.wm3 = `© ${namabot}`
global.packname = 'Created By Riefz'
global.watermark = namabot
global.titlebot = `RiefBotz-MD`

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ NAMA STICKER ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.stickpack = 'Created By Riefz'
global.stickauth = `RiefBotz-MD`

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TIME INFO  ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.botdate = `⫹⫺ 𝐃𝐀𝐓𝐄 : ${week} ${date}\n⫹⫺ 𝐓𝐈𝐌𝐄 : ${wktuwib}`
global.jb = `📆 TANGGAL : ${date}\n⌚ JAM ${wib}`
global.bottime = `T I M E : ${wktuwib}`
global.week = `${week} ${date}`
global.datee = `${week} ${date}`
global.islamic = `${dateIslamic}`
global.wibb = `${wktuwib}`

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ INTRO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.intro = 'https://telegra.ph/file/f0195189e8b56b050144d.jpg'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ MEDIA LINK ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.Linkgc = 'https://chat.whatsapp.com/E2xVtHtkPxn1xmye1RGtRl'
global.lynk = '-'
global.ig = 'https://instagram.com/stvrxiety'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ DONASI ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.pdana = '0895600555028'//pasang no lo sinih buat donasi 
global.povo = '-' 
global.pgopay = '-'
global.plinkaja = '-' //link aja
global.ppulsa = '082172824438' // Pulsa Telkom
global.ppulsa2 = '0895600555028' // Pulsa Tri
global.psaweria = '-'
global.donasikabul = 'Gadaa'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.ListHargaSewa = '├ 7 Hari IDR 6.000\n├ 20 Hari IDR 15.000'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.LyAtas1 = '☰ ━━━ ❨'
global.LyAtas2 = '❩ ━━┄┈ •⟅'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '┅═┅═❏ *DASHBOARD* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✎ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✎'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RESPOND ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.stiker_wait = '▰▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝!!'
global.wait = '▰▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝!!'
global.md = '_In progress, please wait..._'
global.eror = 'Mohon Maaf Server Kami Sedang Error!'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RESPOND GEME ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.benar = '𝙶𝚘𝚘𝚍 𝙹𝚘𝚋𝚋! ◕◡◕'
global.salah = '𝙽𝚘𝚝 𝙱𝚊𝚍! ◕◠◕'
global.dikit = "𝙳𝚒𝚔𝚒𝚝 𝙻𝚊𝚐𝚒,𝚂𝚎𝚖𝚊𝚗𝚐𝚊𝚝!!"

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RPG GAME ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.multiplier = 69 // The higher, The harder levelup 
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ WEBSITE APIKEY ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.zenzkey = 'b8040941f7'
global.lolkey = 'SGWN'
  //'292e8d36a318282908bd07f7' // PUNYA WAHID 357d3c85079c4e0818731e6b
// Cdgn Lolkey ed78c137a46873c5b8e5fe3b
global.botcahx = 'df09e048'
global.zahwazein = '60475cf54e5c'
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz',
  pasha : 'https://api.nataganz.com',
  reysekha : 'https://web-production-d795.up.railway.app/',
 zahwazein : 'https://api.zahwazein.xyz/',
 rey : 'https://web-production-d795.up.railway.app/',
 botcahx : 'https://api.tiodevhost.my.id/'
}
//⳹ NOTE !! EXAMPLE ➢ Name Api: 'website api'

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://ziy.herokuapp.com' : 'xZiyy',
  'https://api.nataganz.com' : 'Pasha'
}
//⳹ NOTE !! EXAMPLE ➢ 'https://WebsiteApi': 'Apikey'


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ OTHER ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ THUMBNAIL ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.fotonya1 = 'https://telegra.ph/file/2e8d2ef0926e848626a43.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/2e8d2ef0926e848626a43.jpg' //ini juga ganti 

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ Main Thumbnail ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.pp = fs.readFileSync('./media/thumb.jpg')
global.pepe = fs.readFileSync('./media/thumb.jpg')
global.fp = fs.readFileSync('./media/thumb.jpg')
global.thumb = fp
global.dbnya = `sessions/database.json`
global.sesinya = `sessions/QueensBotz -MD`
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.urlnya = "https://www.instagram.com/stvrxiety"
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '6282172824438'


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ JNGN DI UBAH ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})