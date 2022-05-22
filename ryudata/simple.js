const fs = require('fs')
const chalk = require('chalk')

//SILAHKAN EDIT SESUKA KALIAN

//SIMPLE MENU
exports.simple = (pushname, ucapanWaktu, namabot, prefix) => {
	return`
*🥢Halo Kak :${pushname}*
*⛏️Perfix : [.]*

*👦 OWNER MENU*
⤿ ${prefix}setmenu
⤿ ${prefix}join [link]
⤿ ${prefix}leave
⤿ ${prefix}self
⤿ ${prefix}public
⤿ ${prefix}setppbot
⤿ ${prefix}block @user
⤿ ${prefix}unblock @user 
⤿ ${prefix}bc
⤿ ${prefix}bcgc

*👥 GROUP MENU*
⤿ ${prefix}antilink
⤿ ${prefix}antiwame
⤿ ${prefix}antivirtex
⤿ ${prefix}nsfw
⤿ ${prefix}event
⤿ ${prefix}afk [alasan]
⤿ ${prefix}tagall
⤿ ${prefix}hidetag
⤿ ${prefix}linkgroup
⤿ ${prefix}revoke
⤿ ${prefix}ephemeral [option]
⤿ ${prefix}setppgc
⤿ ${prefix}setname [text]
⤿ ${prefix}group [option]
⤿ ${prefix}add @user
⤿ ${prefix}kick @user
⤿ ${prefix}promote @user
⤿ ${prefix}demote @user

*📥 DOWNLOAD MENU*
⤿ ${prefix}tiktok [url]
⤿ ${prefix}tiktokwm [url]
⤿ ${prefix}tiktoknowm [url]
⤿ ${prefix}tiktokaudio [url]
⤿ ${prefix}instagram [url]
⤿ ${prefix}twitter [url]
⤿ ${prefix}facebook [url]
⤿ ${prefix}ytmp4 [url]
⤿ ${prefix}ytmp3 [url]
⤿ ${prefix}play [judul]
⤿ ${prefix}ytsearch [judul]
⤿ ${prefix}gitclone

*🔎 SEARCH MENU*
⤿ ${prefix}pinterest [query]
⤿ ${prefix}pantun
⤿ ${prefix}google [query]
⤿ ${prefix}gimage [query]
⤿ ${prefix}kbbi [query]
⤿ ${prefix}igstalk [username]
⤿ ${prefix}ghstalk [username]
⤿ ${prefix}cerpen
⤿ ${prefix}cersex

*🏔️ RPG MENU*
⤿ ${prefix}profile
⤿ ${prefix}joinrpg
⤿ ${prefix}leaderboard
⤿ ${prefix}daily
⤿ ${prefix}monthly
⤿ ${prefix}gajian
⤿ ${prefix}judi
⤿ ${prefix}berburu
⤿ ${prefix}nebang
⤿ ${prefix}mancing
⤿ ${prefix}mining
⤿ ${prefix}adventure
⤿ ${prefix}transfer
⤿ ${prefix}kill
⤿ ${prefix}slot
⤿ ${prefix}buy
⤿ ${prefix}sell
⤿ ${prefix}heal
⤿ ${prefix}bansos

*📂 DATABASE MENU*
⤿ ${prefix}absen
⤿ ${prefix}hadir
⤿ ${prefix}tidakhadir
⤿ ${prefix}cekabsen
⤿ ${prefix}hapusabsen
⤿ ${prefix}setcmd [reply sticker/pesan]
⤿ ${prefix}delcmd [reply sticker/pesan]
⤿ ${prefix}listcmd
⤿ ${prefix}lockcmd
⤿ ${prefix}addmsg
⤿ ${prefix}getmsg
⤿ ${prefix}listmsg
⤿ ${prefix}delmsg

*🎑 TELEGRAM STICKER*
⤿ ${prefix}awoawo
⤿ ${prefix}benedict
⤿ ${prefix}chat
⤿ ${prefix}dbfly
⤿ ${prefix}dino_kuning
⤿ ${prefix}doge
⤿ ${prefix}gojosatoru
⤿ ${prefix}hope_boy
⤿ ${prefix}jisoo
⤿ ${prefix}kr_robot
⤿ ${prefix}kucing
⤿ ${prefix}lonte
⤿ ${prefix}manusia_lidi
⤿ ${prefix}menjamet
⤿ ${prefix}meow
⤿ ${prefix}nicholas
⤿ ${prefix}patrick
⤿ ${prefix}popoci
⤿ ${prefix}sponsbob
⤿ ${prefix}kawan_sponsbob
⤿ ${prefix}tyni

*ℹ️️ INFORMASI MENU*
⤿ ${prefix}infogempa
⤿ ${prefix}covid
⤿ ${prefix}faktaunik
⤿ ${prefix}ssweb

*✍️ NULIS MENU*
⤿ ${prefix}nulisbiasa
⤿ ${prefix}nuliskanan
⤿ ${prefix}nuliskiri
⤿ ${prefix}foliokanan
⤿ ${prefix}foliokiri

*👯‍♀️ ASUPAN MENU*
⤿ ${prefix}hijaber
⤿ ${prefix}cecan
⤿ ${prefix}bocil
⤿ ${prefix}ukhty
⤿ ${prefix}gheayubi
⤿ ${prefix}rikagusriani
⤿ ${prefix}santuy

*👧 CECAN MENU*
⤿ ${prefix}china
⤿ ${prefix}vietnam
⤿ ${prefix}thailand
⤿ ${prefix}indonesia
⤿ ${prefix}korea
⤿ ${prefix}japan
⤿ ${prefix}malaysia

*🎙️ VOICE CHANGER*
⤿ ${prefix}bass
⤿ ${prefix}blown
⤿ ${prefix}deep
⤿ ${prefix}earrape
⤿ ${prefix}fast
⤿ ${prefix}fat
⤿ ${prefix}nightcore
⤿ ${prefix}reverse
⤿ ${prefix}robot
⤿ ${prefix}slow
⤿ ${prefix}tupai

*📸 EPHOTO MENU*
⤿ ${prefix}3dnature
⤿ ${prefix}bevel
⤿ ${prefix}burnpaper
⤿ ${prefix}quotesgrass
⤿ ${prefix}stars
⤿ ${prefix}flaming
⤿ ${prefix}romance
⤿ ${prefix}gerbang
⤿ ${prefix}fur
⤿ ${prefix}funnycup

*🖼️ PHOTOOXY MENU*
⤿ ${prefix}3d-underwater  
⤿ ${prefix}3dtext-pig  
⤿ ${prefix}3dvalentine-cards  
⤿ ${prefix}anonymous-neon  
⤿ ${prefix}advanced-glow  
⤿ ${prefix}art-shader  
⤿ ${prefix}angels-wings 

*🎮 FUN MENU*
⤿ ${prefix}truth
⤿ ${prefix}dare
⤿ ${prefix}bagaimanakah [teks]
⤿ ${prefix}kapankah [teks]
⤿ ${prefix}dimanakah [teks]
⤿ ${prefix}suit [✌️/✊/✋]
⤿ ${prefix}aduayam [🐥/🐤🐓/🐣/🦃]
⤿ ${prefix}suitpvp [tag user]
⤿ ${prefix}ttt
⤿ ${prefix}delttt

*🎰 GAME MENU*
⤿ ${prefix}tebak lagu
⤿ ${prefix}tebak gambar
⤿ ${prefix}tebak kata
⤿ ${prefix}tebak kalimat
⤿ ${prefix}tebak lirik
⤿ ${prefix}tebak lontong
⤿ ${prefix}kuismath

*🎡 RANDOM MENU*
⤿ ${prefix}darkjokes
⤿ ${prefix}meme
⤿ ${prefix}quotes
⤿ ${prefix}quotes2
⤿ ${prefix}katabijak
⤿ ${prefix}katailham
⤿ ${prefix}fiersabersari
⤿ ${prefix}katasenja
⤿ ${prefix}wallgaming
⤿ ${prefix}wallpentol
⤿ ${prefix}wallcogan
⤿ ${prefix}wallcecan
⤿ ${prefix}wallestetik
⤿ ${prefix}wallislami
⤿ ${prefix}wallbkackpink
⤿ ${prefix}wallpaperanime

*⛩️ ANIME MENU*
⤿ ${prefix}quotesanime
⤿ ${prefix}wallpaper
⤿ ${prefix}waifu
⤿ ${prefix}loli
⤿ ${prefix}cry
⤿ ${prefix}kill
⤿ ${prefix}hug
⤿ ${prefix}pat
⤿ ${prefix}lick
⤿ ${prefix}kiss
⤿ ${prefix}bite
⤿ ${prefix}yeet
⤿ ${prefix}neko
⤿ ${prefix}bully
⤿ ${prefix}bonk
⤿ ${prefix}wink
⤿ ${prefix}poke
⤿ ${prefix}nom
⤿ ${prefix}slap
⤿ ${prefix}smile
⤿ ${prefix}wave
⤿ ${prefix}awoo
⤿ ${prefix}blush
⤿ ${prefix}smug
⤿ ${prefix}glomp
⤿ ${prefix}happy
⤿ ${prefix}dance
⤿ ${prefix}cringe
⤿ ${prefix}cuddle
⤿ ${prefix}highfive
⤿ ${prefix}shinobu
⤿ ${prefix}megumin
⤿ ${prefix}handhold

*🔞 NSFW MENU*
⤿ ${prefix}ahegeo
⤿ ${prefix}ass
⤿ ${prefix}bdsm
⤿ ${prefix}blowjob
⤿ ${prefix}cuckold 
⤿ ${prefix}cum 
⤿ ${prefix}ero
⤿ ${prefix}femdom
⤿ ${prefix}foot
⤿ ${prefix}gangbang
⤿ ${prefix}glasses
⤿ ${prefix}hentai
⤿ ${prefix}ahy
⤿ ${prefix}mstb
⤿ ${prefix}neko
⤿ ${prefix}orgy
⤿ ${prefix}panties
⤿ ${prefix}pussy
⤿ ${prefix}yuri
⤿ ${prefix}zettai

*🎨 MAKER MENU*
⤿ ${prefix}toimage
⤿ ${prefix}smeme
⤿ ${prefix}smeme2
⤿ ${prefix}sticker
⤿ ${prefix}tovideo
⤿ ${prefix}togif
⤿ ${prefix}tourl
⤿ ${prefix}emojimix 😎+😂
⤿ ${prefix}readmore
⤿ ${prefix}ttp [teks]
⤿ ${prefix}semoji [emoji]

*👨‍🎨 TEXTPRO MENU*
⤿ ${prefix}serti1 [teks]
⤿ ${prefix}serti2 [teks]
⤿ ${prefix}serti3 [teks]
⤿ ${prefix}blackpink [teks]
⤿ ${prefix}neon [teks]
⤿ ${prefix}magma [teks]
⤿ ${prefix}3dstone [teks]
⤿ ${prefix}halloween [teks]
⤿ ${prefix}horror [teks]
⤿ ${prefix}larva [teks]
⤿ ${prefix}toxic [teks]
⤿ ${prefix}marvel [teks|teks]
⤿ ${prefix}potter [teks]
⤿ ${prefix}pornhub [teks|teks]
⤿ ${prefix}tahta [teks]

*☕ OTHER MENU*
⤿ ${prefix}simi [teks]
⤿ ${prefix}ping
⤿ ${prefix}owner
⤿ ${prefix}creator
⤿ ${prefix}menu / ${prefix}help / ${prefix}?
⤿ ${prefix}delete
⤿ ${prefix}sc
⤿ ${prefix}tqto
⤿ ${prefix}donasi
⤿ ${prefix}rules
⤿ ${prefix}sewabot
⤿ ${prefix}listgc
⤿ ${prefix}liston
⤿ ${prefix}liston
⤿ ${prefix}report
⤿ ${prefix}req

*🌱 THANKS TO*
- Gorge-Md
- Mona-Md
- Ryuuka
`
}

//LIST MENU
exports.list = (pushname, ucapanWaktu, namabot) => {
	return`*Halo Kak ${pushname} 👋*
*${ucapanWaktu}*

*Berikut List Menu Yang Tersedia Di ${global.namabot}*

*Jika Menemukan Bug Harap Dimaklumi Dan Laporkan Kepada*
*Owner Atau Creator Agar Segera Di Fix 😎*

*Terima Kasih 🙏*
`
}

//MENU OWNER
exports.sowner = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👦 OWNER MENU*
⤿ ${prefix}setmenu
⤿ ${prefix}join [link]
⤿ ${prefix}leave
⤿ ${prefix}self
⤿ ${prefix}public
⤿ ${prefix}setppbot
⤿ ${prefix}block @user
⤿ ${prefix}unblock @user
⤿ ${prefix}bc
⤿ ${prefix}bcgc
`
}

//MENU GRUP
exports.sgrup = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👥 GROUP MENU*
⤿ ${prefix}antilink
⤿ ${prefix}antiwame
⤿ ${prefix}antivirtex
⤿ ${prefix}nsfw
⤿ ${prefix}event
⤿ ${prefix}afk [alasan]
⤿ ${prefix}tagall
⤿ ${prefix}hidetag
⤿ ${prefix}linkgroup
⤿ ${prefix}revoke
⤿ ${prefix}ephemeral [option]
⤿ ${prefix}setppgc
⤿ ${prefix}setname [text]
⤿ ${prefix}group [option]
⤿ ${prefix}add @user
⤿ ${prefix}kick @user
⤿ ${prefix}promote @user
⤿ ${prefix}demote @user
`
}

//MENU DOWNLOAD
exports.sdown = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*📥 DOWNLOAD MENU*
⤿ ${prefix}tiktok [url]
⤿ ${prefix}tiktokwm [url]
⤿ ${prefix}tiktoknowm [url]
⤿ ${prefix}tiktokaudio [url]
⤿ ${prefix}instagram [url]
⤿ ${prefix}twitter [url]
⤿ ${prefix}facebook [url]
⤿ ${prefix}ytmp4 [url]
⤿ ${prefix}ytmp3 [url]
⤿ ${prefix}play [judul]
⤿ ${prefix}ytsearch [judul]
⤿ ${prefix}gitclone
`
}

//MENU SEARCH
exports.ssearch = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🔎 SEARCH MENU*
⤿ ${prefix}pinterest [query]
⤿ ${prefix}pantun
⤿ ${prefix}google [query]
⤿ ${prefix}gimage [query]
⤿ ${prefix}kbbi [query]
⤿ ${prefix}darkjokes
⤿ ${prefix}igstalk [username]
⤿ ${prefix}ghstalk [username]
⤿ ${prefix}cerpen
⤿ ${prefix}cersex
`
}

exports.srpg = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🏔️ RPG MENU*
⤿ ${prefix}profile
⤿ ${prefix}joinrpg
⤿ ${prefix}leaderboard
⤿ ${prefix}daily
⤿ ${prefix}monthly
⤿ ${prefix}gajian
⤿ ${prefix}judi
⤿ ${prefix}berburu
⤿ ${prefix}nebang
⤿ ${prefix}mancing
⤿ ${prefix}mining
⤿ ${prefix}adventure
⤿ ${prefix}transfer
⤿ ${prefix}kill
⤿ ${prefix}slot
⤿ ${prefix}buy
⤿ ${prefix}sell
⤿ ${prefix}heal
⤿ ${prefix}bansos
`
}

//MENU DATABASE
exports.sdatabase = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*📂 DATABASE MENU*
⤿ ${prefix}absen
⤿ ${prefix}hadir
⤿ ${prefix}tidakhadir
⤿ ${prefix}cekabsen
⤿ ${prefix}hapusabsen
⤿ ${prefix}setcmd [reply sticker/pesan]
⤿ ${prefix}delcmd [reply sticker/pesan]
⤿ ${prefix}listcmd
⤿ ${prefix}lockcmd
⤿ ${prefix}addmsg
⤿ ${prefix}getmsg
⤿ ${prefix}listmsg
⤿ ${prefix}delmsg
`
}

//MENU INFORMASI
exports.stele = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎑 TELEGRAM STICKER*
⤿ ${prefix}awoawo
⤿ ${prefix}benedict
⤿ ${prefix}chat
⤿ ${prefix}dbfly
⤿ ${prefix}dino_kuning
⤿ ${prefix}doge
⤿ ${prefix}gojosatoru
⤿ ${prefix}hope_boy
⤿ ${prefix}jisoo
⤿ ${prefix}kr_robot
⤿ ${prefix}kucing
⤿ ${prefix}lonte
⤿ ${prefix}manusia_lidi
⤿ ${prefix}menjamet
⤿ ${prefix}meow
⤿ ${prefix}nicholas
⤿ ${prefix}patrick
⤿ ${prefix}popoci
⤿ ${prefix}sponsbob
⤿ ${prefix}kawan_sponsbob
⤿ ${prefix}tyni
`
}

//MENU INFORMASI
exports.sinfo = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*ℹ️️ INFORMASI MENU*
⤿ ${prefix}infogempa
⤿ ${prefix}covid
⤿ ${prefix}faktaunik
⤿ ${prefix}ssweb
`
}

//MENU NULIS
exports.snulis = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*✍️ NULIS MENU*
⤿ ${prefix}nulisbiasa
⤿ ${prefix}nuliskanan
⤿ ${prefix}nuliskiri
⤿ ${prefix}foliokanan
⤿ ${prefix}foliokiri
`
}

//MENU ASUPAN
exports.sasupan = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👯‍♀️ ASUPAN MENU*
⤿ ${prefix}hijaber
⤿ ${prefix}cecan
⤿ ${prefix}bocil
⤿ ${prefix}ukhty
⤿ ${prefix}gheayubi
⤿ ${prefix}rikagusriani
⤿ ${prefix}santuy
`
}

//MENU CECAN
exports.scecan = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👧 CECAN MENU*
⤿ ${prefix}china
⤿ ${prefix}vietnam
⤿ ${prefix}thailand
⤿ ${prefix}indonesia
⤿ ${prefix}korea
⤿ ${prefix}japan
⤿ ${prefix}malaysia
`
}

//MENU VOICE
exports.svoice = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎙️ VOICE CHANGER*
⤿ ${prefix}bass
⤿ ${prefix}blown
⤿ ${prefix}deep
⤿ ${prefix}earrape
⤿ ${prefix}fast
⤿ ${prefix}fat
⤿ ${prefix}nightcore
⤿ ${prefix}reverse
⤿ ${prefix}robot
⤿ ${prefix}slow
⤿ ${prefix}tupai
`
}

//MENU EPHOTO
exports.spoto = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*📸 EPHOTO MENU*
⤿ ${prefix}3dnature
⤿ ${prefix}bevel
⤿ ${prefix}burnpaper
⤿ ${prefix}quotesgrass
⤿ ${prefix}stars
⤿ ${prefix}flaming
⤿ ${prefix}romance
⤿ ${prefix}gerbang
⤿ ${prefix}fur
⤿ ${prefix}funnycup
`
}

//MENU PHOTOOXY
exports.sphoto = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🖼️ PHOTOOXY MENU*
⤿ ${prefix}3d-underwater  
⤿ ${prefix}3dtext-pig  
⤿ ${prefix}3dvalentine-cards  
⤿ ${prefix}anonymous-neon  
⤿ ${prefix}advanced-glow  
⤿ ${prefix}art-shader  
⤿ ${prefix}angels-wings 
`
}

//CASE FUN MENU
exports.sfun = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎮 FUN MENU*
⤿ ${prefix}truth
⤿ ${prefix}dare
⤿ ${prefix}bagaimanakah
⤿ ${prefix}kapankah
⤿ ${prefix}dimanakah
⤿ ${prefix}suit [✌️/✊/✋]
⤿ ${prefix}aduayam [🐤/🐓/🐥/🐣/🦃]
⤿ ${prefix}suitpvp [tag user]
⤿ ${prefix}ttt
⤿ ${prefix}delttt
`
}

//GAME MENU
exports.sgame = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎰 GAME MENU*
⤿ ${prefix}tebak lagu
⤿ ${prefix}tebak gambar
⤿ ${prefix}tebak kata
⤿ ${prefix}tebak kalimat
⤿ ${prefix}tebak lirik
⤿ ${prefix}tebak lontong
⤿ ${prefix}kuismath
`
}

//GAME MENU
exports.srandom = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎡 RANDOM MENU*
⤿ ${prefix}darkjokes
⤿ ${prefix}meme
⤿ ${prefix}quotes
⤿ ${prefix}quotes2
⤿ ${prefix}katabijak
⤿ ${prefix}katailham
⤿ ${prefix}fiersabersari
⤿ ${prefix}katasenja
⤿ ${prefix}wallgaming
⤿ ${prefix}wallpentol
⤿ ${prefix}wallcogan
⤿ ${prefix}wallcecan
⤿ ${prefix}wallestetik
⤿ ${prefix}wallislami
⤿ ${prefix}wallbkackpink
⤿ ${prefix}wallpaperanime
`
}

//MENU ANIME
exports.sanime = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*⛩️ ANIME MENU*
⤿ ${prefix}quotesanime
⤿ ${prefix}waifu
⤿ ${prefix}loli
⤿ ${prefix}cry
⤿ ${prefix}kill
⤿ ${prefix}hug
⤿ ${prefix}pat
⤿ ${prefix}lick
⤿ ${prefix}kiss
⤿ ${prefix}bite
⤿ ${prefix}yeet
⤿ ${prefix}neko
⤿ ${prefix}bully
⤿ ${prefix}bonk
⤿ ${prefix}wink
⤿ ${prefix}poke
⤿ ${prefix}nom
⤿ ${prefix}slap
⤿ ${prefix}smile
⤿ ${prefix}wave
⤿ ${prefix}awoo
⤿ ${prefix}blush
⤿ ${prefix}smug
⤿ ${prefix}glomp
⤿ ${prefix}happy
⤿ ${prefix}dance
⤿ ${prefix}cringe
⤿ ${prefix}cuddle
⤿ ${prefix}highfive
⤿ ${prefix}shinobu
⤿ ${prefix}megumin
⤿ ${prefix}handhold
`
}

//NSFW MENU
exports.snsfw = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🔞 NSFW MENU*
⤿ ${prefix}ahegeo
⤿ ${prefix}ass
⤿ ${prefix}bdsm
⤿ ${prefix}blowjob
⤿ ${prefix}cuckold 
⤿ ${prefix}cum 
⤿ ${prefix}ero
⤿ ${prefix}femdom
⤿ ${prefix}foot
⤿ ${prefix}gangbang
⤿ ${prefix}glasses
⤿ ${prefix}hentai
⤿ ${prefix}ahy
⤿ ${prefix}mstb
⤿ ${prefix}neko
⤿ ${prefix}orgy
⤿ ${prefix}panties
⤿ ${prefix}pussy
⤿ ${prefix}yuri
⤿ ${prefix}zettai
`
}

//MAKER MENU
exports.smaker = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎨 MAKER MENU*
⤿ ${prefix}toimage
⤿ ${prefix}smeme
⤿ ${prefix}smeme2
⤿ ${prefix}sticker
⤿ ${prefix}tovideo
⤿ ${prefix}togif
⤿ ${prefix}tourl
⤿ ${prefix}emojimix 😎+😂
⤿ ${prefix}readmore
⤿ ${prefix}ttp [teks]
⤿ ${prefix}semoji [emoji]
`
}

//TEXTPRO MENU
exports.stextpro = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👨‍🎨 TEXTPRO MENU*
⤿ ${prefix}serti1 [teks]
⤿ ${prefix}serti2 [teks]
⤿ ${prefix}serti3 [teks]
⤿ ${prefix}blackpink [teks]
⤿ ${prefix}neon [teks]
⤿ ${prefix}magma [teks]
⤿ ${prefix}3dstone [teks]
⤿ ${prefix}halloween [teks]
⤿ ${prefix}horror [teks]
⤿ ${prefix}larva [teks]
⤿ ${prefix}toxic [teks]
⤿ ${prefix}marvel [teks|teks]
⤿ ${prefix}potter [teks]
⤿ ${prefix}pornhub [teks|teks]
⤿ ${prefix}tahta [teks]
`
}

//OTHER MENU
exports.sother = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*☕ OTHER MENU*
⤿ ${prefix}simi [teks]
⤿ ${prefix}ping
⤿ ${prefix}owner
⤿ ${prefix}creator
⤿ ${prefix}menu / ${prefix}help / ${prefix}?
⤿ ${prefix}delete
⤿ ${prefix}sc
⤿ ${prefix}tqto
⤿ ${prefix}donasi
⤿ ${prefix}rules
⤿ ${prefix}sewabot
⤿ ${prefix}listgc
⤿ ${prefix}liston
⤿ ${prefix}liston
⤿ ${prefix}report
⤿ ${prefix}req
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
