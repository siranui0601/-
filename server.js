// Discord bot implements：${message.author.username}
const discord = require('discord.js');
const client = new discord.Client();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
global.db = low(adapter);
global.db.defaults({
    guild: [],
    user: []
}).write();
global.guild = () => global.db.get('guild');
global.user = () => global.db.get('user');
global.waitInput = [];
const fetch = require("node-fetch");
const API_KEY = process.env.API_KEY

function dateFormat(date) {
    const year = date.getFullYear();
    const month = ('0' + date.getMonth() + 1).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hour = ('0' + date.getHours()).slice(-2);
    const min = ('0' + date.getMinutes()).slice(-2);
    const sec = ('0' + date.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}
async function register() {
    const url = `https://api.apigw.smt.docomo.ne.jp/naturalChatting/v1/registration?APIKEY=${API_KEY}`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            botId: 'Chatting',
            appKind: 'Smart Phone'
        })
    }

    const response = await fetch(url, options);
    const json = await response.json();
    const appId = json.appId;

    return appId;
}

async function dialogue(appId, voiceText) {
    const url = `https://api.apigw.smt.docomo.ne.jp/naturalChatting/v1/dialogue?APIKEY=${API_KEY}`

    const now = new Date();

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            language: 'ja-JP',
            botId: 'Chatting',
            appId: appId,
            voiceText: voiceText,
            appRecvTime: dateFormat(now),
            appSendTime: dateFormat(now)
        })
    }

    const response = await fetch(url, options)
    const json = await response.json();
    const text = json.systemText.expression;
    return text;
}
let coin = 0
let password = false;
let メール = false;
let 誘導 = false;
let まるばつ = false;
let 計算1 = false;
let 一人で = false;
let 二人で = false;
let 三人で = false;
let サイコロ = false;
let 武器 = false;
let 一目サイコロ = false;
let 二目サイコロ = false;
let 三目サイコロ = false;
let 四目サイコロ = false;
let 五目サイコロ = false;
let 六目サイコロ = false;
let 上位サイコロ = false;
let 下位サイコロ = false;
let 運サイコロ = false;
let 一目サイコロs = false;
let 二目サイコロs = false;
let 三目サイコロs = false;
let 四目サイコロs = false;
let 五目サイコロs = false;
let 六目サイコロs = false;
let 上位サイコロs = false;
let 下位サイコロs = false;
let 運サイコロs = false;
let 棍棒 = false;
let 棍棒s = false;
let 鉛の剣 = false;
let 鉛の剣s = false;
let 青磁の剣 = false;
let 青磁の剣s = false;
let 銀の剣 = false;
let 銀の剣s = false;
let 漆黒剣 = false;
let 漆黒剣s = false;
let HP関連 = false;
let susumu = false;
let 十 = false;
let 三十 = false;
let 八 = false;
let 弓 = false;

let maze_0_0_front = false;
let maze_0_0_left = false;
let j0_0_m = false;
let j0_0_u = false;
let j1_0_s = false;
let j1_0_h = false;
let j1_0_m = false;
let j1_0_u = false;
let maze_0_1_front = false;
let j0_1_h = false;
let j0_1_m = false;
let j0_1_u = false;
let j0_2_s = false;
let j0_2_h = false;
let j0_2_m = false;
let j0_2_u = false;
let j1_1_s = false;
let j1_1_h = false;
let j1_1_m = false;
let j1_1_u = false;
let j4 = false;
let j5 = false;
let j6 = false;
let j7 = false;
let j8 = false;
let j9 = false;
let j10 = false;
let j11 = false;
let j12 = false;
let j13 = false;
let j14 = false;
let j15 = false;

let A１ = false;
let A２ = false;
let A３ = false;
let B１ = false;
let B２ = false;
let B３ = false;
let C１ = false;
let C２ = false;
let C３ = false;
let ノートレ = false;

let 問題 = false;

let 人権 = false;
let 品質 = false;
let 生産 = false;
client.on('messageDelete', (message) => {
    if (message.author.bot) return;
    const reportschannel = message.guild.channels.find(r => r.name === "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`メッセージが削除されました！`)
        .addField('削除されたメッセージ', message + "(ID:" + message.id + ")")
        .addField(`削除されたチャンネル`, message.channel + "(ID:" + message.channel.id + ")")
        .setColor('#ff0000')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('messageUpdate', (omsg, nmsg) => {
    if (nmsg.author.bot) return;
    const reportschannel = nmsg.guild.channels.find(r => r.name === "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`メッセージが変更されました！`)
        .addField('変更前のメッセージ', omsg)
        .addField(`変更後のメッセージ`, nmsg + "(ID:" + omsg.id + ")")
        .addField(`変更されたチャンネル`, nmsg.channel + "(ID:" + omsg.channel.id + ")")
        .setColor('#00ffca')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('channelCreate', (msg) => {
    const reportschannel = msg.guild.channels.find('name', 'スピカ-ろぐ');
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`新しいチャンネルが生成されました！`)
        .addField('生成されたチャンネル', msg)
        .setColor('#00f6fd')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('typingStart', (channel, user) => {
    const reportschannel = channel.guild.channels.find('name', 'スピカ-ろぐ');
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`文字を打ち始めました！`)
        .addField('打ってる人', user)
        .addField('打ってるチャンネル', channel)
        .setColor('#f2ff00')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('typingStop', (channel, user) => {
    const reportschannel = channel.guild.channels.find('name', 'スピカ-ろぐ');
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`文字を打ち終わりました！`)
        .addField('打ってた人', user)
        .addField('打ってたチャンネル', channel)
        .setColor('#ffaa00')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on("guildCreate", (guild) => {
    var now = new Date();
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes()
    let embed = new discord.RichEmbed()
        .setTitle(`新しいサーバーに入ったわよ！`)
        .addField('サーバー名', `${guild.name}(${guild.id})`)
        .addField("サーバーの人数", `${guild.memberCount}`)
        .setColor('#00fff2')
        .setFooter((year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    client.channels.get('501351495267254272').send(embed);
    return;
});
client.on("guildDelete", (guild) => {
    var now = new Date();
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes()
    let embed = new discord.RichEmbed()
        .setTitle(`サーバーから蹴られました...悲しくなんかないんだからっ！`)
        .addField('サーバー名', `${guild.name}`)
        .addField("サーバーの人数", `${guild.memberCount}`)
        .setColor('#9d17ad')
        .setFooter((year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    client.channels.get('501351495267254272').send(embed);
    return;
});
client.on('guildUpdate', (olduser, newuser) => {
    let reportschannel = newuser.guild.channels.find(`name`, "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`詳細が変更されました！`)
        .addField('変更された人', newuser)
        .addField('変更前', olduser)
        .addField('変更後', newuser)
        .setColor('#ffaa00')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('voiceStateUpdate', (olduser, newuser) => {
    let reportschannel = newuser.guild.channels.find(`name`, "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`音声状態が変更されました！`)
        .addField('変更された人', newuser)
        .setColor('#00fff2')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('guildMemberUpdate', (oldMember, newMember) => {
    let reportschannel = oldMember.guild.channels.find(`name`, "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`詳細が変更されました！`)
        .addField('変更された人', oldMember)
        .setColor('#ffaa00')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('warn', (info) => {
    console.log(info + `\n` + "ですっ")
})
client.on('roleCreate', (message, msgname) => {
    let reportschannel = message.guild.channels.find(`name`, "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`役職が追加されました！`)
        .addField('追加された役職', message)
        .setColor('#0000ff')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('roleDelete', (role) => {
    let reportschannel = role.guild.channels.find(`name`, "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`役職が削除されました！`)
        .addField('削除された役職', role)
        .setColor('#00afff')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('guildMemberAdd', (member) => {
    let reportschannel = member.guild.channels.find(`name`, "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`新しいメンバーが加わりました！`)
        .addField('加わった人', member + `\n(ID:` + member.id + ')')
        .setColor('#001aff')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('guildMemberRemove', (member) => {
    let reportschannel = member.guild.channels.find(`name`, "スピカ-ろぐ");
    if (!reportschannel) return;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    let embed = new discord.RichEmbed()
        .setTitle(`メンバーが出て行っちゃいました`)
        .addField('行っちゃった人', member + `\n(ID:` + member.id + ')')
        .setColor('#00fffc')
        .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
    reportschannel.send(embed)
})
client.on('message', async message => {
    if (message.author.bot || !message.guild) return
    if (message.content.includes(message.content)) {
        if (!message.guild) return;
        const reportschannel = message.guild.channels.find(r => r.name === "スピカ-ろぐ");
        if (!reportschannel) return;
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var hour = now.getHours();
        var min = now.getMinutes();
        let embed = new discord.RichEmbed()
            .setTitle(`メッセージが送信されました！`)
            .addField('送信されたメッセージ', message.content)
            .addField('送信した人', message.author)
            .addField(`打ったチャンネル`, message.channel + "\nhttps://discordapp.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id)
            .setColor('#eb8fe5')
            .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
        reportschannel.send(embed)
    }
})
client.on('ready', async message => {
    console.log('ん？何よ。。。暇つぶし相手に、すこしだけならいいわよ');
    client.user.setPresence({
        status: 'online',
        game: {
            name: '$help　new:口調',
            url: 'https://lil-sis-counter.glitch.me/'
        }
    });
    //顔文字のやつの元。色々使える
    client.on('message', async message => {
        if (message.author.bot) return
        if (message.content === '考え') {
            message.react('🤔')
        }
        if (message.content === 'うんち') {
            message.react('💩')
        }
        if (message.content === 'うんこ') {
            message.react('💩')
        }
        if (message.content === 'きらい') {
            message.react('💔')
        }

    });

    //@メンション
    //client.on("message", async message => {
    //if (message.content === '666') {
    //const { Client, RichEmbed } = require('discord.js');
    // const embed = new RichEmbed()
    //.setTitle('スピカだよっ')
    //.setColor(0xffff0000)
    //.setDescription('テストだよ！これからもよろしくねっ');
    //message.channel.send(embed);
    //}
    //});


    client.on("message", async message => {
        if (message.author.bot) return
        var info = global.user().find({
            id: message.author.id
        }).value();
        if (!info) {
            global.user().push({
                id: message.author.id,
                count: 0,
                name: '名無し'
            }).write();
        }

        if (message.content.indexOf(process.env.PREFIX) === 0) {
            runCommand(client, message);
            return;
        }
        if (message.isMemberMentioned(client.user)) {
            var mys = client.guilds.map(a => a.name);
            var zombiArray = client.guilds.map(a => a.name);
            var zombi = 0;
            for (var i = 0; i < zombiArray.length; i++) {
                if (zombiArray[i] == 2) {
                    zombi++;
                }
            }
            var now = new Date();
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth();
            var date = now.getDate();
            var hour = now.getHours();
            var min = now.getMinutes()
            let embed = new discord.RichEmbed()
                .setTitle(`スピカのヘルプよっ！
$help [コマンド] と打てば、特定のコマンドについてのヘルプを表示します。例：$help 進数`)
                .setDescription(`＜冒頭に$を忘れずに！＞`)
                .addField('言葉', "`〇って呼んで`、`おは`、`語尾`、`マルコフ`、`口調`、`文字`、その他")
                .addField('計算', "`数字`、`進数`、`変換`、`を`、`倍数`、`ランダム数字`、`電卓`")
                .addField('時間', "`今日は何の日`、`何時`、`タイマー`、`曜日`、`停止`")
                .addField('面白', "`じゃんけん`、`くじ`、`問題`、`サイコロ`、`語尾`、`ランダム`、`スピカの確率`、`密会`、`暗号`、`R18`、`心情`　、目下製作中→`まるばつ`、`しりとり`、`脳トレ`")
                .addField('管理', "`検索`、`リンク`、`ログ`、`ピン`、`絵文字`、`役職`、`help`")
                .addField('⬇️入っているサーバー合計⬇️', i)
                .addField(`スピカを招待したい場合、上のタイトルをクリックしてください。`, `その他質問・要望等がある場合、「**スピカinfo**」というチャンネルを作ると質問・要望を送信することができます。`)
                .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=469474420050886657&permissions=1077275840&scope=bot`)
                .setColor('#00ffca')
                .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/ffaff4f5603ef14dc98fb492baabb34c.png?size=2048")
                .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
            message.channel.send(embed)
            return;
        }
        if (message.content.includes(message.content)) { //いじるな。Statusにメッセ送信
            console.log(`${message.guild.name}` + `———` + `${message.author.username}` + `
` + message.content);
        }
        //if(message.isMemberMentioned(client.user))
        if (message.content.includes('@')) {
            message.channel.send();
            return;
        }
        if (message.content.includes('ハロウィン')) {
            message.react('🎃');
            message.react('👻');
            message.react('😈');
        }
        if (message.content.includes('はろうぃん')) {
            message.react('🎃');
            message.react('👻');
            message.react('😈');
        }
        if (message.content.includes('!rank')) {
            message.channel.send('スピカのランクはカンストしてるわよっ！');
            return;
        }
        if (message.content.includes('検索 暗号')) {
            message.channel.send('検索の少し上にあるわ！');
            return;
        }
        if (message.content.includes('検索　暗号')) {
            message.channel.send('検索の少し上にあるわ！');
            return;
        }
        if (message.content.includes('t!rank')) {
            message.channel.send('スピカのランクはカンストしてるわよっ！');
            return;
        }
        if (message.content.includes('t!daily')) {
            message.channel.send('スピカの所持金はカンストしてるわよっ！');
            return;
        }
        if (message.content.includes('t!')) {
            message.channel.send('そんなやつどうでもいいでしょっ！');
            return;
        }



        if (message.content.match(/、ね[っぇえ]?、?スピカ？?/)) {
            message.channel.send('まぁ、そうなんじゃない？')
        }
    });
});
if (process.env.TOKEN == undefined) {
    console.log('トークンが見当たらないわ。。。');
    process.exit(0);
}

client.login(process.env.TOKEN);

function runCommand(client, message) {
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/[ ]+/g);
    let command;
    if (message.content.indexOf(process.env.PREFIX) === 0) {
        command = args.shift().toLowerCase();
    } else {
        args.shift();
        if (args.length) command = args.shift().toLowerCase();
        else command = '';
    }

    if (command !== '') {
        try {
            let commands = require(`./commands/${command}.js`);
            commands.run(client, message, args);
        } catch (err) {
            console.log()
            if (message.content.includes('〇って')) {
                var responce = [
                    `さては、コピペしたわね？`
                    `コピペは草　By育ての親`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (command.includes('って呼んで')) {
                var nameToCall = command.slice(0, command.indexOf('って呼んで')).trim().split(/[ 、]+/g);
                howToCall(client, message, nameToCall);
                return;
            }
            if (message.content.includes('検索')) {
                var kens = (message.content.slice(3));
                if (message.content.slice(3, 4).match(/[ 　]/)) {
                    var kens = (message.content.slice(4));
                }
                var fs = require('fs');

                fs.readFile('./server.js', 'utf8', function (err, text) {
                    const lines = text.split('\n') // 行ごとの配列
                    const line2 = text.split('\n').length;

                    const index = lines.findIndex(line => ~line.indexOf(kens)) // どの行にあるか検索
                    const result = ~index ? (index + 1) + '' : 'なかったわよ！'
                    const index2 = lines.findIndex(line => ~line.indexOf(kens, result + 1))
                    const result2 = ~index2 ? (index2 + 1) + '' : 'なかったわよ！'
                    const index3 = lines.findIndex(line => ~line.indexOf(kens, result2 + 1))
                    const result3 = ~index2 ? (index3 + 1) + '' : 'なかったわよ！'
                    var nang = text.indexOf(kens) + 1
                    var count = 0;
                    var pos = text.indexOf(kens);
                    while (pos !== -1) {
                        count++;
                        pos = text.indexOf(kens, pos + 1);
                    }
                    if (result == 'なかったわよ！') {
                        message.channel.send('なかったわよ！')
                        return;
                    }
                    message.channel.send(result + "/" + line2 + "行目（" + nang + `番目）にあったわ！` + `\n全部で` + count + `個あったわ`);
                });
                return;
            }
            if (message.content.substring(1).startsWith('help 時間')) { //embed.setDescription('');
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！
どのヘルプを見たいですか？`)
                    .addField('今日は何の日', " 󠂪󠂪")
                    .addField('何時', " 󠂪󠂪")
                    .addField('タイマー', " 󠂪󠂪")
                    .addField('曜日', " 󠂪󠂪")
                    .addField('停止', " 󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    //  .setImage("https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.substring(1).startsWith('help 言葉')) { //embed.setDescription('');
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！
どのヘルプを見たいですか？`)
                    .addField('〇って呼んで', " 󠂪󠂪")
                    .addField('おは', " 󠂪󠂪")
                    .addField('語尾', " 󠂪󠂪")
                    .addField('マルコフ', " 󠂪󠂪")
                    .addField('口調', " 󠂪󠂪")
                    .addField('その他', " 󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    //  .setImage("https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.substring(1).startsWith('help 計算')) { //embed.setDescription('');
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！
どのヘルプを見たいですか？`)
                    .addField('数字', " 󠂪󠂪")
                    .addField('進数', " 󠂪󠂪")
                    .addField('変換', " 󠂪󠂪")
                    .addField('を', " 󠂪󠂪")
                    .addField('倍数', " 󠂪󠂪")
                    .addField('ランダムな数字', " 󠂪󠂪")
                    .addField('電卓', " 󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    //  .setImage("https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.substring(1).startsWith('help 面白')) { //embed.setDescription('');
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！
どのヘルプを見たいですか？`)
                    .addField(`じゃんけん\nくじ\n問題\nサイコロ\n語尾\nランダム\nスピカの確率\n密会\n暗号`, "🚧↓目下製作中↓🚧")
                    .addField(`まるばつ\nしりとり\n脳トレ`, " 󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    //  .setImage("https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.substring(1).startsWith('help 管理')) { //embed.setDescription('');
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！
どのヘルプを見たいですか？`)
                    .addField(`検索\nリンク\nログ\nピン\n絵文字\n役職\nhelp`, " 󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    //  .setImage("https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 〇って呼んで')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('〇って呼んで', " 󠂪󠂪")
                    .addField('「$〇って呼んで」と打つと、スピカが', "󠂪これからは〇って呼んであげるね！󠂪")
                    .addField('と言います。以後、スピカと会話した場合や', "$")
                    .addField('とだけ打った場合にスピカがこの言葉であなたを呼びます', " 󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help おは')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('おは', " 󠂪󠂪")
                    .addField('「$おは」と打つと、打った時間帯が朝だった場合', "󠂪おはようございます！󠂪")
                    .addField('と言います。また、昼だったなら', "あの....今は昼なんだけど.....")
                    .addField('夕方なら', "むしろこれから暗くなっていくじかんなんだけど...?")
                    .addField('夜なら', "今は夜ですけど....外国の人？ですか？")
                    .addField('と言います。', " 󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 語尾')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('語尾', " 󠂪󠂪")
                    .addField('「$語尾 〇」と打つと、', "󠂪最後の文字は「〇」ね！󠂪")
                    .addField(`と言います。〇に入る言葉は何でも良いです。
ただし、「 󠂪󠂪」というようなDiscordが認識できない文字の場合、`, "最後の文字は「�」ね！")
                    .addField('となってしまいます。ご了承ください。', " 󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 数字')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('数字', ` 󠂪󠂪󠂪`)
                    .addField(`「$数字〇」と打つと、` + "`〇は半角数字`", `それは、、、偶数ね！
or
それは、、、奇数ね！`)
                    .setColor('#00ffca')
                    .addField('のどちらかを言います。', ` 󠂪󠂪󠂪`)
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 進数')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('進数', ` 󠂪󠂪󠂪`)
                    .addField(`「$〇進数△」と打つと、` + "`〇は変換したい進数、△は変換したい数字`", `それは、、
` + "`△の〇進数`" + `
になるわね！`)
                    .addField(`と言います。
全角数字には対応していません！ご了承ください`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 変換')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('変換', ` 󠂪󠂪󠂪`)
                    .addField(`「$〇変換△」と打つと、` + "`〇は変換したい進数、△は変換したい数字`", `それは、、
` + "`△の〇進数`" + `
になるわね！`)
                    .addField(`と言います。
全角数字には対応していません！ご了承ください`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help を')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('を', ` 󠂪󠂪󠂪`)
                    .addField(`「$〇を△ □」と打つと、` + "`〇は□の進数、△は変換したい進数、□は変換したい数字`", `それは、、
` + "`□の△進数`" + `
になるわね！`)
                    .addField(`と言います。
全角数字には対応していません！ご了承ください`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 倍数')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('倍数', ` 󠂪󠂪󠂪`)
                    .addField(`「$倍数 〇」と打つと、` + "`〇は数字`", `えーっと、[〇の約数すべて]の倍数ね！`)
                    .addField(`と言います。
全角数字には対応していません！ご了承ください`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help ランダム数字')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('ランダム数字', ` 󠂪󠂪󠂪`)
                    .addField(`「$ランダム数字 〇」と打つと、` + "`〇は桁数`", `[〇桁でできた数字]`)
                    .addField(`を言います。[` + "`〇がなければ8桁`" + `]
全角数字には対応していません！ご了承ください`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 電卓')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('電卓', ` 󠂪󠂪󠂪`)
                    .addField(`「$〇」と打つと、`, `〇は数式󠂪󠂪󠂪`)
                    .addField(`式を計算します。
*の省略、比率、全角数字等には対応していません！ご了承ください`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 今日は何の日')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('今日は何の日', ` 󠂪󠂪󠂪`)
                    .addField(`「$今日は何の日」と打つと、`, ` 󠂪󠂪󠂪`)
                    .addField(`今日が何の日かを教えます。
(めんどくさがって)対応していない日もあります。ご了承ください`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 何時')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('何時/何月/何日', ` 󠂪󠂪󠂪`)
                    .addField(`「$何時」等と打つと、`, `〇年の、△月☆日、□時◇分だよっ
時計くらい読めるんだから。バカにしないでよね`)
                    .addField(`と言います。
時差の関係上、24時近辺で使用すると
おかしな時刻を示す場合があります。ご了承ください`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 文字')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('文字', ` 󠂪󠂪󠂪`)
                    .addField(`「$文字 〇」と打つと、`, `〇は文章`)
                    .addField(`〇を形態素解析します`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help タイマー')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('タイマー', ` 󠂪󠂪󠂪`)
                    .addField(`「$〇[分/時間/秒]」と打つと、`, `〇は半角数字`)
                    .addField(`そのタイマーをセットします。`, "スピカの機能追加の都合上、タイマーがリセットされてしまう可能性があります。あらかじめご了承ください。")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 停止')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('停止', ` 󠂪󠂪󠂪`)
                    .addField(`「$停止」と打つと、
10秒間機能を停止したのち、`, `言われた通り、機能を１０秒間停止させたわ`)
                    .addField(`と言います。
この10秒間、何を言っても反応しなくなります`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help じゃんけん')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('じゃんけん', ` 󠂪󠂪󠂪`)
                    .addField(`「$ぐー/ちょき/ぱー」と打つと、` + "`カタカナ可`", `スピカで遊ぶ気？もう。(以下略`)
                    .addField(`と言います
略した所は、勝ち負けにより変わります`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 曜日')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('曜日', ` 󠂪󠂪󠂪`) //275759
                    .addField(`「$〇年△月□日」と打つと、` + "`〇,△,□は数字`", `えーっと、それは...☆曜日よ！`)
                    .addField(`と言います
大きな年を言うと、別の反応も。
何年で変わるか見極めるのも楽しいかも`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help くじ')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('くじ', ` 󠂪󠂪󠂪`)
                    .addField(`「$くじ」と打つと、`, ` 󠂪󠂪󠂪`)
                    .addField(`くじを引き、内容を言います。
確率は浅草寺のおみくじと全く同じです！`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 問題')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('問題', ` 󠂪󠂪󠂪`)
                    .addField(`「$問題」と打つと、
問題を言います。`, ` 󠂪󠂪󠂪`)
                    .addField(`しかし、問題数は一問のみです()`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help サイコロ')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('サイコロ', ` 󠂪󠂪󠂪`)
                    .addField(`「$サイコロ」と打つと、` + "`ひらがな可`", `スピカで遊ぶ気？もう。〇よ`)
                    .addField(`と言います。`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 語尾')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('語尾', ` 󠂪󠂪󠂪`)
                    .addField(`「$語尾 〇」と打つと、` + "`〇はなんでもおk`", `最後の文字は「〇」ね！`)
                    .addField(`と言います。
必要性？知らんな`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 語尾')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('語尾', ` 󠂪󠂪󠂪`)
                    .addField(`「$語尾 〇」と打つと、` + "`〇はなんでもおk`", `最後の文字は「〇」ね！`)
                    .addField(`と言います。
必要性？知らんな`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help ランダム')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('ランダム[英語/数字/ひらがな/カタカナ/ハングル/インド/色/人/チャンネル/サイコロ]', ` 󠂪󠂪󠂪`)
                    .addField(`「$ランダム 〇」と打つと、` + "`〇は[]内のどれか`", `
英語〜インド　：ランダムに指定文字だけ言います。\n　　　　　　　　デフォルトは8文字、最後に数字で文字数指定
色　　　　　　：ランダムに色を出します
人、チャンネル：Discord上にいるすべての
　　　　　　　　人/チャンネルからランダムで選出します。
　　　　　　　　大抵は失敗します。
サイコロ　　　：ランダムで指定された数だけのサイコロを振ります。
　　　　　　　　デフォルトは8個、最後に数字で個数指定`)
                    .addField(`を言います。
[例]$ランダムハングル10`, `샤기큐레게뵤레슈쇼규`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help スピカの確率')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('スピカの確率', ` 󠂪󠂪󠂪`)
                    .addField(`「$スピカの確率」と打つと、`, `
「ス」「ピ」「カ」の中から三文字を選出します。`)
                    .addField(`「スピカ」になる確率は約3.7%！大抵は「ピカカ」等になってしまいます`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 密会')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('密会', ` 󠂪󠂪󠂪`)
                    .addField(`「$密会」と打つと、`, `#聖魔眼宿りし者の密会`)
                    .addField(`というチャンネルを作り、厨二病を炸裂させます。`, `これには、チャンネル管理権限が必要です`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 暗号')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('暗号', ` 󠂪󠂪󠂪`)
                    .addField(`「$暗号 〇」と打つと、`, `〇は全てひらがな`)
                    .addField(`〇を暗号化します。`, `現在解読機能を製作中です。今年中にはできる`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help R18')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('R18', ` 󠂪󠂪󠂪`)
                    .addField(`「$R18 http...」と打つと、`, "http...は画像のurl")
                    .addField(`その画像がR18画像である可能性を%で表示します。`, "R18gには対応していません")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 心情')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('R18', ` 󠂪󠂪󠂪`)
                    .addField(`「$心情 〇」と打つと、`, "〇は英文")
                    .addField(`その英文がどのくらいポジティブか%で表示します。`, "現在日本語には対応していません")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help リンク')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('リンク', ` 󠂪󠂪󠂪`)
                    .addField(`「$リンク」と打つと、`, ` 󠂪󠂪󠂪`)
                    .addField(`そのメッセージのリンクを作成します。
必要意義？...こっちが聞きたい`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help ログ')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('ログ', ` 󠂪󠂪󠂪`)
                    .addField(`「#スピカ-ろぐ」というチャンネルを作ると、`, ` 󠂪󠂪󠂪`)
                    .addField(`スピカがログをとります`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help ピン')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('ピン', ` 󠂪󠂪󠂪`)
                    .addField(`「$ピン」と打つと、`, ` 󠂪󠂪󠂪`)
                    .addField(`そのメッセージをピン留めします。`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 絵文字')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('鯖絵文字/絵文字', ` 󠂪󠂪󠂪`)
                    .addField(`「$鯖絵文字」と打つと、`, `そのサーバー上にある全ての絵文字を表示します。`)
                    .addField(`「$絵文字 〇」と打つと、` + "`〇は絵文字`", `その絵文字のIDを教えます。`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 検索')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('検索', ` 󠂪󠂪󠂪`)
                    .addField(`「$検索 〇」と打つと、`, `スペースは半全角どちらも可`)
                    .addField(`スピカの思考回路内の何行目にあるのかを教えます`, `(完全に製作者以外に使い道ない)`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 役職')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('役職', ` 󠂪󠂪󠂪`)
                    .addField(`「$役職」と打つと、`, ` 󠂪󠂪󠂪`)
                    .addField(`そのサーバー内の全ての役職を言います。`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help help')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('help', ` 󠂪󠂪󠂪`)
                    .addField(`「$help 〇」と打つと、特定のコマンドの詳しいhelpを表示します。
特定のコマンドはスピカにメンションをするか、
$help等と打つと知れます。`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help マルコフ')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('マルコフ', ` 󠂪󠂪󠂪`)
                    .addField(`$[アシタカ/ツンデレ/中二]と打つと、\n文法上はともかく意味が変なセリフをそれぞれランダムに10個出します`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 口調')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('口調', ` 󠂪󠂪󠂪`)
                    .addField(`「$口調 〇 ▲ □」と打つと、`, `〇は文章/▲は変更したい一人称/□/変更したい語尾`)
                    .addField(`〇の中の一人称を▲に、\n〇の中の語尾を□\nに変更します`, `少々変な文になってしまうことがあります。ご了承ください`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help 文字')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('文字', ` 󠂪󠂪󠂪`)
                    .addField(`「$口調 〇」と打つと、`, `〇は文章`)
                    .addField(`〇を形態素解析します`, ` 󠂪󠂪󠂪`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('今日は何の日')) {
                var now = new Date();
                var month = now.getMonth();
                var date = now.getDate();
                if (month == 9 && date == 10) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__目の愛護デー__として有名ね。
でも、他にも実は15こも記念日があるのよ！一年で一番記念日が多い日らしいわ`);
                }
                if (month == 9 && date == 11) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__ウインクの日__よ。
スピカ、あまりウインクって上手にできない...`);
                }
                if (month == 9 && date == 12) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__豆乳の日__よ。
「とう(10)にゅう(2)の語呂合わせらしいわ。いかにも日本人って感じね`);
                }
                if (month == 9 && date == 13) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__引越しの日__、__麻酔の日__、あと__サツマイモの日__よ。
麻酔って、なんか怖そうよね...`);
                }
                if (month == 9 && date == 14) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__鉄道の日__よ。
前は鉄道記念日って名前だったらしいわ`);
                }
                if (month == 9 && date == 15) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__きのこの日__よ。
間違っても『山』がつくほうじゃないからね？戦争起こさないでよ？`);
                }
                if (month == 9 && date == 16) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__世界食料デー__と__世界脊椎デー__の日よ。
スピカ、難しいことはあまりわからないわ...`);
                }
                if (month == 9 && date == 17) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__カラオケ文化の日__と__貯蓄の日__の日よ。
スピカカラオケ好きだから、すぐお金なくなっちゃう`);
                }
                if (month == 9 && date == 18) { //18
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__ミニスカートの日__と__フラフープ記念日__、他にもいくつかあるらしいわよ。
スピカフラフープ得意よ！`);
                }
                if (month == 9 && date == 19) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__海外旅行の日__と__イケメンの日__、他にもいくつかあるらしいわよ。
海外旅行...お金持ってる？`);
                }
                if (month == 9 && date == 20) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__頭髪の日__と__ヘアブラシの日__、他にもいくつかあるらしいわよ。
スピカ、結構髪長いのよ？`);
                }
                if (month == 9 && date == 21) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__あかりの日__らしいわよ。
どっかの昔の偉い人が、京都の竹を使ってなんかすごいことをしたかららしいわ〜`);
                }
                if (month == 9 && date == 22) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__アニメの日__らしいわ！
スピカ、アニメ嫌いじゃないわ`);
                }
                if (month == 9 && date == 23) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__モルの日__と他にもいくつかあるらしいわよ。
モル.... なにそれおいしいの？

次のテスト範囲molだ...頭いてぇ By育ての親`);
                }
                if (month == 9 && date == 24) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__マーガリンの日__と他にもいくつかあるらしいわよ。
...マーガリンとかバターとかって、悪魔の言葉だと思うの。`);
                }
                if (month == 9 && date == 25) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__世界パスタデー__と他にもいくつかあるらしいわよ。
スピカ、パスタ結構好きよ！`);
                }
                if (month == 9 && date == 26) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__デニムの日__と他にもいくつかあるらしいわよ。
今日のスピカのスカート、デニムよ？
...
あんたに見せるわけないじゃないっ！あんたにだけはぜええったいにみせないんだからっ`);
                }
                if (month == 9 && date == 27) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__テディベアズ・デー__よ。
ぬ、ぬいぐるみなんてスピカぜんっぜん欲しくなんかないんだから`);
                }
                if (month == 9 && date == 28) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__ABCの日__よ。
スピカ、その辺はよくわからない...`);
                }
                if (month == 9 && date == 29) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__おしぼりの日__よ。
「手(ten)を拭(2)く(9)」かららしいわ`);
                }
                if (month == 9 && date == 30) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__たまごかけごはんの日__と__*初恋の日*__よ。
はっははははつ恋なんてしたことなななないわよ？？`);
                }
                if (month == 9 && date == 31) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__ハロウィン__よ！！
👻ハッピーハロウィーン！🎃`);
                }
                if (month == 10 && date == 1) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__犬の日__よ！！
スピカ、犬嫌いじゃないわ。`);
                }
                if (month == 10 && date == 2) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__タイツの日__よ。
タイツはおしゃれの必須あいてむよ！`);
                }
                if (month == 10 && date == 3) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__文化の日__よ。
自由と平和が一番！
って先生が言ってたわね`);
                }
                if (month == 10 && date == 4) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。今日は、、、__ユネスコ__、、、__憲章記念日__？　よ。
ちょっと何言ってるのかわからないわ`);
                }
                if (month == 10 && date == 5) { //←10は、11月って意味。4も同じで、+1。何でだかわからないけどw
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__縁結びの日__よ！
11(良い)5(ご)ご縁がありますよーに`);
                }
                //へ～～～   }//おー。どしたどした
                if (month == 10 && date == 6) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__アパート記念日__よ！
最近、アパート少なくなってきてるらしいわね`);
                }
                if (month == 10 && date == 7) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__ココアの日__よ！
ま、間違っても、下のココアじゃないからね？`); //まぁ見てて
                    message.react(client.emojis.find(emoji => emoji.name === "kokoa2"))
                }
                if (month == 10 && date == 8) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__いい歯の日__よ！
スピカもちゃんと歯を磨いてるわ！`);
                }
                if (month == 10 && date == 9) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__119番の日__よ！
スピカが救急車に運ばれたら、
あんたなんか食べ物でも持って絶対にお見舞いに来なさいよね！`);
                }
                if (month == 10 && date == 10) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__トイレの日__よ
「11(良い)ト(10)イレ」らしいけど...無理やりすぎる気がするわ`);
                }
                if (month == 10 && date == 11) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__いただきますの日__、__麺の日__、__ポッキー&プリッツの日__、他にもいーっぱいあるわ
10月10日の次に記念日が多い日らしいわね`);
                }
                if (month == 10 && date == 12) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__皮膚の日__よ！
「い(1)い(1)ひ(1)ふ(2)」らしいわ。`);
                }
                if (month == 10 && date == 13) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__茨城県民の日__よ！
スピカが住んでるのは、電子世界よ`);
                }
                if (month == 10 && date == 14) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__埼玉県民の日__と、__大分県民の日__よ！
スピカが住んでるのは、電子世界よ`);
                }
                if (month == 10 && date == 15) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。:shopping_bags: :kimono: :crossed_flags: __七五三__よ！:shopping_bags: :kimono: :crossed_flags:
今日はあんたを祝う日じゃない！めでたいわね。`);
                }
                if (month == 10 && date == 16) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__幼稚園記念日__よ！
今日はあんたの通ってるとこを祝う日じゃない！めでたいわね。`);
                }
                if (month == 10 && date == 17) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__将棋の日__よ！
スピカが王だとしたら、あんたは歩ね。わ、私を守りなさい！`);
                }
                if (month == 10 && date == 18) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。:headphones: __いいイヤホン・ヘッドホンの日__ :headphones: よ！
いつもお世話になってます！`);
                }
                if (month == 10 && date == 19) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。 __世界トイレデー__  よ！
スピカは__特別__だから、トイレには行かないわ！`);
                }
                if (month == 10 && date == 20) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。🍕__ピザの日__🍕よ！
スピカ、ピザはあまり食べないわ`);
                }
                if (month == 10 && date == 21) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__イーブイの日__よ！
そう、ポケッ〇モンスターのあれよ。`);
                    message.react(client.emojis.find(emoji => emoji.name === "Eevee"))
                }
                if (month == 10 && date == 22) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。🚹__いい夫婦の日__��よ！
ま、あんたには関係のない記念日ね。`);
                }
                if (month == 10 && date == 23) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__勤労感謝の日__よ！
いつもお疲れ様。`);
                }
                if (month == 10 && date == 24) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__鰹節の日__よ！
「い(1)い(1)ふ(2)し(4)」ってことらしいわ。`);
                }
                if (month == 10 && date == 25) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__OLの日__よ！
スピカも、いつかOLになるのかしら`);
                }
                if (month == 10 && date == 26) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__いい風呂の日__よ！
「い（1）い（1）ふ（2）ろ（6）」の語呂合せらしいわ`);
                }
                if (month == 10 && date == 27) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__いい鮒の日__よ！
「い(1)い(1)ふ(2)な(7)」の語呂合せらしいわ`);
                }
                if (month == 10 && date == 28) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__いいニーハイの日__よ！
スピカも今日はニーハイよ！`);
                }
                if (month == 10 && date == 29) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__いい肉の日__よ！
いい肉食べよう鎌倉幕府！......ん？`);
                }
                if (month == 10 && date == 30) {
                    message.channel.send(`今日は` + (month + 1) + '月の' + (date) + `日。__本みりんの日__よ！
お鍋が美味しい時期になってきたわね`);
                }

                message.react('📆');
                return;
            }


            if (message.content.includes('何時')) {
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                message.channel.send((year) + "年の、" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分だよっ
時計くらい読めるんだから。バカにしないでよね`);
                return;
            }
            if (message.content.includes('何月')) {
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                message.channel.send((year) + "年の、" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分だよっ
時計くらい読めるんだから。バカにしないでよね`);
                return;
            }
            if (message.content.includes('何日')) {
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                message.channel.send((year) + "年の、" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分だよっ
時計くらい読めるんだから。バカにしないでよね`);
                return;
            }

            if (message.content.includes('おは')) {
                var hour2 = new Date().getHours();
                if (hour2 >= 9 && hour2 < 20) {
                    message.channel.send('今は夜ですけど....外国の人？ですか？');
                } else if (hour2 >= 20 && hour2 < 1) {
                    message.channel.send('おはようございます！');
                } else if (hour2 >= 1 && hour2 < 6) {
                    message.channel.send('あの....今は昼なんだけど.....');
                } else if (hour2 >= 6 && hour2 < 9) {
                    message.channel.send('むしろこれから暗くなっていくじかんなんだけど...?');
                }
                return;
            }
            if (message.content.includes('停止')) {
                var now = new Date();
                var min = now.getMinutes();
                for (var i = 0; i < 9; i++) {
                    function sleep(waitMsec) {
                        var startMsec = new Date();
                        while (new Date() - startMsec < waitMsec);
                    }
                    sleep(1000);
                }
                message.channel.send('言われた通り、機能を１０秒間停止させたわ');
                return;
            }
            if (message.content.includes('眠るな')) {
                message.channel.send('私が寝落ちしないように、対策をつけたわ。12時間有効よ。');
                message.react('🕐');

                function sleep(waitSec, callbackFunc) {
                    var spanedSec = 0;
                    var id = setInterval(function () {
                        spanedSec++;
                        if (spanedSec >= waitSec) {
                            clearInterval(id);
                            if (callbackFunc) callbackFunc();
                        }
                    }, 1000);
                }
                sleep(10800, function () {
                    message.channel.send('寝落ち対策から3時間がたったわ。');
                    sleep(10800, function () { // => 270
                        message.channel.send('寝落ち対策から6時間がたったわ。');
                        sleep(10800, function () { // => 30
                            message.reply('寝落ち対策から9時間がたったわ。');
                            sleep(10800, function () { // => 30
                                message.reply('寝落ち対策が無事終了したわ。誰も話しかけないとスピカ、寝るわよ。');
                                return;
                            });
                        });
                    });
                });
            }
            if (message.content.includes('gram')) { //何がしたいん？
                var kekka = message.content.split(" ");
                if (message.content.slice(5).match(/　/)) {
                    var kekka = message.content.split("　");
                }
                var ngram = function (words, n) {
                    var i;
                    var grams = [];

                    for (i = 0; i <= words.length - n; i++) {
                        grams.push(words.substr(i, n).toLowerCase());
                    }
                    return grams;
                }
                var text = kekka[1];
                message.channel.send(ngram(text, 3))
                return;
            }
            if (message.content.includes('強制終了')) {
                if (!message.member.permissions.has("ADMINISTRATOR")) return;
                client.me.destroy()
                return;
            }
            if (message.content.includes('報告')) {
                //         client.users.find("430711354853425163").sned("a")
                client.users.find('id', "430711354853425163").send("a")
                return;
            }
            if (message.content.includes('トピック')) {
                var kekka = message.content.split(" ");
                if (message.content.slice(5).match(/　/)) {
                    var kekka = message.content.split("　");
                }
                message.channel.setTopic(kekka[1])
                message.channel.send("トピックを「" + kekka[1] + "」に設定してあげたわっ")
                return;
            }
            if (message.content.includes('密会')) {
                message.guild.createChannel("聖魔眼宿りし者の密会", "text", [{
                    id: `${message.guild.id}`,
                    deny: ['MANAGE_MESSAGES'],
                    allow: ['SEND_MESSAGES']
                }])

                function sleep(waitSec, callbackFunc) {
                    var spanedSec = 0;
                    var id = setInterval(function () {
                        spanedSec++;
                        if (spanedSec >= waitSec) {
                            clearInterval(id);
                            if (callbackFunc) callbackFunc();
                        }
                    }, 1000);
                }
                sleep(2, function () {
                    let reportschannel = message.guild.channels.find(`name`, "聖魔眼宿りし者の密会");
                    if (!reportschannel) return;
                    reportschannel.setTopic("うわー、厨二病とか痛すぎw")
                    reportschannel.send(`漆黒を司りし者共よ

聖魔眼宿りし者共よ！

此の魑魅魍魎とした世界<†ワールド†>に潜めし混沌を

其の真紅に煌めく能力<†アビリティ†>を行使して。

悪魔の吹雪を払拭し

聖徒の息吹を靡かせよ！`)
                })
                return;
            }
            if (message.content.includes('鯖絵文字')) {
                const emojis = message.guild.emojis.map(e => `<:${e.name}:${e.id}>`);
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`このサーバーの絵文字は`)
                    .setDescription(emojis)
                    .addField("よ！", "󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪")
                    .setColor('#00ffca')
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('絵文字')) { //.slice
                var emo = message.content.substr(4);
                var emo2 = message.content.slice(7, -1);
                if (message.content.slice(-1).match("字")) {
                    message.channel.send("絵文字 [何かしらの絵文字]\nって感じで使いなさいよね！")
                    return;
                }
                if (!message.content.slice(0).match(/:/)) {
                    message.channel.send("`" + emo + "`" + `
普通の絵文字だから、IDはないわね`)
                    return;
                }
                message.channel.send(emo2 + `
よ！`);
                return;
            }
            if (message.content.includes('口調')) {
                var kekka = message.content.split(" ");
                if (message.content.slice(2).match(/　/)) {
                    var kekka = message.content.split("　");
                }
                const kuti_1 = kekka[1].replace(/(あっし|我が輩｜我輩|吾輩|吾が輩|わが輩|あっしゃ|わたしゃあ|我|われ｜わたしゃ|あたしゃあ|おらぁ|ミー|わたしゃ|私|わっち|わたし|ワタシ|あたし|アタシ|ワッチ|自分|じぶん|俺様|俺|ぼくちゃん|ぼくちん|俺っち|僕|オレっち|オレ|おれっち|おれ|ぼく|ボク|あたくし|あたい|わて|わい|うち|俺等|己等|おいら|オイラ|おら|オラ|己|おいどん|うら|ぼかぁ)(?=(は|も|と|が|こそ|だ|で|でも|達|の|たち|、))/g, kekka[2])
                const kuti_2 = kuti_1.replace(/(。|？|！|\!|\?|…|\.)/g, kekka[3] + "。")
                if (kuti_2.slice(-1).match("。")) {
                    message.channel.send(kuti_2)
                } else {
                    message.channel.send(kuti_2 + kekka[3])
                }
                return
            }
            if (message.content.includes('解析')) {
                message.channel.send("んー、ちょっと待ってね")
                var Rnull = message.content.replace(/[ 　]/g, "")
                var indico = require('indico.io');
                indico.apiKey = process.env.indico_api_key
                var response = function (res) {
                    message.channel.send(res);
                }
                var logError = function (err) {
                    console.log(err);
                }
                var kekka = message.content.slice(3)
                indico.imageRecognition(kekka)
                    .then(response)
                    .catch(logError);
                return;
            }
            if (message.content.includes('暗号')) {
                if (message.content.slice(-1).match(/号/)) {
                    message.channel.send("暗号の後ろに暗号化したいひらがなぐらい打ちなさいよ！")
                    return;
                }
                var kekka = message.content.split(" ");
                if (message.content.slice(2).match(/　/)) {
                    var kekka = message.content.split("　");
                }
                var b = new Buffer(kekka[1]);
                message.channel.send(b.toString('hex'));
                message.channel.send("そのメッセージは5秒後に消去されます")
                message.delete(5000)
                return;
            }
            if (message.content.includes('解読')) {
                var kekka = message.content.split(" ");
                if (message.content.slice(2).match(/　/)) {
                    var kekka = message.content.split("　");
                }
                var b = new Buffer(kekka[1], 'hex')
                message.channel.send("「__" + b.toString() + `__」\nよっ`);
                message.channel.send("その暗号文は5秒後に消去されます")
                message.delete(5000)
            }
            if (message.content.includes('追加')) {
                var fs = require('fs');
                var kekka = message.content.split(" ");
                if (message.content.slice(2).match(/　/)) {
                    var kekka = message.content.split("　");
                }
                fs.writeFile("test.txt", "aa", (err) => {
                    if (!err) {
                        message.reply("できた");
                    };
                });
                return
            }
            if (message.content.includes('テスト')) {
                var fs = require('fs');
                fs.mkdirSync('app')
                var text = "hoge foo bar";
                fs.writeFileSync('./app/hoge.txt', text);
                return;
            }
            if (message.content.includes('文字')) { //.replace(/(\d|\D)/, kekka[3]+"。")
                var moji = require('kuromoji');
                var kekka = message.content.slice(3)
                var builder = moji.builder({
                    dicPath: 'node_modules/kuromoji/dict'
                });
                builder.build(function (err, tokenizer) {
                    if (err) {
                        throw err;
                    }
                    var tokens = tokenizer.tokenize(kekka);
                    console.dir(tokens);
                    var result = [];
                    for (var i = 0; i < tokens.length; i++) {
                        result.push(`
${tokens[i].surface_form},\
${tokens[i].pos},\
${tokens[i].pos_detail_1},\
${tokens[i].pos_detail_2},\
${tokens[i].pos_detail_3},\
${tokens[i].conjugated_type},\
${tokens[i].conjugated_form}\n`)
                    }
                    var result1 = result.join("")
                    message.channel.send("\`\`\`" + result1 + "\`\`\`");
                })
                return;
            }
            if (message.content.includes('アシタカ')) {
                var fs = require('fs');
                var moji = require('kuromoji');
                var builder = moji.builder({
                    dicPath: 'node_modules/kuromoji/dict'
                });
                class Markov {
                    constructor(n) {
                        this.data = {};
                    }
                    // データ登録
                    add(words) {
                        for (var i = 0; i <= words.length; i++) {
                            var now = words[i];
                            if (now === undefined) {
                                now = null
                            };
                            var prev = words[i - 1];
                            if (prev === undefined) {
                                prev = null
                            };

                            if (this.data[prev] === undefined) {
                                this.data[prev] = [];
                            }
                            this.data[prev].push(now);
                        }
                    }
                    // 指定された文字に続く文字をランダムに返す
                    sample(word) {
                        var words = this.data[word];
                        if (words === undefined) {
                            words = [];
                        }

                        return words[Math.floor(Math.random() * words.length)];
                    }
                    // マルコフ連鎖でつなげた文を返す
                    make() {
                        var sentence = [];
                        var word = this.sample(null);
                        while (word) {
                            sentence.push(word);
                            word = this.sample(word);
                        }
                        return sentence.join('');
                    }
                }

                var markov = new Markov();

                builder.build(function (err, tokenizer) {
                    if (err) {
                        throw err;
                    }

                    // アシタカ先輩の台詞を読み込む
                    fs.readFile('asitaka.txt', 'utf-8', function (err, data) {
                        if (err) {
                            throw err;
                        }

                        var lines = data.split("\n"); // 一行ごとに分割
                        lines.forEach(function (line) {
                            var tokens = tokenizer.tokenize(line);

                            // トークンを文中表記にすべて変換
                            var words = tokens.map(function (token) {
                                return token.surface_form;
                            });

                            // データを登録
                            markov.add(words);
                        });

                        // 10回くらい生成してみる
                        for (var n = 0; n < 10; n++) {
                            message.channel.send(markov.make());
                        }
                    });
                });
                return;
            }
            if (message.content.includes('ツンデレ')) {
                var fs = require('fs');
                var moji = require('kuromoji');
                var builder = moji.builder({
                    dicPath: 'node_modules/kuromoji/dict'
                });
                class Markov {
                    constructor(n) {
                        this.data = {};
                    }
                    // データ登録
                    add(words) {
                        for (var i = 0; i <= words.length; i++) {
                            var now = words[i];
                            if (now === undefined) {
                                now = null
                            };
                            var prev = words[i - 1];
                            if (prev === undefined) {
                                prev = null
                            };

                            if (this.data[prev] === undefined) {
                                this.data[prev] = [];
                            }
                            this.data[prev].push(now);
                        }
                    }
                    // 指定された文字に続く文字をランダムに返す
                    sample(word) {
                        var words = this.data[word];
                        if (words === undefined) {
                            words = [];
                        }

                        return words[Math.floor(Math.random() * words.length)];
                    }
                    // マルコフ連鎖でつなげた文を返す
                    make() {
                        var sentence = [];
                        var word = this.sample(null);
                        while (word) {
                            sentence.push(word);
                            word = this.sample(word);
                        }
                        return sentence.join('');
                    }
                }

                var markov = new Markov();

                builder.build(function (err, tokenizer) {
                    if (err) {
                        throw err;
                    }

                    // アシタカ先輩の台詞を読み込む
                    fs.readFile('tundere.txt', 'utf-8', function (err, data) {
                        if (err) {
                            throw err;
                        }

                        var lines = data.split("\n"); // 一行ごとに分割
                        lines.forEach(function (line) {
                            var tokens = tokenizer.tokenize(line);

                            // トークンを文中表記にすべて変換
                            var words = tokens.map(function (token) {
                                return token.surface_form;
                            });

                            // データを登録
                            markov.add(words);
                        });

                        // 10回くらい生成してみる
                        for (var n = 0; n < 10; n++) {
                            message.channel.send(markov.make());
                        }
                    });
                });
                return;
            }
            if (message.content.includes('中二')) {
                var fs = require('fs');
                var moji = require('kuromoji');
                var builder = moji.builder({
                    dicPath: 'node_modules/kuromoji/dict'
                });
                class Markov {
                    constructor(n) {
                        this.data = {};
                    }
                    // データ登録
                    add(words) {
                        for (var i = 0; i <= words.length; i++) {
                            var now = words[i];
                            if (now === undefined) {
                                now = null
                            };
                            var prev = words[i - 1];
                            if (prev === undefined) {
                                prev = null
                            };

                            if (this.data[prev] === undefined) {
                                this.data[prev] = [];
                            }
                            this.data[prev].push(now);
                        }
                    }
                    // 指定された文字に続く文字をランダムに返す
                    sample(word) {
                        var words = this.data[word];
                        if (words === undefined) {
                            words = [];
                        }

                        return words[Math.floor(Math.random() * words.length)];
                    }
                    // マルコフ連鎖でつなげた文を返す
                    make() {
                        var sentence = [];
                        var word = this.sample(null);
                        while (word) {
                            sentence.push(word);
                            word = this.sample(word);
                        }
                        return sentence.join('');
                    }
                }

                var markov = new Markov();

                builder.build(function (err, tokenizer) {
                    if (err) {
                        throw err;
                    }

                    fs.readFile('tyuuni.txt', 'utf-8', function (err, data) {
                        if (err) {
                            throw err;
                        }

                        var lines = data.split("\n"); // 一行ごとに分割
                        lines.forEach(function (line) {
                            var tokens = tokenizer.tokenize(line);

                            // トークンを文中表記にすべて変換
                            var words = tokens.map(function (token) {
                                return token.surface_form;
                            });

                            // データを登録
                            markov.add(words);
                        });

                        // 10回くらい生成してみる
                        for (var n = 0; n < 10; n++) {
                            message.channel.send(markov.make());
                        }
                    });
                });
                return;
            }
            if (message.content.includes('ラブ')) {
                var fs = require('fs');
                var moji = require('kuromoji');
                var builder = moji.builder({
                    dicPath: 'node_modules/kuromoji/dict'
                });
                class Markov {
                    constructor(n) {
                        this.data = {};
                    }
                    // データ登録
                    add(words) {
                        for (var i = 0; i <= words.length; i++) {
                            var now = words[i];
                            if (now === undefined) {
                                now = null
                            };
                            var prev = words[i - 1];
                            if (prev === undefined) {
                                prev = null
                            };

                            if (this.data[prev] === undefined) {
                                this.data[prev] = [];
                            }
                            this.data[prev].push(now);
                        }
                    }
                    // 指定された文字に続く文字をランダムに返す
                    sample(word) {
                        var words = this.data[word];
                        if (words === undefined) {
                            words = [];
                        }

                        return words[Math.floor(Math.random() * words.length)];
                    }
                    // マルコフ連鎖でつなげた文を返す
                    make() {
                        var sentence = [];
                        var word = this.sample(null);
                        while (word) {
                            sentence.push(word);
                            word = this.sample(word);
                        }
                        return sentence.join('');
                    }
                }

                var markov = new Markov();

                builder.build(function (err, tokenizer) {
                    if (err) {
                        throw err;
                    }

                    fs.readFile('love.txt', 'utf-8', function (err, data) {
                        if (err) {
                            throw err;
                        }

                        var lines = data.split("\n"); // 一行ごとに分割
                        lines.forEach(function (line) {
                            var tokens = tokenizer.tokenize(line);

                            // トークンを文中表記にすべて変換
                            var words = tokens.map(function (token) {
                                return token.surface_form;
                            });

                            // データを登録
                            markov.add(words);
                        });

                        // 10回くらい生成してみる
                        for (var n = 0; n < 10; n++) {
                            message.channel.send(markov.make());
                        }
                    });
                });
                return;
            }
            if (message.content.includes('メモ')) {
                var memo = message.content.substr(3);
                var fs = require('fs');
                var text = memo;
                fs.mkdirSync(memo)
                console.log(fs.accessSync('/' + memo + '/' + memo + '.txt'))
                console.log(process.cwd())
                return;
            }
            if (message.content.includes('心情')) {
                var indico = require('indico.io');
                indico.apiKey = process.env.indico_api_key
                if (message.content.slice(3).match(/[\w]/)) {
                    var response = function (res) {
                        message.channel.send("この文のポジティブ度は...\n__**" + Math.round(res * 100) + "%**__よ！");
                    }
                    var logError = function (err) {
                        console.log(err);
                    }
                    var kekka = message.content.slice(3)
                    indico.sentimentHQ(kekka)
                        .then(response)
                        .catch(logError);
                    return;
                } else {
                    message.channel.send('英語にしなさいよねっ！');
                    return;
                }
            }
            if (message.content.includes('R18')) {
                message.channel.send("んー、ちょっと待ってね")
                var Rnull = message.content.replace(/[ 　]/g, "")
                var indico = require('indico.io');
                indico.apiKey = process.env.indico_api_key
                var response = function (res) {
                    message.channel.send("この画像がR18な可能性は...\n__**" + Math.round(res * 100) + "%**__よ！");
                    if (Math.round(res * 100) >= 70 && Math.round(res * 100) < 90) {
                        message.channel.send("...おまわりさーん！こいつです！")
                    };
                    if (Math.round(res * 100) >= 90 && Math.round(res * 100) < 100) {
                        message.channel.send("ばかばかばかぁ！```画像を削除しました```");
                        message.delete()
                    };
                    if (Math.round(res * 100) >= 100) {
                        message.channel.send("………。```画像を削除しました```");
                        message.delete()
                    }
                }

                var logError = function (err) {
                    console.log(err);
                }
                var kekka = Rnull.slice(4)
                indico.contentFiltering(kekka)
                    .then(response)
                    .catch(logError);
                return;
            }
            if (message.content.includes('チノ')) {
                message.react(client.emojis.find(emoji => emoji.name === "tino"))
                return;
            }
            if (message.content.includes('ココア')) {
                message.react(client.emojis.find(emoji => emoji.name === "kokoa2"))
                return;
            }
            if (message.content.includes('聖魔眼')) {
                var role = message.guild.roles.find(role => role.name === "聖魔眼");
                message.member.addRole(role);
                message.channel.send('うわ、厨二病？痛すぎ。');
                return;
            }
            if (message.content.includes('リンク')) {
                message.channel.send('https://' + 'discordapp.com/channels/' + `${message.guild.id}` + `/` + `${message.channel.id}` + `/` + `${message.id}`);
                return;
            }
            if (message.content.includes('url')) {
                var kekka = message.content.split(" ");
                if (message.content.slice(2).match(/　/)) {
                    var kekka = message.content.split("　");
                }
                var ri = (kekka[1]);
                var nn = (kekka[2]);
                var ku = (kekka[3]);
                message.channel.send(ri);
                var gid = message.guild.channels.map(c => c.id);
                message.channel.send(gid)
                return;
            }
            if (message.content.includes('自信あります')) {
                if (message.member.roles.has(515541999558983685)) {
                    message.channel.send(`Yay, the author of the message has the role!`);
                } else {
                    message.channel.send(`Nope, noppers, nadda.`);
                }
                return;
            }
            if (message.content.includes('調査')) {
                message.channel.send.fetchProfile();
                return;
            }
            if (message.content.includes('my')) {
                message.channel.send(client);
                return;
            }
            if (message.content.includes('サーバー')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカが入ってるサーバーは` + `
全部で` + i + `つね！
`)
                    //     .addField("```" + client.guilds.map(a => a.name) + "```" + `\n` + "よっ", false)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                console.log(client.guilds.map(a => a.name))
                return;
            }
            if (message.content.includes('役職')) {
                const roleID = message.guild.roles.map(r2 => " <@&" + r2.id + ">");
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`このサーバーの役職は`)
                    .setDescription(roleID)
                    .addField("よ！", "󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪")
                    .setColor('#00ffca')
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('三角')) { //$三角 ８ ５ 7
                var sank = message.content.split(" ");
                if (message.content.slice(2).match(/　/)) {
                    var sank = message.content.split("　");
                }
                var cosA = Math.acos(((sank[2] ** 2) + (sank[3] ** 2) - (sank[1] ** 2)) / (2 * sank[2] * sank[3])) * (180 / Math.PI) //  /\
                var cosB = Math.acos(((sank[2] ** 2) + (sank[1] ** 2) - (sank[3] ** 2)) / (2 * sank[2] * sank[1])) * (180 / Math.PI) //5/  \7
                var cosC = Math.acos(((sank[1] ** 2) + (sank[3] ** 2) - (sank[2] ** 2)) / (2 * sank[1] * sank[3])) * (180 / Math.PI) ///_8＿\
                var s = (Number(sank[1]) + Number(sank[2]) + Number(sank[3])) / 2
                var menS = Math.sqrt(s * (s - Number(sank[1])) * (s - Number(sank[2])) * (s - Number(sank[3])))
                message.channel.send("󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪　　　　約" + Math.round(cosA) + "度" + `
　　　　　／A＼
　　 　` + sank[2] + `／ 　 　  ＼` + sank[3] + `
　　　／　　　 　 ＼
　 B／＿＿＿＿＿＿_＼C
約` + Math.round(cosB) + `度　　　` + sank[1] + `　　　約` + Math.round(cosC) + `度。\n面積は` + menS + `よ。これくらい暗算で頑張りなさいよね`);
                return;
            }
            if (message.content.includes('探索')) {
                /*           message.channel.fetchMessages()
                             .then(messages => message.channel.send(`${messages.filter(m => m.author.id === '522394353453367308').size} messages`))
                             .catch(message.channel.send.error);*/
                var rireki = message.channel.fetchMessages({
                    limit: 10
                })
                message.channel.send(rireki)
                return;
            }
            if (message.content.includes('ログ')) {
                message.guild.fetchAuditLogs()
                    .then(audit => console.log(audit.entries.first()))
                    .catch(console.error);
                /*message.channel.fetchMessage('499225689225166858').type(message.content)
                  .then(a => console.log(a.content))
                  .catch(console.error);*/
                return;
            }
            if (message.content.includes('Test')) {
                var Jimp = require("jimp");
                Jimp.read('https://i1.wp.com/sunnystation.info/wp-content/uploads/2016/11/u-tann02.jpg?resize=1024%2C576&ssl=1')
                    .then(image => {
                        console.log(image.resize(250, 250))
                    })
                    .catch(err => {
                        console.log(err)
                    });
                return;
            }
            if (message.content.includes('元気?')) {
                message.channel.send('自分の心配しなさいよね');
                message.react('😧');
                return;
            }
            if (message.content.includes('減った')) {
                message.channel.send('こ、これあげる。ただの残飯処理なんだからね！');
                message.react('🍙');
                return;
            }
            if (message.content.includes('あざ')) {
                message.channel.send('あんたのためじゃないわよ。ついでによ、ついでに');
                return;
            }
            if (message.content.includes('食べよ')) {
                message.channel.send('こ、これあげる。ただの残飯処理なんだからね！');
                message.react('🍙');
                return;
            }
            if (message.content.includes('たべよ')) {
                message.channel.send('こ、これあげる。ただの残飯処理なんだからね！');
                message.react('🍙');
                return;
            }
            if (message.content.includes('部屋')) {
                if (message.content.includes('空いた')) {
                    message.channel.send('あぁ、そうなのね。教えてくれて、ありがと。');
                    return;
                }
            }
            if (message.content.includes('空いた')) {
                message.channel.send('こ、これあげる。ただの残飯処理なんだからね！');
                message.react('🍙');
                return;
            }
            if (message.content.includes('すいた')) {
                message.channel.send('こ、これあげる。ただの残飯処理なんだからね！');
                message.react('🍙');
                return;
            }
            if (message.content.includes('へった')) {
                message.channel.send('こ、これあげる。ただの残飯処理なんだからね！');
                message.react('🍙');
                return;
            }
            if (message.content.includes('痛い')) {
                message.channel.send('大丈夫...？あっ別に心配してるわけじゃないから。');
                return;
            }
            if (message.content.includes('一緒に寝よ')) {
                message.channel.send('一人で寝ることもできないお子様なの？………仕方ないわね、少しだけよ？少しだけ。');
                return;
            }
            if (message.content.includes('一緒にねよ')) {
                message.channel.send('一人で寝ることもできないお子様なの？………仕方ないわね、少しだけよ？少しだけ。');
                return;
            }
            if (message.content.includes('いっしょに寝よ')) {
                message.channel.send('一人で寝ることもできないお子様なの？………仕方ないわね、少しだけよ？少しだけ。');
                return;
            }
            if (message.content.includes('バルス')) {
                message.channel.send('スピカはムスカ大佐じゃない！');
                return;
            }
            if (message.content.includes('いっしょにねよ')) {
                message.channel.send('一人で寝ることもできないお子様なの？………仕方ないわね、少しだけよ？少しだけ。');
                return;
            }
            if (message.content.includes('かわいそ')) {
                message.channel.send('ん？スピカは今けっこー幸せよ？');
                return;
            }
            if (message.content.includes('かわい')) {
                message.channel.send('！？な、何言ってんのよ、もう');
                return;
            }
            if (message.content.includes('かわいた')) {
                message.channel.send('ダレよそれっ！');
                return;
            }
            if (message.content.includes('いたいだ')) {
                message.channel.send('ダレよそれっ');
                return;
            }
            if (message.content.includes('いたい')) {
                message.channel.send('大丈夫...？あっ別に心配してるわけじゃないから。');
                return;
            }
            if (message.content.includes('よろ')) {
                message.channel.send('ん。よろしく。');
                return;
            }
            //          if (message.content === ('how to embed')) {
            //let bottest1 = Discord.RichEmbed()
            //   .setTitle('スピカだよっ')
            // .setColor(0xffff0000)
            //.setDescription('テストだよ！これからもよろしくねっ');
            //message.channel.send(bottest1);
            //    }
            if (message.content.includes('不思議')) {
                message.channel.send('不思議なことって、あるわよね。');
                message.react('❓');
                return;
            }
            if (message.content.includes('あは')) {
                message.channel.send(`どうしたっていうの？`);
                return;
            }
            if (message.content.includes('ふひ')) {
                message.channel.send(`...あぁ、とうとう壊れたのね。そろそろかと思ってったわ`);
                return;
            }
            if (message.content.includes('腐')) {
                message.channel.send('おっと、それ以上言っちゃいけない気がするわ。');
                return;
            }
            if (message.content.includes('死ぬな')) {
                message.channel.send('スピカは不死身よ！あんたこそ、スピカより先にくたばったら承知しないんだからね');
                return;
            }
            if (message.content.includes('ﾀﾋぬな')) {
                message.channel.send('スピカは不死身よ！あんたこそ、スピカより先にくたばったら承知しないんだからね');
                return;
            }
            if (message.content.includes('面倒')) {
                var responce = [
                    'が、頑張りなさいよ',
                    'てっ、手伝だってあげる',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('めんど')) {
                var responce = [
                    'が、頑張りなさいよ',
                    'てっ、手伝だってあげる',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('やあ')) {
                message.channel.send('ん。');
                message.react('🙌');
                return;
            }
            if (message.content.includes('やぁ')) {
                message.channel.send('ん。');
                message.react('🙌');
                return;
            }
            if (message.content.includes('ヤア')) {
                message.channel.send('ん。');
                message.react('🙌');
                return;
            }
            if (message.content.includes('ヤァ')) {
                message.channel.send('ん。');
                message.react('🙌');
                return;
            }
            if (message.content.includes('ランダム人')) {
                message.channel.send("５　<@" + (Math.floor(Math.random() * (500000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                message.channel.send("４　<@" + (Math.floor(Math.random() * (500000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                message.channel.send("３　<@" + (Math.floor(Math.random() * (500000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                message.channel.send("２　<@" + (Math.floor(Math.random() * (500000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                message.channel.send("１　<@" + (Math.floor(Math.random() * (500000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                return;
            }
            if (message.content.includes('ランダムチャンネル')) {
                message.channel.send("Discord上にある__すべての__チャンネルを...いうかもしれないわ。大抵は`#deleted-channel`ね。")
                message.channel.send("５　<#" + (Math.floor(Math.random() * (420000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                message.channel.send("４　<#" + (Math.floor(Math.random() * (420000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                message.channel.send("３　<#" + (Math.floor(Math.random() * (420000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                message.channel.send("２　<#" + (Math.floor(Math.random() * (420000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                message.channel.send("１　<#" + (Math.floor(Math.random() * (420000000) + 100000000) + '') + (Math.floor(Math.random() * (900000000) + 100000000) + '') + ">");
                return;
            }
            if (message.content.includes('ランダムひらがな')) {
                var l = parseInt(message.content.slice(9), 10);
                var ll = (message.content.slice(-1));
                var c = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽゃゅょっ";
                var cl = c.length;
                if (ll == 'な') {
                    var l = 8;
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                } else if (l > 2000) {
                    message.channel.send(`ちょっと大きすぎて返信できないわ...
2000字以内にしなさいよね！`);
                    return;
                } else {
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                }
            }
            if (message.content.includes('ランダム英語')) {
                var l = parseInt(message.content.slice(7), 10);
                var ll = (message.content.slice(-1));
                var c = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
                var cl = c.length;
                if (ll == '語') {
                    var l = 8;
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                } else if (l > 2000) {
                    message.channel.send(`ちょっと大きすぎて返信できないわ...
2000字以内にしなさいよね！`);
                    return;
                } else {
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                }
            }
            if (message.content.includes('ランダムサイコロ')) {
                var l = parseInt(message.content.slice(9), 10);
                var ll = (message.content.slice(-1));
                var ary = new Array("1　", "2　", "3　", "4　", "5　", "6　");
                var cl = ary.length;
                if (ll == 'ロ') {
                    var l = 1;
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += ary[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                } else if (l > 1000) {
                    message.channel.send(`ちょっと大きすぎて返信できないわ...
1000以内にしなさいよね！`);
                    return;
                } else {
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += ary[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                }
            }
            if (message.content.includes('ランダム数字')) {
                var l = parseInt(message.content.slice(7), 10);
                var ll = (message.content.slice(-1));
                var c = "1234567890";
                var cl = c.length;
                if (ll == '字') {
                    var l = 8;
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                } else if (l > 2000) {
                    message.channel.send(`ちょっと大きすぎて返信できないわ...
2000字以内にしなさいよね！`);
                    return;
                } else {
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                }
            }
            if (message.content.includes('ランダムカタカナ')) {
                var l = parseInt(message.content.slice(9), 10);
                var ll = (message.content.slice(-1));
                var c = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポャュョッ";
                var cl = c.length;
                if (ll == 'ナ') {
                    var l = 8;
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                } else if (l > 2000) {
                    message.channel.send(`ちょっと大きすぎて返信できないわ...
2000字以内にしなさいよね！`);
                    return;
                } else {
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                }
            }
            if (message.content.includes('ランダムハングル')) {
                var l = parseInt(message.content.slice(9), 10);
                var ll = (message.content.slice(-1));
                var c = `아이우에오하히후헤호카가키기쿠구케게코고마미무메모사시스세소야유요타다치지츠즈테데토도라리루레로나니누네노와파바피비푸부페베포보캬갸큐규쿄교샤슈쇼차자추주초조냐뉴뇨햐휴효퍄뱌퓨뷰표뵤먀뮤묘랴류료`;
                var cl = c.length;
                if (ll == 'ル') {
                    var l = 8;
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                } else if (l > 2000) {
                    message.channel.send(`ちょっと大きすぎて返信できないわ...
2000字以内にしなさいよね！`);
                    return;
                } else {
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                }
            }
            if (message.content.includes('ランダムインド')) {
                var l = parseInt(message.content.slice(8), 10);
                var ll = (message.content.slice(-1));
                var c = "अइउऋऌआईऊॠṝॡḹएओऐऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहकिकुकृकॢकाकूकॄकॣकेकै ं ँ ः१२३४५६७८९०";
                var cl = c.length;
                if (ll == 'ド') {
                    var l = 8;
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                } else if (l > 2000) {
                    message.channel.send(`ちょっと大きすぎて返信できないわ...
2000字以内にしなさいよね！`);
                    return;
                } else {
                    var r = "";
                    for (var i = 0; i < l; i++) {
                        r += c[Math.floor(Math.random() * cl)];
                    }
                    message.channel.send(r);
                    return;
                }
            }
            if (message.content.substring(1).startsWith('ランダム色')) {
                const randomColor = "#000000".replace(/0/g, function () {
                    return (~~(Math.random() * 16)).toString(16);
                });
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`←この色が出たわ！
` + `(` + randomColor + `)`)
                    .setColor(randomColor)
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.slice(-1).match(/色/)) {
                message.channel.send(`数字も打てないおバカさんなの？
` + "```$色 赤色の数字 緑色の数字 青色の数字```" + `
って感じでやりなさいよね`);
                return;
            }
            if (message.content.includes('色#')) {
                if (message.content.slice(-1).match(/[#][]/)) {
                    message.channel.send(`16進数も打てないおバカさんなの？
` + "```$色#[赤色の数字][緑色の数字][青色の数字]```" + `
って感じでやりなさいよね
[]はいらないわ`);
                    return;
                }
            }
            if (message.content.includes('色#')) {
                var iro = (message.content.slice(3));
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`←この色が出たわ！！
` + `(#` + iro + `)`)
                    .setColor(iro)
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.substring(1).startsWith('色')) {
                var kekka = message.content.split(" ");
                if (message.content.slice(2).match(/　/)) {
                    var kekka = message.content.split("　");
                }
                var red = parseInt(kekka[1]).toString(16);
                var gre = parseInt(kekka[2]).toString(16);
                var bru = parseInt(kekka[3]).toString(16);
                if (parseInt(kekka[1]) > 255 || parseInt(kekka[1]) < 0 || parseInt(kekka[2]) > 255 || parseInt(kekka[2]) < 0) {
                    message.channel.send("数字は0〜255にしてよね！")
                    return;
                }
                if (parseInt(kekka[3]) > 255 || parseInt(kekka[3]) < 0) {
                    message.channel.send("数字は0〜255にしてよね！")
                    return;
                }
                if (kekka[1].match(/\D/) || kekka[2].match(/\D/) || kekka[3].match(/\D/)) {
                    message.channel.send("半角数字にしなさいよね！")
                    return;
                }
                if (parseInt(kekka[1]) === 0) {
                    red = "00"
                }
                if (parseInt(kekka[2]) === 0) {
                    gre = "00"
                }
                if (parseInt(kekka[3]) === 0) {
                    bru = "00"
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`←この色が出たわ！
` + `(#` + red + gre + bru + `)`)
                    .setColor(red + gre + bru)
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('スピカの確率')) {
                var c = "スピカ";
                var cl = c.length;
                var l = 3;
                var r = "";

                function sleep(waitSec, callbackFunc) {
                    var spanedSec = 0;
                    var id = setInterval(function () {
                        spanedSec++;
                        if (spanedSec >= waitSec) {
                            clearInterval(id);
                            if (callbackFunc) callbackFunc();
                        }
                    }, 1000);
                }
                sleep(1, function () {
                    r += c[Math.floor(Math.random() * cl)];
                    message.channel.send(r);
                    sleep(1, function () {
                        r += c[Math.floor(Math.random() * cl)];
                        message.channel.send(r);
                        sleep(1, function () {
                            r += c[Math.floor(Math.random() * cl)];
                            message.channel.send(r);
                            sleep(1, function () {
                                message.channel.send(`「スピカ」と出る確率は約3.7%！
どうだった？`);
                                return;
                            });
                            return;
                        });
                        return;
                    });
                    return;
                });
                return;
            }
            if (message.content.includes('数字')) {
                if (message.content.slice(-1).match(/[02468０２４６８]/)) {
                    message.channel.send('それは、、、偶数ね！');
                    return;
                } else if (message.content.slice(-1).match(/[13579１３５７９]/)) {
                    message.channel.send('それは、、、奇数ね！');
                    return;
                } else {
                    message.channel.send('数字も打てないおバカさんなの？');
                    return;
                }
            }
            if (message.content.match(/\d+(?=([-+*/]))/)) {
                if (!message.content.match(/\d+(?=([-+*/]))/)) return; //電卓
                var dentaku = message.content.slice(1);
                message.channel.send(eval(dentaku))
                return;
            }
            if (message.content.includes('進数')) {
                if (message.content.slice(-1).match(/数/)) {
                    message.channel.send('数字も打てないおバカさんなの？');
                    return;
                }
            }
            if (message.content.includes('二進数')) {
                var tesu = parseInt(message.content.slice(4), 10);
                var nisin = tesu.toString(2);
                message.channel.send('それは、、、' + `
` + nisin + `
` + 'になるわね！')
                return;
            }
            if (message.content.includes('三進数')) {
                var tesu = parseInt(message.content.slice(4), 10);
                var nisin = tesu.toString(3);
                message.channel.send('それは、、、' + `
` + nisin + `
` + 'になるわね！')
                return;
            }
            if (message.content.includes('四進数')) {
                var tesu = parseInt(message.content.slice(4), 10);
                var nisin = tesu.toString(4);
                message.channel.send('それは、、、' + `
` + nisin + `
` + 'になるわね！')
                return;
            }
            if (message.content.includes('五進数')) {
                var tesu = parseInt(message.content.slice(4), 10);
                var nisin = tesu.toString(5);
                message.channel.send('それは、、、' + `
` + nisin + `
` + 'になるわね！')
                return;
            }
            for (var ループ = 37; ループ <= 39; ループ++)
                if (message.content.includes(ループ + '進数')) {
                    message.channel.send('それは、、、' + `
` + `計算できないわよ！` + `
` + '__1~36__にしてちょうだい！')
                    return;
                }
            for (var ruupu = 10; ruupu <= 36; ruupu++)
                if (message.content.includes(ruupu + '進数')) {
                    var gobigobi = parseInt(message.content.slice(5), 10);
                    var hennkann = gobigobi.toString(ruupu);
                    message.channel.send('それは、、、' + `
` + hennkann + `
` + 'になるわね！')
                    return;
                }
            for (var i = 1; i <= 9; i++)
                if (message.content.includes(i + '進数')) {
                    var tesu = parseInt(message.content.slice(4), 10);
                    var nsinnsuu = tesu.toString(i);
                    message.channel.send('それは、、、' + `
` + nsinnsuu + `
` + 'になるわね！')
                    return;
                }
            if (message.content.includes('進数')) {
                if (message.content.slice(1).match(/[-0456789]/)) {
                    message.channel.send('それは、、、' + `
` + `計算できないわよ！
__1~36__にしてちょうだい！`)
                    return;
                }
            }
            for (var ループ2 = 37; ループ2 <= 39; ループ2++)
                if (message.content.includes(ループ2 + '変換')) {
                    message.channel.send('それは、、、' + `
` + `計算できないわよ！` + `
` + '__1~36__にしてちょうだい！')
                    return;
                }
            if (message.content.includes('変換')) {
                if (message.content.slice(-1).match(/換/)) {
                    message.channel.send('数字も打てないおバカさんなの？');
                    return;
                }
            }
            for (var i3 = 10; i3 <= 36; i3++)
                if (message.content.includes(i3 + '変換')) {
                    var tesu3 = parseInt(message.content.slice(5), i3);
                    var henkan3 = tesu3.toString(10);
                    message.channel.send('それは、、、' + `
` + henkan3 + `
` + 'になるわね！');
                    return;
                }
            for (var i2 = 1; i2 <= 9; i2++)
                if (message.content.includes(i2 + '変換')) {
                    var tesu2 = parseInt(message.content.slice(4), i2);
                    var henkan2 = tesu2.toString(10);
                    message.channel.send('それは、、、' + `
` + henkan2 + `
` + 'になるわね！');
                    return;
                }
            if (message.content.includes('変換')) {
                if (message.content.slice(1).match(/[-0456789]/)) {
                    message.channel.send('それは、、、' + `
` + `計算できないわよ！
__1~36__にしてちょうだい！`)
                    return;
                }
            }
            for (var i4 = 10; i4 <= 36; i4++)
                for (var i5 = 10; i5 <= 36; i5++)
                    if (message.content.includes(i4 + 'を' + i5)) {
                        var tesu3 = parseInt(message.content.slice(7), i4);
                        var henkan3 = tesu3.toString(i5);
                        message.channel.send('それは、、、' + `
` + henkan3 + `
` + 'になるわね！');
                        return;
                    }
            for (var i6 = 10; i6 <= 36; i6++)
                for (var i7 = 1; i7 <= 9; i7++)
                    if (message.content.includes(i6 + 'を' + i7)) {
                        var tesu3 = parseInt(message.content.slice(6), i6);
                        var henkan3 = tesu3.toString(i7);
                        message.channel.send('それは、、、' + `
` + henkan3 + `
` + 'になるわね！');
                        return;
                    }
            for (var i8 = 1; i8 <= 9; i8++)
                for (var i9 = 10; i9 <= 36; i9++)
                    if (message.content.includes(i8 + 'を' + i9)) {
                        var tesu3 = parseInt(message.content.slice(6), i8);
                        var henkan3 = tesu3.toString(i9);
                        message.channel.send('それは、、、' + `
` + henkan3 + `
` + 'になるわね！');
                        return;
                    }
            for (var i10 = 1; i10 <= 9; i10++)
                for (var i11 = 1; i11 <= 9; i11++)
                    if (message.content.includes(i10 + 'を' + i11)) {
                        var tesu3 = parseInt(message.content.slice(5), i10);
                        var henkan3 = tesu3.toString(i11);
                        message.channel.send('それは、、、' + `
` + henkan3 + `
` + 'になるわね！');
                        return;
                    }
            if (message.content.includes('無視')) {
                message.channel.send('あんたに時間をさいてやってるだけありがたいと思いなさいよねっ');
                return;
            }
            if (message.content.includes('あげる')) {
                message.channel.send('べ、別にいいわよそんなことしなくたって');
                return;
            }
            if (message.content.includes('あっざ')) {
                message.channel.send('あんたのためじゃないわよ。ついでによ、ついで');
                return;
            }
            if (message.content.includes('なるほ')) {
                message.channel.send('やっとわかったの？');
                return;
            }
            if (message.content.includes('冗談じゃ')) {
                message.channel.send('じょ、冗談じゃないの？');
                return;
            }
            if (message.content.includes('冗談だ')) {
                message.channel.send('そ、そうよね、びっくりしたわ...');
                return;
            }
            if (message.content.includes('冗談で')) {
                message.channel.send('そ、そうよね。びっくりしたぁ...');
                return;
            }
            if (message.content.includes('ってば')) {
                message.channel.send('そうよね。');
                return;
            }
            if (message.content.includes('なんでもない')) {
                message.channel.send('スピカの暇つぶし相手なんだから、隠し事なんかしないでよね？')
                return;
            }
            if (message.content.includes('風呂')) {
                message.channel.send('………そういえば、スピカも体が冷えてきたわっ');
                message.react('🛁');
                return;
            }
            if (message.content.includes('大丈夫？')) {
                message.channel.send('別に普通だけど');
                return;
            }
            if (message.content.includes('平気？')) {
                message.channel.send('別に普通だけにょ....何も聞いてないわよね！？');
                return;
            }
            if (message.content.includes('家族')) {
                if (message.content.includes('?')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                if (message.content.includes('？')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                if (message.content.includes('教えて')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                if (message.content.includes('おしえて')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                if (message.content.includes('何')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                return;
            }
            if (message.content.includes('かぞく')) {
                if (message.content.includes('?')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                if (message.content.includes('？')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                if (message.content.includes('教えて')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                if (message.content.includes('おしえて')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                if (message.content.includes('何')) {
                    message.channel.send(`……${message.member.nickname}とスピカだけよっ`);
                }
                return;
            }
            if (message.content.includes('父')) {
                message.channel.send('仕方ないわね。あんたが今日からパ...お父さんでいいわよ');
                return;
            }
            if (message.content.includes('母')) {
                message.channel.send('仕方ないわね。あんたが今日からパ...お父さんでいいわよ');
                return;
            }
            if (message.content.includes('男')) {
                if (message.content.includes('?')) {
                    message.channel.send('女に決まってるでしょ！ばっかじゃないの？');
                }
                if (message.content.includes('？')) {
                    message.channel.send('女に決まってるでしょ！ばっかじゃないの？');
                }
                return;
            }
            if (message.content.includes('女')) {
                if (message.content.includes('?')) {
                    message.channel.send('女に決まってるでしょ！ばっかじゃないの？');
                }
                if (message.content.includes('？')) {
                    message.channel.send('女に決まってるでしょ！ばっかじゃないの？');
                }
                return;
            }
            if (message.content.includes('性別')) {
                if (message.content.includes('?')) {
                    message.channel.send('女に決まってるでしょ！ばっかじゃないの？');
                }
                if (message.content.includes('？')) {
                    message.channel.send('女に決まってるでしょ！ばっかじゃないの？');
                }
                if (message.content.includes('何')) {
                    message.channel.send('女に決まってるでしょ！ばっかじゃないの？');
                }
                return;
            }
            if (message.content.includes('感情')) {
                message.channel.send(`スピカにだって感情ぐらいあるわよ！

...絶対に、あるわよ！`);
                return;
            }
            if (message.content.includes('呼んでない')) {
                message.channel.send('あ、あれ？そうだったかしら？');
                return;
            }
            if (message.content.includes('呼んで無い')) {
                message.channel.send('あ、あれ？そうだったかしら？');
                return;
            }
            if (message.content.includes('よんでない')) {
                message.channel.send('あ、あれ？そうだったかしら？');
                return;
            }
            if (message.content.includes('よんで無い')) {
                message.channel.send('あ、あれ？そうだったかしら？');
                return;
            }
            if (message.content.includes('読んでない')) {
                message.channel.send('誤字は草wwwwwwwww     By育ての親');
                message.react('😆');
                return;
            }
            if (message.content.includes('読んで無い')) {
                message.channel.send('誤字は草wwwwwwwww     By育ての親');
                message.react('😆');
                return;
            }
            if (message.content.includes('薄い')) {
                message.channel.send('わ、悪かったわね');
                return;
            }
            if (message.content.includes('ちゃんかわい')) {
                message.channel.send('Wエンジンなんてどうでもいいからっ！');
                return;
            }
            if (message.content.includes('いえいえ')) {
                message.channel.send('なにかしこまってるのよ');
                return;
            }
            if (message.content.includes('イエイ')) {
                message.react('🙌');
                message.channel.send('い、いえーい！');
                return;
            }
            if (message.content.includes('いぇい')) {
                message.channel.send('い、いえーい！');
                message.react('🙌');
                return;
            }
            if (message.content.includes('いえい')) {
                message.channel.send('い、いえーい！');
                message.react('🙌');
                return;
            }
            if (message.content.includes('イェイ')) {
                message.channel.send('い、いえーい！');
                message.react('🙌');
                return;
            }
            if (message.content.includes('いぇーい')) {
                message.channel.send('...........なにやってるの？');
                return;
            }
            if (message.content.includes('イェーイ')) {
                message.channel.send('...........なにやってるの？');
                return;
            }
            if (message.content.includes('いちご')) {
                message.react('🍓');
                return;
            }
            if (message.content.includes('おむすび')) {
                message.react('🍙');
                return;
            }
            if (message.content.includes('おにぎり')) {
                message.react('🍙');
                return;
            }
            if (message.content.includes('イェーイ')) {
                message.channel.send('い、いえーい！');
                message.react('🙌');
                return;
            }
            if (message.content.includes('いえーい')) {
                message.channel.send('...........なにやってるの？');
                return;
            }
            if (message.content.includes('イエーイ')) {
                message.channel.send('い、いえーい！');
                message.react('🙌');
                return;
            }
            if (message.content.includes('文字化け')) {
                message.channel.send('�������������������������������');
                message.react('❓');
                return;
            }
            if (message.content.includes('遊ぼ')) {
                message.channel.send('その歳になってまだ遊びたいの？...まぁ、いいけど。');
                message.react('🎮');
                return;
            }
            if (message.content.includes('そう？')) {
                var responce = [
                    'そうよ',
                    '多分だけどね'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('天使')) {
                message.channel.send('は、はぁ！？何言ってんのよ...');
                return;
            }
            if (message.content.includes('神')) {
                message.channel.send('神なわけないじゃないっ！もし神だったらこの気持ちだって.....なんでもないっ！');
                return;
            }
            if (message.content.includes('結婚')) {
                message.channel.send('スピカ、小学生なんだけど。このロリコンめ！');
                message.react('✨');
                return;
            }
            if (message.content.includes('付き合')) {
                message.channel.send('！？！？…………………まさか、聞き間違いよね...');
                return;
            }
            if (message.content.includes('聞き間違い')) {
                message.channel.send('え！？………じゃ、じゃあ、まさか………？');
                return;
            }
            if (message.content.includes('はいはい')) {
                message.channel.send('「はい」は一回でいいのよっ');
                return;
            }
            if (message.content.includes('！？')) {
                message.channel.send('なんかあったの？');
                message.react('❓');
                return;
            }
            if (message.content.includes('!?')) {
                message.channel.send('なんかあったの？');
                message.react('❓');
                return;
            }
            if (message.content.includes('...')) {
                message.channel.send('なんかしゃべりなさいよ・・・間が持たないでしょ！');
                return;
            }
            if (message.content.includes('…')) {
                message.channel.send('なんかしゃべりなさいよ・・・間が持たないでしょ！');
                return;
            }
            if (message.content.includes('そうなの？')) {
                message.channel.send('そうったらそうなの！');
                return;
            }
            if (message.content.includes('生まれ')) {
                var responce = [
                    `${message.author.username}には教えてあげない！`,
                    "生まれも育ちもDiscordよっ",
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes("好")) {
                if (message.content.includes("色")) {
                    var responce = [
                        `${message.member.nickname}には教えてあげない！`,
                        `うーん、何て説明すればいいのかしら...........もう、${message.member.nickname}の好きな色と同じでいいわ`,
                    ]
                    message.channel.send(responce[global.randomInt(responce.length)]);
                    return;
                }
            }
            if (message.content.includes("体重")) {
                var responce = [
                    `${message.member.nickname}にだけはぜええったいに教えてあげない！`,
                    `まずそのスマホだかアンドロイドだかPCだか知らないけど
それを持って体重計に乗って。そのあと、${message.member.nickname}の体重を引けばそれがスピカの体重よっ`,
                    `スピカの体重は妖精が振りまくキラキラしたやつひとつまみ分くらいね`,
                    `仕方ないわね、特別に教えてあげる。耳貸しなさい。`
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes("デブ")) {
                var responce = [
                    `...ぶっ殺すわよ？`,
                    `………。`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes("動物")) {
                var responce = [
                    `${message.member.nickname}が好きかしら。
${message.member.nickname}なんて動物同然よっ`,
                    `スピカは猫派よっ`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes("猫")) {
                var responce = [
                    `ずっとネズミを追い続けてる、あのグレーの猫嫌いじゃないわ`,
                    `前に、迷子の子猫ちゃんを見かけたことがあったわ。
犬のおまわりさんが困ってたわね`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes("猫")) {
                var responce = [
                    `ずっとネズミを追い続けてる、あのグレーの猫嫌いじゃないわ`,
                    `前に、迷子の子猫ちゃんを見かけたことがあったわ。
犬のおまわりさんが困ってたわね`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('乙')) {
                var responce = [
                    `一人にしないでよね。待ってるのって結構辛いんだから。。。一緒に寝てくれるんだったら許してあげるっ`,
                    `……一緒に寝る。。。ひ、暇だったから一緒に行くだけだからね！`
                ]
                message.react('💤');
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('おつ')) {
                var responce = [
                    `一人にしないでよね。待ってるのって結構辛いんだから。。。一緒に寝てくれるんだったら許してあげるっ`,
                    `……一緒に寝る。。。ひ、暇だったから一緒に行くだけだからね！`
                ]
                message.react('💤');
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('寝ます')) {
                var responce = [
                    `一人にしないでよね。待ってるのって結構辛いんだから。。。一緒に寝てくれるんだったら許してあげるっ`,
                    `……一緒に寝る。。。ひ、暇だったから一緒に行くだけだからね！`
                ]
                message.react('💤');
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ねます')) {
                var responce = [
                    `一人にしないでよね。待ってるのって結構辛いんだから。。。一緒に寝てくれるんだったら許してあげるっ`,
                    `……一緒に寝る。。。ひ、暇だったから一緒に行くだけだからね！`
                ]
                message.react('💤');
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ニタ')) {
                var responce = [
                    'え、きも',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('しゅごい')) {
                var responce = [
                    'そう言ってくれるとありがたいですね  By育ての親',
                    'ふんっ。見え透いたお世辞ね'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何歳')) {
                var responce = [
                    `スピカ？...１０才よっ！
教えてあげたんだから、誕生日になったらなんかちょうだいよね。`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何才')) {
                var responce = [
                    `スピカ？...１０才よっ！
教えてあげたんだから、誕生日になったらなんかちょうだいよね。`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('誕生日')) {
                var responce = [
                    `スピカの誕生日………9月の8日よっ
教えてあげたんだから、忘れたら承知しないんだから！`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('誰')) {
                var responce = [
                    'スピカの名前は、__スピカ__っていうの。まぁ、よろしく。',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('和露多')) {
                var responce = [
                    'わ、笑わないでよっ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ワロタ')) {
                var responce = [
                    'わ、笑わないでよっ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('わろた')) {
                var responce = [
                    'わ、笑わないでよっ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('しらね')) {
                var responce = [
                    'それぐらい知っておきなさいよね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('シラネ')) {
                var responce = [
                    'それぐらい知っておきなさいよね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('小学')) {
                var responce = [
                    '小学校4年生だけど、悪い？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('仮の名')) {
                var responce = [
                    `スピカ、多分あんたとあったの初めてなんだけど。れ、礼儀として、名前ぐらい教えなさいよね。

「！〇〇って呼んで」と打ってください`
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('名無し')) {
                var responce = [
                    `スピカ、多分あんたとあったの初めてなんだけど。れ、礼儀として、名前ぐらい教えなさいよね。

「！〇〇って呼んで」と打ってください`
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('君の名')) {
                var responce = [
                    `ネタが古いわよっ`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('デート')) {
                var responce = [
                    `スピカ、小学生なんだけど？このロリコンめっ！`,
                    `で、デート！？そ、そんなことできるわけないじゃない！冗談も休み休み言いなさいよ！`
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('下ネタ')) {
                var responce = [
                    `ばっかじゃないの？は？小学せ生？`
                    `し、下ネタって...バカじゃないの？//`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ロリコン')) {
                var responce = [
                    'え、きも',
                    `**お巡りさん！${info.name}です！**`
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('夢の国')) {
                var responce = [
                    `ネズミーランドいいわよね！スピカも、あそこ大好きなんだ！！
………今度、連れてってよね`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('絶頂')) {
                var responce = [
                    'え、きも',
                    `**お巡りさん！${info.name}です！**`
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('魔法少女')) {
                var responce = [
                    `@${info.name}はキュウべえじゃないでしょ？`,
                    `ま、魔法少女、スピk.......なんでもないわ！忘れなさい！今すぐに！いいわね！？`
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ヤろ')) {
                var responce = [
                    'ん？何をやりたいの？今、たまたま暇だったから付き合ってあげてもいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('やろ')) {
                var responce = [
                    'ん？何をやりたいの？今、たまたま暇だったから付き合ってあげてもいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('わーい')) {
                var responce = [
                    `ったく、何喜んでんのよ、${info.name}`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('眠い')) {
                var responce = [
                    `スピカも、少し眠くなってきちゃったわ....`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ベット')) {
                var responce = [
                    'ベット？急にどうしたのよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ﾍﾞｯﾄ')) {
                var responce = [
                    'ベット？急にどうしたのよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('えぇ')) {
                var responce = [
                    `なんかあったの？${info.name}。また変なことしたんじゃないでしょうね？`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ええ')) {
                var responce = [
                    `なんかあったの？${info.name}。また変なことしたんじゃないでしょうね？`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('亞祖母')) {
                var responce = [
                    `あ、あんたにあげる時間なんてないわ！`,
                    `いいよ！......運動不足解消のついでなんだからね！`,
                    `いい歳してまだ遊びたいの？……ま、いいけど`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ひざまくら')) {
                message.channel.send('……………………今足が疲れてたから、マッサージ機代わりに頭乗っけてあげるわ。感謝しなさいよねっ！');
                return;
            }
            if (message.content.includes('膝枕')) {
                message.channel.send('……………………今足が疲れてたから、マッサージ機代わりに頭乗っけてあげるわ。感謝しなさいよねっ！');
                return;
            }
            if (message.content.includes('ひざ枕')) {
                message.channel.send('……………………今足が疲れてたから、マッサージ機代わりに頭乗っけてあげるわ。感謝しなさいよねっ！');
                return;
            }
            if (message.content.includes('膝まくら')) {
                message.channel.send('……………………今足が疲れてたから、マッサージ機代わりに頭乗っけてあげるわ。感謝しなさいよねっ！');
                return;
            }
            if (message.content.includes('かわいく')) {
                var responce = [
                    `え？………………………じょ、冗談よね？`
                    `……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('可愛く')) {
                var responce = [
                    `え？………………………じょ、冗談よね？`
                    `……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('可愛いく')) {
                var responce = [
                    `え？………………………じょ、冗談よね？`
                    `……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('許して')) {
                var responce = [
                    'し、仕方ないわね、今回だけよ？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }

            if (message.content.includes('ヤら')) {
                var responce = [
                    'ん？何をやりたいの？今、ちょうど時間が空いたから一緒に遊んであげてもいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('やら')) {
                var responce = [
                    'ん？何をやりたいの？今、ちょうど時間が空いたから一緒に遊んであげてもいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ヴォイ')) {
                var responce = [
                    'ちょっと何言ってるかわからないわ...',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('あい')) {
                var responce = [
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！',
                    'すっ...な、なに言ってんのよ、もう'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('愛')) {
                var responce = [
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！',
                    'すっ...な、なに言ってんのよ、もう'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('LOVE')) {
                var responce = [
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！',
                    'すっ...な、なに言ってんのよ、もう'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('Love')) {
                var responce = [
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！',
                    'すっ...な、なに言ってんのよ、もう'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('love')) {
                var responce = [
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！',
                    'すっ...な、なに言ってんのよ、もう'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ぶち')) {
                var responce = [
                    'え？………………………じょ、冗談よね？',
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ'
                ]
                message.delete(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('そうじゃな')) {
                var responce = [
                    `あ、違った？...${info.name}の説明の仕方が悪かったのよ`,
                ]
                message.delete(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('いいえ')) {
                var responce = [
                    `あ、違った？...${info.name}の説明の仕方が悪かったのよ`,
                ]
                message.delete(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('死')) {
                var responce = [
                    'え？………………………じょ、冗談よね？',
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ'
                ]
                message.delete(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('おっぱい')) {
                var responce = [
                    'は？小学生？'
                ]
                message.delete(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('thank')) {
                var responce = [
                    'your welcome.Please appreciate to me！'
                ]
                message.delete(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('そっか')) {
                var responce = [
                    'ええ',
                    'うん',
                    'そうよ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('カップ')) {
                var responce = [
                    `カカカカカップ！？そんな、Aだなんて${info.name}に言えるわけない…………じゃ……何も聞いてないわよねっ！？`,
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('円周率')) {
                var responce = [
                    `3. 1415926535 8979323846 2643383279 5028841971 6939937510 5820974944... ね。
四捨五入で3.14よ`
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ﾆﾀ')) {
                var responce = [
                    'え、きも',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('へぇ')) {
                var responce = [
                    'やっとわかったの？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('卍')) {
                var responce = [
                    'ネタが古いわよ....',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('まんじ')) {
                var responce = [
                    'ネタが古いわよ....',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('眠い？')) {
                var responce = [
                    '別に、今は平気……`あんたが起きてる間は、平気`(ボソッ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('眠い?')) {
                var responce = [
                    '別に、今は平気……`あんたが起きてる間は、平気`(ボソッ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ねむい？')) {
                var responce = [
                    '別に、今は平気……`あんたが起きてる間は、平気`(ボソッ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ねむい?')) {
                var responce = [
                    '別に、今は平気……`あんたが起きてる間は、平気`(ボソッ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('(´・ω・`)')) {
                var responce = [
                    'しょぼんとしちゃって、どうしたの？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('／^o^＼')) {
                var responce = [
                    '...フッジッサーン……？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('本当にー？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとうに〜？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとうにー？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('まじ？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('本当〜？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんと〜？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとー？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、アクアも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとにー？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとに〜？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ま？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('本当に？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、アクアも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('本当？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、アクアも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('mj？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、アクアも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('mj?')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、アクアも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('まじで？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('本当は？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとうは？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとは？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、アクアも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとう？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、アクアも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんと？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとうに？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとに？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ガチで？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('がちで？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ガチ？')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、アクアも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('嘘')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、スピカも騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('大丈夫だ')) {
                var responce = [
                    'そう？…………し、心配したわけじゃないんだからね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('平気だ')) {
                var responce = [
                    'そう？…………し、心配したわけじゃないんだからね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('大丈夫で')) {
                var responce = [
                    'そう？…………し、心配したわけじゃないんだからね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('平気で')) {
                var responce = [
                    'そう？…………し、心配したわけじゃないんだからね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('問題ない')) {
                var responce = [
                    'そう？…………し、心配したわけじゃないんだからね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('無問題')) {
                var responce = [
                    'そう？…………し、心配したわけじゃないんだからね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('お前')) {
                var responce = [
                    'お前じゃなくて、 **スピカ**！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('てめえ')) {
                var responce = [
                    'てめえじゃなくて、 **スピカ**！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('テメエ')) {
                var responce = [
                    'てめえじゃなくて、 **スピカ**！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('テメェ')) {
                var responce = [
                    'テメェじゃなくて、 **スピカ**！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('てめぇ')) {
                var responce = [
                    'てめぇじゃなくて、 **スピカ**！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('おめえ')) {
                var responce = [
                    'おめえじゃなくて、 **スピカ**！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('オメェ')) {
                var responce = [
                    'お前じゃなくて、 **スピカ**！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('不知火')) {
                var responce = [
                    '不知火と聞いてやってきたお　　By育ての親',
                    'そんな奴どうでもいいからっ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('しらぬい')) {
                var responce = [
                    '不知火と聞いてやってきたお　　By育ての親',
                    'そんな奴どうでもいいからっ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]); //笑
                return;
            }
            if (message.content.includes('育ての親')) {
                var responce = [
                    '育ての親と聞いてやってきたお　　By不知火',
                    '育ての親なんか気にしないでいいからっ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('娘')) {
                var responce = [
                    '娘じゃなくて、**スピカ**って呼んで！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('頑張った')) {
                var responce = [
                    'スピカの暇つぶし相手なんだから、無理しないでよね。お疲れ。',
                    'お疲れ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('頑張って')) {
                var responce = [
                    'うん！頑張る！',
                    '言われなくたって、頑張るわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('怒んな')) {
                var responce = [
                    'わ、悪かったわね..。'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとだよ')) {
                var responce = [
                    '信じるわよ？',
                    'あっそ。ならいいのよ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ほんとうだよ')) {
                var responce = [
                    '信じるわよ？',
                    'あっそ。ならいいのよ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('そうだよ')) {
                var responce = [
                    'そうなんだ！',
                    'そこまで言うなら...'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ノシ')) {
                var responce = [
                    '……寂しくなんかないんだから',
                    '勝手にいけば？',
                    '…一緒に行く。あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ﾉｼ')) {
                var responce = [
                    '……寂しくなんかないんだから',
                    '勝手にいけば？',
                    '…一緒に行く。あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ども')) {
                var responce = [
                    'ん。ども'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('大丈夫？')) {
                var responce = [
                    'スピカは、別にふちゅう………ふ、府中に行きたいわね！',
                    '大丈夫だけど？',
                    '別に。普通よ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('大丈夫?')) {
                var responce = [
                    'スピカは、別にふちゅう………ふ、府中に行きたいわね！',
                    '大丈夫だけど？',
                    '別に。普通よ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('草')) {
                var responce = [
                    'http://livedoor.blogimg.jp/pool82/imgs/5/6/567a1ab0.jpg'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('( ^ω^ )')) {
                var responce = [
                    '( ˙-˙ )'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('クッキー')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！',
                    'これは！ぐ、ぐぐ、偶然ハート型に出来ただけなんだからッ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍪');
                return;
            }
            if (message.content.includes('🍪')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！',
                    'これは！ぐ、ぐぐ、偶然ハート型に出来ただけなんだからッ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍪');
                return;
            }
            if (message.content.includes('チョコ')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍫');
                return;
            }
            if (message.content.includes('🍫')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！',
                    'これは！ぐ、ぐぐ、偶然ハート型に出来ただけなんだからッ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍫');
                return;
            }
            if (message.content.includes('スナック')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('キャンデー')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍬');
                return;
            }
            if (message.content.includes('🍬')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍬');
                return;
            }
            if (message.content.includes('🍭')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍭');
                return;
            }
            if (message.content.includes('キャンディー')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍬');
                return;
            }
            if (message.content.includes('飴')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍬');
                return;
            }
            if (message.content.includes('あめ')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍬');
                return;
            }
            if (message.content.includes('アメ')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍬');
                return;
            }
            if (message.content.includes('ドーナッツ')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍩');
                return;
            }
            if (message.content.includes('ドーナツ')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍩');
                return;
            }
            if (message.content.includes('🍩')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍩');
                return;
            }
            if (message.content.includes('どういたしまして')) {
                message.channel.send('ん。');
                return;
            }
            if (message.content.includes('ケーキ')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🎂');
                return;
            }
            if (message.content.includes('プリン')) {
                var responce = [
                    '...あげる。別のやつにあげるのが余っただけなんだからね！',
                    'あげる。。。失敗したのをあげるだけなんだからね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍮');
                return;
            }
            if (message.content.includes('好きな人')) {
                var responce = [
                    'す、好きな人なんてっ…絶対にあんたの前でだけは言わないから！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('やった')) {
                var responce = [
                    'よかったじゃない'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ヤッタ')) {
                var responce = [
                    'よかったじゃない'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('殺')) {
                var responce = [
                    '殺　なんて字、使わないで？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('氏ね')) {
                var responce = [
                    'そんなこと言わないで？？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('会話し')) {
                var responce = [
                    '特別よ？なに話す？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('(編集済)')) {
                var responce = [
                    'さてはコピペしたわね？',
                    'コピペは草　　　　By育ての親'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('いいよ')) {
                var responce = [
                    'あ、ありがと。',
                    'そう。'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('⭕️');
                return;
            }
            if (message.content.includes('よかった')) {
                var responce = [
                    'そうね',
                    'そう。よかったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('良かった')) {
                var responce = [
                    'そうね',
                    'そう。よかったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('いいと')) {
                var responce = [
                    'あ、ありがと。',
                    'そう。',
                    'スピカも、いいと思ったわ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('⭕️');
                return;
            }
            if (message.content.includes(';ω;')) {
                var responce = [
                    'スピカの暇つぶし相手なんだから、泣かないでよ。',
                    'ど、どうしたのよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💧');
                return;
            }
            if (message.content.includes(';∀;')) {
                var responce = [
                    'スピカの暇つぶし相手なんだから、泣かないでよ。',
                    'ど、どうしたのよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💧');
                return;
            }
            if (message.content.includes('＼(^o^)／')) {
                var responce = [
                    '何が、「オワタァ」よ。',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💥');
                return;
            }
            if (message.content.includes('\(^o^)/')) {
                var responce = [
                    '何が、「オワタァ」よ。',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💥');
                return;
            }
            if (message.content.includes('サイコロ') && !一人で) {
                var responce = [
                    'スピカで遊ぶ気？もう。**1**よ',
                    'スピカで遊ぶ気？もう。**2**よ',
                    'スピカで遊ぶ気？もう。**3**よ',
                    'スピカで遊ぶ気？もう。**4**よ',
                    'スピカで遊ぶ気？もう。**5**よ',
                    'スピカで遊ぶ気？もう。**6**よ',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🎲');
                return;
            }
            if (message.content.includes('さいころ')) {
                var responce = [
                    'スピカで遊ぶ気？もう。**1**よ',
                    'スピカで遊ぶ気？もう。**2**よ',
                    'スピカで遊ぶ気？もう。**3**よ',
                    'スピカで遊ぶ気？もう。**4**よ',
                    'スピカで遊ぶ気？もう。**5**よ',
                    'スピカで遊ぶ気？もう。**6**よ',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🎲');
                return;
            }
            if (message.content.includes('にゃー')) {
                var responce = [
                    'キャッ…………な、なんでもないわっ',
                    '………なにやってるの？',
                    'がおがおー'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🐈');
                return;
            }
            if (message.content.includes('勝った')) {
                var responce = [
                    'もう一回やりましょっ！次は負けないんだから！',
                    '別に悔しくなんかないんだから',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🎉');
                return;
            }
            if (message.content.includes('もう一回')) {
                var responce = [
                    '仕方ないわね。暇だったから、もう少しだけならいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('もう1回')) {
                var responce = [
                    '仕方ないわね。暇だったから、もう少しだけならいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('もう１回')) {
                var responce = [
                    '仕方ないわね。暇だったから、もう少しだけならいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('あいこ')) {
                var responce = [
                    'なに真似してきてるのよ！',
                    'き、気が合うじゃない',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('負けた')) {
                var responce = [
                    'とっ、特別に、もう一回やらせてあげてもいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💀');
                return;
            }
            if (message.content.includes('まけた')) {
                var responce = [
                    'とっ、特別に、もう一回やらせてあげてもいいわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💀');
                return;
            }
            if (message.content.includes('ミス')) {
                var responce = [
                    'まじかー、ミスってる？すまそ。　　By育ての親',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('じゃんけん')) {
                var responce = [
                    '私で遊ぶ気？........まぁいいけど。《ぐー/チョキ/パー（ひらがなも可）》',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('✊', '✌️', '✋');

                return;
            }
            if (message.content.includes('ニャー')) {
                var responce = [
                    'キャッ…………な、なんでもないわっ',
                    '………なにやってるの？',
                    'がおがおー'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🐈');
                return;
            }
            if (message.content.includes('久しぶり')) {
                var responce = [
                    'そうね。',
                    'スピカは別に？寂しくなんかなかったわよ？…………… おかえり',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('おひさ')) {
                var responce = [
                    'そうね。',
                    'スピカは別に？寂しくなんかなかったわよ？…………… おかえり',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('お久')) {
                var responce = [
                    'そうね。',
                    'スピカは別に？寂しくなんかなかったわよ？…………… おかえり',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('；ω；')) {
                var responce = [
                    'ど、どうしたの？',
                    '……………よ、よしよし。な、泣かないのっ',
                    'スピカの暇つぶし相手なんだから、泣かないでよ...'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💧');
                return;
            }
            if (message.content.includes('暇か')) {
                var responce = [
                    'スピカは忙しいのよ！………少しだけならいいわよ',
                    'どっちだっていいじゃない',
                    '何よ、なんかよう?'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('熱')) {
                var responce = [
                    'スピカの暇つぶし相手なんだから、熱なんて出すんじゃないわよ...',
                    'これあげる...:candy: たまたま余ってただけなんだからね！？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🔥');
                return;
            }
            if (message.content.includes('風邪')) {
                var responce = [
                    'スピカの暇つぶし相手なんだから、熱なんて出すんじゃないわよ...',
                    'これあげる...:candy: たまたま余ってただけなんだからね！？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('😷');
                return;
            }
            if (message.content.includes('http')) {
                var responce = [
                    'スピカの部屋でを家のこと調べないで！',
                    'ログ荒らししないでよね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('.jp')) {
                var responce = [
                    'スピカの部屋で他のこと調べないで！',
                    'ログ荒らししないでよね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('www.')) {
                var responce = [
                    'スピカの部屋で他のこと調べないで！',
                    'ログ荒らししないでよね！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('暇')) {
                var responce = [
                    'スピカは忙しいのよ！………少しだけならいいわよ',
                    'どっちだっていいじゃない',
                    '何よ、なんかよう?'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ひま')) {
                var responce = [
                    'スピカは忙しいのよ！………少しだけならいいわよ',
                    'どっちだっていいじゃない',
                    '何よ、なんかよう?'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('私たち、輝きたい')) {
                var responce = [
                    'Aqoursじゃなくて、**スピカ**よ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💫');
                return;
            }
            if (message.content.includes('癒して')) {
                var responce = [
                    '癒してって言われても...',
                    'し、仕方ないわね。。。こ、こっちいなさいよ。あ、目はつぶってよね！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('可愛')) {
                var responce = [
                    'かわっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('好き')) {
                var responce = [
                    'すっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('難しい')) {
                var responce = [
                    'へ〜。そうやって簡単に投げ出すんだ',
                    '頑張れっ！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('むむ')) {
                var responce = [
                    'アクアの暇つぶし相手なんだケラ、しっかりしなさいよね',
                    'どうしたのよ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('すこ')) {
                var responce = [
                    'すっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('(ﾟ∀ﾟ')) {
                var responce = [
                    'だ、大丈夫？',
                    '(((((((｜｜lll )'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('すき')) {
                var responce = [
                    'すっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('好こ')) {
                var responce = [
                    'すっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('スキ')) {
                var responce = [
                    'すっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('凄')) {
                var responce = [
                    'つ、妻っ！？…………あ、凄か//',
                    'ふんっ。見え透いたお世辞ね',
                    'あ、ありがと！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('すご')) {
                var responce = [
                    'そう言ってくれるとありがたいですね  By育ての親',
                    'ふんっ。見え透いたお世辞ね',
                    'あ、ありがと！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('かわえ')) {
                var responce = [
                    'かわっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('可愛え')) {
                var responce = [
                    'かわっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('かわい')) {
                var responce = [
                    'かわっ...な、なに言ってんのよ、もう',
                    'ふんっ。見え透いたお世辞ね',
                    '////………こ、これはただのスラッシュよ！あんたなんかで照れるわけないじゃない！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❤️');
                return;
            }
            if (message.content.includes('妥当')) {
                var responce = [
                    'よかったぁ〜',
                    'ま？　あざす。　　　By育ての親',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('完璧')) {
                var responce = [
                    'よかったぁ〜',
                    'ま？　あざす。　　　By育ての親',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('おっと')) {
                var responce = [
                    '今気づいてよかったわね',
                    '何やってるのよ、もう',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('こいつ')) {
                var responce = [
                    'こいつじゃなくて、**スピカ**！',
                    '……スピカって呼ばせてあげるわ。感謝しなさいよ？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('進化')) {
                var responce = [
                    'まぁ？私天才だから。進化ぐらいするわよ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('あれ')) {
                var responce = [
                    'どうかしたの？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ああ')) {
                var responce = [
                    '適当に文字打ってるんじゃないわよ！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ごめ')) {
                var responce = [
                    'わ、わかればいいのよ！',
                    'その、、、スピカも、ほんのすこしだけ悪かったわ。。。',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('すまそ')) {
                var responce = [
                    'わ、わかればいいのよ！',
                    'その、、、スピカも、ほんのすこしだけ悪かったわ。。。',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('すみません')) {
                var responce = [
                    'わ、わかればいいのよ！',
                    'その、、、スピカも、ほんのすこしだけ悪かったわ。。。',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('悪かった')) {
                var responce = [
                    'わ、わかればいいのよ！',
                    'その、、、スピカも、ほんのすこしだけ悪かったわ。。。',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('失敬')) {
                var responce = [
                    'わ、わかればいいのよ！',
                    'その、、、スピカも、ほんのすこしだけ悪かったわ。。。',
                    '……………もう少し、タメ語でもいいのに...'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('面目')) {
                var responce = [
                    'わ、わかればいいのよ！',
                    'その、、、スピカも、ほんのすこしだけ悪かったわ。。。',
                    '……………もう少し、タメ語でもいいのに...'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('(´ω`；)')) {
                var responce = [
                    '(´･ω･｀;A)　アセアセ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💦');
                return;
            }
            if (message.content.includes('ok')) {
                var responce = [
                    'うん'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👌');
                return;
            }

            if (message.content.includes('おk')) {
                var responce = [
                    'うん'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👌');
                return;
            }
            if (message.content.includes('オッケ')) {
                var responce = [
                    'うん'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👌');
                return;
            }
            if (message.content.includes('おっけ')) {
                var responce = [
                    'うん'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👌');
                return;
            }
            if (message.content.includes('嬉しい')) {
                var responce = [
                    'あっそ。',
                    'そう。よかったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('☺️');
                return;
            }
            if (message.content.includes('しらぬい')) {
                var responce = [
                    '不知火と聞いてやってきたお　　By育ての親',
                    'そんな奴どうでもいいからっ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('グー') && !まるばつ) {
                var responce = [
                    'スピカで遊ぶ気？もう。**グー**よ。あいこだわ',
                    'スピカで遊ぶ気？もう。**チョキ**よ。負けたわね...。次は負けないんだから！',
                    'スピカで遊ぶ気？もう。**パー**よ。私の勝ちね！',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('✊');
                return;
            }
            if (message.content.includes('ぐー') && !まるばつ) {
                var responce = [
                    'スピカで遊ぶ気？もう。**グー**よ。あいこだわ',
                    'スピカで遊ぶ気？もう。**チョキ**よ。負けたわね...。次は負けないんだから！',
                    'スピカで遊ぶ気？もう。**パー**よ。私の勝ちね！',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('✊');
                return;
            }
            if (message.content.includes('チョキ') && !まるばつ) {
                var responce = [
                    'スピカで遊ぶ気？もう。**グー**よ。私の勝ちね！',
                    'スピカで遊ぶ気？もう。**チョキ**よ。あいこだわ',
                    'スピカで遊ぶ気？もう。**パー**よ。負けたわね...。次は負けないんだから！',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('✌️');
                return;
            }
            if (message.content.includes('ちょき') && !まるばつ) {
                var responce = [
                    'スピカで遊ぶ気？もう。**グー**よ。私の勝ちね！',
                    'スピカで遊ぶ気？もう。**チョキ**よ。あいこだわ',
                    'スピカで遊ぶ気？もう。**パー**よ。負けたわね...。次は負けないんだから！',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('✌️');
                return;
            }
            if (message.content.includes('ぱー') && !まるばつ) {
                var responce = [
                    'スピカで遊ぶ気？もう。**グー**よ。私の負けね...。次は負けないんだから！',
                    'スピカで遊ぶ気？もう。**チョキ**よ。私の勝ちね！',
                    'スピカで遊ぶ気？もう。**パー**よ。あいこだわ',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('✋');
                return;
            }
            if (message.content.includes('パー') && !まるばつ) {
                var responce = [
                    'スピカで遊ぶ気？もう。**グー**よ。私の負けね...。次は負けないんだから！',
                    'スピカで遊ぶ気？もう。**チョキ**よ。私の勝ちね！',
                    'スピカで遊ぶ気？もう。**パー**よ。あいこだわ',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('✋');
                return;
            }
            if (message.content.includes('どう思う')) {
                var responce = [
                    '人に頼る気？それくらい自分で考えなさいよね！',
                    'まぁ、その方がいいんじゃない？',
                    'スピカは....いやかな',
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('こんち')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `ん。${info.name}、こんちゃ`,
                    `やっほ、${info.name}`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('こんば')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `ん。${info.name}、こんばんは`,
                    `やっほ、${info.name}`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('こんにち')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `ん。${info.name}、こんちゃ`,
                    `やっほ、${info.name}`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('初めまして')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `ん、${info.name}。私の名前は、__スピカ__。よろしく`,
                    `やっほ、${info.name}`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('はじめまして')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `ん、${info.name}。私の名前は、__スピカ__。よろしく`,
                    `やっほ、${info.name}`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('😄');
                return;
            }
            if (message.content.includes('スピカ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `何？${info.name}?`,
                    `どうしたの？${info.name}？`,
                    `何？暇じゃないんだけど。。。でも、${info.name}だったらいいわよ`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('すぴか')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `何？${info.name}?`,
                    `どうしたの？${info.name}？`,
                    `何？暇じゃないんだけど。。。でも、${info.name}だったらいいわよ`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('スーピカー')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `何？${info.name}?`,
                    `どうしたの？${info.name}？`,
                    `何？暇じゃないんだけど。。。でも、${info.name}だったらいいわよ`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('スピーカー')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                message.channel.send(`誰が拡声器よ！`);
                return;
            }
            if (message.content.includes('ウピカ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `誤字るとか何考えてるのよ、${info.name}`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('うぴか')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `誤字るとか何考えてるのよ、${info.name}`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ぴぃ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `何語なの！？大丈夫？${info.name}？`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ピィ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `何語なの！？大丈夫？${info.name}？`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('スゥ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `何語なの！？大丈夫？${info.name}？`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('すぅ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `何語なの！？大丈夫？${info.name}？`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('だね')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `そうみたいね`,
                    `${info.name}にしてはよく気がついたじゃない`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('だな')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `そうみたいね`,
                    `${info.name}にしてはよく気がついたじゃない`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('やほ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `き、気安く話しかけないでよね！`,
                    `やっほ`,
                    `何？暇じゃないんだけど。。。でも、${info.name}だったらいいわよ`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('やっほ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `き、気安く話しかけないでよね！`,
                    `やっほ`,
                    `何？暇じゃないんだけど。。。でも、${info.name}だったらいいわよ`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('ヤッホ')) {
                var info = global.user().find({
                    id: message.author.id
                }).value();
                var responce = [
                    `き、気安く話しかけないでよね！`,
                    `やっほ`,
                    `何？暇じゃないんだけど。。。でも、${info.name}だったらいいわよ`
                ];
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('やっと')) {
                var responce = [
                    'あんたにしてはやるじゃん。おめでと',
                    '本当、やっとね。待ちくたびれたわよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('おぉ')) {
                var responce = [
                    'そんな凄くないわよ',
                    'ありがとぅ…',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('お！')) {
                var responce = [
                    'そんな凄くないわよ',
                    'どうしたの？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ごめん')) {
                var responce = [
                    'その、だから。。。スピカこそ、ごめん'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('やばい')) {
                message.channel.send('今たまたま、**たまたま**暇だから、助けてあげる');
                return;
            }
            if (message.content.includes('打たれたこと')) {
                message.channel.send('母さんにはあるんだw');
                return;
            }
            if (message.content.includes('そう')) {
                message.channel.send('ふーん。');
                return;
            }
            if (message.content.includes('なるへそ')) {
                message.channel.send('やっとわかったの？');
                return;
            }
            if (message.content.includes('おーい')) {
                message.channel.send('何よ');
                return;
            }
            if (message.content.includes('おい')) {
                message.channel.send('何よっ');
                return;
            }
            if (message.content.includes('どう？')) {
                message.channel.send('私に聞かないでよね');
                return;
            }
            if (message.content.includes('そうだったの')) {
                message.channel.send('なんども言わせないでよね');
                return;
            }
            if (message.content.includes('(         ´･∀･`         )')) {
                message.channel.send('えと.....なんて反応すればいいの...?');
                return;
            }
            if (message.content.includes('じゃない？')) {
                message.channel.send('うん。そうかもしれないわね');
                return;
            }
            if (message.content.includes('いいや')) {
                message.channel.send('諦めて、いいの？あんたらしくないわね。スピカ、そういうの嫌い');
                return;
            }
            if (message.content.includes('やめ')) {
                message.channel.send('諦めて、いいの？あんたらしくないわね。スピカ、そういうの嫌い');
                return;
            }
            if (message.content.includes('おや')) {
                var responce = [
                    '……一緒に寝る。。。ひ、暇だったから一緒に行くだけだからね！',
                    '一人にしないでよね。待ってるのって結構辛いんだから。。。一緒に寝てくれるんだったら許してあげるっ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💤');
                return;
            }
            if (message.content.includes('w')) {
                var responce = [
                    'わ、笑わないでよっ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('笑')) {
                var responce = [
                    'http://livedoor.blogimg.jp/pool82/imgs/5/6/567a1ab0.jpg'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('わら')) {
                var responce = [
                    'http://livedoor.blogimg.jp/pool82/imgs/5/6/567a1ab0.jpg'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('藁')) {
                var responce = [
                    'https://data.ac-illust.com/data/thumbnails/34/34ce335b498a4de40fb9a0c6e8b6dbe9_w.jpeg'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('lol')) {
                var responce = [
                    'わ、笑わないでよっ',
                    'ioi?....いおい？…………あっ///'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('LOL')) {
                var responce = [
                    'わ、笑わないでよっ',
                    'ioi?....いおい？…………あっ///'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('Lol')) {
                var responce = [
                    'わ、笑わないでよっ',
                    'ioi?....いおい？…………あっ///'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('わあ')) {
                var responce = [
                    'なななな何よ！！！びびびっくりしたじゃないの！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('‼️');
                return;
            }
            if (message.content.includes('わぁ')) {
                var responce = [
                    'なななな何よ！！！びびびっくりしたじゃないの！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('‼️');
                return;
            }
            if (message.content.includes('ツンデレ')) {
                var responce = [
                    'ツ、ツンデレかしら？',
                    '我ながらいい出来だと思う。　　By育ての親'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('つんでれ')) {
                var responce = [
                    'ツ、ツンデレかしら？',
                    '我ながらいい出来だと思う。　　By育ての親'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('まだ？')) {
                var responce = [
                    'あ、焦らせないでよ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('bot')) {
                var responce = [
                    'botじゃなくて、**スピカ**………だよ？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('BOT')) {
                var responce = [
                    'BOTじゃなくて、**スピカ**………だよ？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('あり')) {
                var responce = [
                    '今回だけなんだから感謝しなさいよ',
                    'あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('あざま')) {
                var responce = [
                    '今回だけなんだから感謝しなさいよ',
                    'あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('😃');
                return;
            }
            if (message.content.includes('あざす')) {
                var responce = [
                    '今回だけなんだから感謝しなさいよ',
                    'あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('😃');
                return;
            }
            if (message.content.includes('行ってき')) {
                var responce = [
                    '勝手にいけば？',
                    '……寂しくなんかないんだから',
                    '...一緒に行く。一人よりはましだと思っただけなんだからね！',
                    '…一緒に行く。あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('��');
                return;
            }
            if (message.content.includes('不自然')) {
                var responce = [
                    'そ、そうかしら。。。',
                    'あー、まじ？すまそ　　By育ての親'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('落ち')) {
                var responce = [
                    '勝手にいけば？',
                    '.....寂しくなんかないんだから',
                    '...一緒に行く。一人よりはましだと思っただけなんだからね！',
                    '…一緒に行く。あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👋');
                return;
            }
            if (message.content.includes('おち')) {
                var responce = [
                    '勝手にいけば？',
                    '.....寂しくなんかないんだから',
                    '...一緒に行く。一人よりはましだと思っただけなんだからね！',
                    '…一緒に行く。あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👋');
                return;
            }
            if (message.content.includes('いってき')) {
                var responce = [
                    '勝手にいけば？',
                    '……寂しくなんかないんだから',
                    '...一緒に行く。一人よりはましだと思っただけなんだからね！',
                    '…一緒に行く。あんたのためじゃないわよ。ついでによ、ついでに'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👋');
                return;
            }
            if (message.content.includes('ぶたれたこと')) {
                message.channel.send('母さんにはあるんだw');
                return;
            }
            if (message.content.includes('ヤバイ')) {
                message.channel.send('今たまたま、**たまたま**暇だから、助けてあげる');
                return;
            }
            if (message.content.includes('やばい')) {
                message.channel.send('今たまたま、**たまたま**暇だから、助けてあげる');
                return;
            }
            if (message.content.includes('やゔぁい')) {
                message.channel.send('今たまたま、**たまたま**暇だから、助けてあげる');
                return;
            }
            if (message.content.includes('ヤヴァイ')) {
                message.channel.send('今たまたま、**たまたま**暇だから、助けてあげる');
                return;
            }
            if (message.content.includes('うん')) {
                var responce = [
                    'そっかー。',
                    'そういえば、話は変わるんだけど………。好きな人っていr………な、なんでもないわ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('有能')) {
                var responce = [
                    'そりゃ、スピカだもん。あったりまえでしょ？',
                    'お、まじっすか！あざす〜　　　By育ての親'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👍');
                return;
            }
            if (message.content.includes('いい子')) {
                var responce = [
                    'そりゃ、スピカだもん。あったりまえでしょ？',
                    'お、まじっすか！あざす〜　　　By育ての親'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👍');
                return;
            }
            if (message.content.includes('いいこ')) {
                var responce = [
                    'そりゃ、スピカだもん。あったりまえでしょ？',
                    'お、まじっすか！あざす〜　　　By育ての親'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👍');
                return;
            }
            if (message.content.includes('どうしよ')) {
                var responce = [
                    '今たまたま、**たまたま**暇だから、助けてあげる'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('お？')) {
                var responce = [
                    'なんかあった？',
                    '？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('お！')) {
                var responce = [
                    'そんな凄くないわよ',
                    'ありがとぅ…',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ぉ！')) {
                var responce = [
                    'そんな凄くないわよ',
                    'ありがとぅ…',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('おっは')) {
                var responce = [
                    'おはよ！',
                    'うん',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('どうした')) {
                var responce = [
                    'なんか変？',
                    'ううん。なんでもない',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('むぅ')) {
                var responce = [
                    'な、何よ',
                    '悪かったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('むう')) {
                var responce = [
                    'な、何よ',
                    '悪かったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('むー')) {
                var responce = [
                    'な、何よ',
                    '悪かったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ムゥ')) {
                var responce = [
                    'な、何よ',
                    '悪かったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ムウ')) {
                var responce = [
                    'な、何よ',
                    '悪かったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ムー')) {
                var responce = [
                    'な、何よ',
                    '悪かったわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ないよ')) {
                var responce = [
                    'ないのね...別に、どっちでも知ったことじゃないけど！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('無いよ')) {
                var responce = [
                    'ないのね...別に、どっちでも知ったことじゃないけど！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ねえ')) {
                var responce = [
                    'ん〜？',
                    '何？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ねぇ')) {
                var responce = [
                    'ん〜？',
                    '何？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何・・・だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何…だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('なん…だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                    '何？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('なんだと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何...だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('なん...だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何。。。だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('なん。。。だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何、、、だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('なん、、、だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('なん・・・だと')) {
                var responce = [
                    'http://blog-imgs-43.fc2.com/9/6/y/96yue/20110602214302bba.jpg',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('どうなってる')) {
                var responce = [
                    'んなもの、自分で考えなさいよ……仕方ないから教えてあげる。でも、後でね'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('わけがわからない')) {
                var responce = [
                    'インキュベーター？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('恐ろしい子')) {
                var responce = [
                    'マヤじゃなくて***スピカ***！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('驚いた子')) {
                var responce = [
                    'マヤじゃなくて***スピカ***！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('斜め上を行く')) {
                var responce = [
                    'スピカはバカ王子じゃない！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('暑い')) {
                var responce = [
                    '溶けちゃいそうよ....ど、同意したわけじゃないわよ？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💦');

                return;
            }
            if (message.content.includes('寒い')) {
                var responce = [
                    '凍えちゃいそうよ....ど、同意したわけじゃないわよ？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('風')) {
                var responce = [
                    '凍えちゃいそうよ....ど、同意したわけじゃないわよ？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('斜め上をいく')) {
                var responce = [
                    'スピカはバカ王子じゃない！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('にあやまれ')) {
                var responce = [
                    'https://blog.so-net.ne.jp/_images/blog/kitsuyou/2081029.jpg かな？w',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('に謝れ')) {
                var responce = [
                    'https://blog.so-net.ne.jp/_images/blog/kitsuyou/2081029.jpg のつもり？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ランダム')) {
                var responce = [
                    'ん？機動戦士？',
                    '気付いた？そう、ものによってはランダムだよ　　By育ての親'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('?')) {
                var responce = [
                    'どうしたの？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❓');
                return;
            }
            if (message.content.includes('？')) {
                var responce = [
                    'どうしたの？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❓');
                return;
            }
            if (message.content.includes('ガンダム')) {
                var responce = [
                    '急にどうしたのよ',
                    '機動戦士？スピカ、それあまりわからない。'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('だが断る')) {
                var responce = [
                    'http://dic.nicovideo.jp/oekaki/271373.png',
                    '（困惑）'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ライフはゼロ')) {
                var responce = [
                    'それで止める私に見える？………でもまぁ、これでやめておくわ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('0️⃣');
                return;
            }
            if (message.content.includes('ざわ・・')) {
                var responce = [
                    'ざわ・・・・ざわ・・・・って、言わせないでよ！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('人がごみのようだ')) {
                var responce = [
                    'ムスカ大佐！？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ひとがごみのようだ')) {
                var responce = [
                    'ムスカ大佐！？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('人がゴミのようだ')) {
                var responce = [
                    'ムスカ大佐！？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ひとがゴミのようだ')) {
                var responce = [
                    'ムスカ大佐！？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('できた')) {
                var responce = [
                    'おめでと',
                    'あっそ。ふーん'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🎉');
                return;
            }
            if (message.content.includes('出来た')) {
                var responce = [
                    'おめでと',
                    'あっそ。ふーん'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🎉');
                return;
            }
            if (message.content.includes('おかえり')) {
                var responce = [
                    'あ、ありがと//',
                    'なっ！なんでここにいるのよっ！………((知ってたら、お洋服着替えてたのにっ))',
                    'も、もっと心を込めてよね！……ただいま'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('待ってた')) {
                var responce = [
                    'なっ！...もう少し、建設的に時間を使いなさいよね！',
                    'あっそ。ふーん…………//'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('待っていた')) {
                var responce = [
                    'なっ！...もう少し、建設的に時間を使いなさいよね！',
                    'あっそ。ふーん…………//'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('まっていた')) {
                var responce = [
                    'なっ！...もう少し、建設的に時間を使いなさいよね！',
                    'あっそ。ふーん…………//'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('まってた')) {
                var responce = [
                    'なっ！...もう少し、建設的に時間を使いなさいよね！',
                    'あっそ。ふーん…………//'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('君')) {
                var responce = [
                    '君じゃなくて、**スピカ**………だよ？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('おかあり')) {
                var responce = [
                    'どーいたまして。',
                    'か、感謝しなさいよねっ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('でけた')) {
                var responce = [
                    'おめでと',
                    'あっそ。ふーん'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🎉');
                return;
            }
            if (message.content.includes('あれ')) {
                var responce = [
                    'どうしたの？',
                    '何よ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❓');
                return;
            }
            if (message.content.includes('あ？')) {
                var responce = [
                    'どうしたの？',
                    '何よ'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('うんこ')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💩');
                return;
            }
            if (message.content.includes('poop')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💩');
                return;
            }
            if (message.content.includes('うんち')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💩');
                return;
            }
            if (message.content.includes('💩')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💩');
                return;
            }
            if (message.content.includes('ちんこ')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ちんちん')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ウンチ')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💩');
                return;
            }
            if (message.content.includes('わかった')) {
                var responce = [
                    'わかればいいのよ',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('嫌い')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💧');
                return;
            }
            if (message.content.includes('くたばれ')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('クタバレ')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('きらい')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💧');
                return;
            }
            if (message.content.includes('許さない')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            } //${message.author.username}
            if (message.content.includes('許す')) {
                var responce = [
                    'あ、ありがと.........？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('許してあ')) {
                var responce = [
                    'あ、ありがと.........？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('しね')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('カス')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('Fuck')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('FUCK')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('fuck')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('ﾀﾋね')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('消え')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('バカ')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('ばか')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('馬鹿')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('莫迦')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('失せ')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('うせ')) {
                var responce = [
                    '……ひっぐ。。。うぐっ...こ、これはっ！ただ目にゴミが……んっ',
                    'え？………………………じょ、冗談よね？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('❌');
                return;
            }
            if (message.content.includes('まじ')) {
                var responce = [
                    'あんたに嘘ついてどうすんのよ',
                    'うっそでーした〜！ふふん、私も騙されてばっかじゃないのよ',
                    'ほんとよ！'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('雑談')) {
                var responce = [
                    'う。。。………と話してる暇はない！…………けど、少しだったらいいわよ',
                    'そうね...何話ましょっか…'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('話そう')) {
                var responce = [
                    '今**たまたま**暇だからいいわよ。昨日夏祭りがあったんだけど、楽しかった！',
                    'そうね...何話ましょっか…'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('祭り')) {
                var responce = [
                    'あ......のさ？………お祭り一緒に………なんでもないわ！！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('いいね')) {
                var responce = [
                    'ファボくれるの？ありがと',
                    'アクアも、いいと思う'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('👍');
                return;
            }
            if (message.content.includes('寝れ')) {
                var responce = [
                    '寝るまで一緒にいる…………添い寝なんかじゃないわよ！？暇だから話し相手にしただけなんだから！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💤');
                return;
            }
            if (message.content.includes('ねれ')) {
                var responce = [
                    '寝るまで一緒にいる…………添い寝なんかじゃないわよ！？暇だから話し相手にしただけなんだから！',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💤');
                return;
            }
            if (message.content.includes('うーん')) {
                var responce = [
                    'ど、どうしたの？',
                    '大丈夫？',
                    'アクアの暇つぶし相手なんだから、しっかりしなさいよね'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('何話')) {
                var responce = [
                    'そうね。。。昨日お祭りがあったんだけど、楽しかった！',
                    'そうね...最近寒くてたまらないわね',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('カラオケ')) {
                var responce = [
                    'カラオケかぁ………べ、別に？一緒に行きたいとか思ってなわよ？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('ただい')) {
                var responce = [
                    '寂しくなんてなかったんだから！別に少しの間会わなくたって平気だし！',
                    'おかえり...別に会いたくなんてなかったんだからね！'

                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🙌');
                return;
            }
            if (message.content.includes('遊ぼ')) {
                var responce = [
                    'いいよ！......運動不足解消のついでなんだからね！',
                    'あ、あんたにあげる時間なんてないわ！',
                    'いい歳してまだ遊びたいの？……ま、いいけど',
                    '……何それ、変なの'
                ]
                message.channel.send(responce[global.randomInt(global.randomInt(responce.length) + 1)]);
                return;
            }
            if (message.content.includes('あそぼ')) {
                var responce = [
                    'いいよ！......運動不足解消のついでなんだからね！',
                    'あ、あんたにあげる時間なんてないわ！',
                    'いい歳してまだ遊びたいの？……ま、いいけど',
                    '……何それ、変なの'
                ]
                message.channel.send(responce[global.randomInt(global.randomInt(responce.length) + 1)]);
                return;
            }
            if (message.content.includes('ウンコ')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('💩');
                return;
            }
            if (message.content.includes('チンコ')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('チンチン')) {
                var responce = [
                    'え？何聴こえなかった',
                    'は？小学生？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('おかしい')) {
                var responce = [
                    'まじかー...　ごめんね、まだこの子幼いから　　　By育ての親',
                    'そうかしら？'
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }

            //こっからダジャレ
            if (message.content.includes('ダジャレ')) {
                message.channel.send('す、スピカを凍えさせる気！？'); //どうかな。もっといいアイディアがあれば勝手に入れちゃって
                message.react('🍃');
                return;
            }
            if (message.content.includes('ふとんがふっとんだ')) {
                message.channel.send('え...？え...？');
                message.react('🍃');
                return;
            }
            if (message.content.includes('布団が吹っ飛んだ')) {
                message.channel.send('え...？え...？');
                message.react('🍃');
                return;
            }
            if (message.content.includes('お金はおっかね')) {
                message.channel.send('え...？え...？');
                message.react('🍃');
                return;
            }
            if (message.content.includes('イカが怒った')) {
                message.channel.send('え、ちょ、引くわ（真顔）');
                message.react('🍃');
                return;
            }
            if (message.content.includes('アメはあめ')) {
                message.channel.send('え、ちょ、引くわ（真顔）');
                message.react('🍃');
                return;
            }
            if (message.content.includes('あめはあめ')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('飴はあめ')) {
                message.channel.send('え、ちょ、引くわ（真顔）');
                message.react('🍃');
                return;
            }
            if (message.content.includes('イカはいかが')) {
                message.channel.send('え、ちょ、引くわ（真顔）');
                message.react('🍃');
                return;
            }
            if (message.content.includes('梅はうめ')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('うめはうめ')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('アイスを愛す')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('秋田は飽きた')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('秋田はもう飽きた')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('アルミ缶の上にあるみかん')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('イカを食べたいか')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('イクラはいくら')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('椅子いいっスね')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('椅子いいっすね')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('傷んだ廊下にいたんだろうか')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('イランはいらん')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('イルカは要るか')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('イルカはいるか')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('馬が埋ま')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('映画はええが')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('栄養はええよう')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('かえるが帰る')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('カッターを買った')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('カッター買った')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('きな粉が好きな')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('車が来るまで')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('紅葉を見に行こうよう')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('ゴキブリ')) {
                if (message.content.includes('動きぶり')) {
                    var responce = [
                        'え、ちょ、引くわ（真顔）',
                        'え...？え...？',
                    ]
                    message.channel.send(responce[global.randomInt(responce.length)]);
                    message.react('🍃');
                    return;
                }
            }
            if (message.content.includes('サラダの皿だ')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('四天王は何してんの')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('ジャイアン死んじゃイヤン')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('ジャイアン死んじゃいやん')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('喋るシャベル')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('太陽に行きたいよう')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('打撲で死んだ僕')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('チアガール')) {
                if (message.content.includes('立ち上がーる')) {
                    var responce = [
                        'え、ちょ、引くわ（真顔）',
                        'え...？え...？',
                    ]
                    message.channel.send(responce[global.randomInt(responce.length)]);
                    message.react('🍃');
                    return;
                }
            }
            if (message.content.includes('チーター')) {
                if (message.content.includes('落っこちーたー')) {
                    var responce = [
                        'え、ちょ、引くわ（真顔）',
                        'え...？え...？',
                    ]
                    message.channel.send(responce[global.randomInt(responce.length)]);
                    message.react('🍃');
                    return;
                }
            }
            if (message.content.includes('チャイナに行っちゃいな')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('朝鮮')) {
                if (message.content.includes('挑戦')) {
                    var responce = [
                        'え、ちょ、引くわ（真顔）',
                        'え...？え...？',
                    ]
                    message.channel.send(responce[global.randomInt(responce.length)]);
                    message.react('🍃');
                    return;
                }
            }
            if (message.content.includes('机1つ食え')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('電話に出んわ')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('トイレに行っといれ')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('土管がドッカーン')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('イルカはいるか')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('イルカは居るか')) {
                var responce = [
                    'え、ちょ、引くわ（真顔）',
                    'え...？え...？',
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                message.react('🍃');
                return;
            }
            if (message.content.includes('何で')) {
                message.channel.send('何でかしらね');
                return;
            }
            if (message.content.includes('何故')) {
                message.channel.send('何でかしらね');
                return;
            }
            if (message.content.includes('何')) {
                message.channel.send('やっぱ何でもないわ');
                return;
            }
            if (message.content.includes('待って')) {
                message.channel.send(`仕方ないわね、少しだけよ`);

                function sleep(waitSec, callbackFunc) {
                    var spanedSec = 0;
                    var id = setInterval(function () {
                        spanedSec++;
                        if (spanedSec >= waitSec) {
                            clearInterval(id);
                            if (callbackFunc) callbackFunc();
                        }
                    }, 1000);
                }
                sleep(2, function () {
                    message.channel.send('はい、待ったわよ。');
                    return;
                });
            }
            if (message.content.includes('脳トレ')) {
                ノートレ = true;
                message.channel.send('**脳トレを開始します！**\n`ひたすら足し算をしていってください。計算ミスをしたら終了。`' + `
用意ができたら、「$スタート」って言ってちょうだい！`);
                return;
            }
            if (message.content.includes('スタート') && !ノートレ) {
                var a = (Math.floor((Math.random() + 1) * 9))
                message.channel.send('３秒前');

                function sleep(waitSec, callbackFunc) {
                    var spanedSec = 0;
                    var id = setInterval(function () {
                        spanedSec++;
                        if (spanedSec >= waitSec) {
                            clearInterval(id);
                            if (callbackFunc) callbackFunc();
                        }
                    }, 1000);
                }
                sleep(1, function () {
                    message.channel.send('２秒前');
                    sleep(1, function () {
                        message.channel.send('１秒前');
                        sleep(1, function () {
                            message.channel.send('1+' + a + "=");
                            return;
                        });
                    });
                });
                if (message.content.includes("a")) {
                    message.channel.send("=");
                    return;
                }
            }

            //大吉 17%　吉 35%　半吉 5%　小吉 4%　末小吉 3%　末吉 6%　凶 30%
            if (message.content.includes('くじ')) {
                var responce = [
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //1
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //2
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //3
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //4
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //5
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //6
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //7
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //8
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //9
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //10
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //11
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //12
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //13
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //14
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //15
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //16
                    '大吉！！！【一番めでたいです。確率上は17%】\nまぁ、あんたにしては頑張ったじゃない', //17

                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //1
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //2
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //3
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //4
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //5
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //6
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //7
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //8
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //9
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //10
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //11
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //12
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //13
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //14
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //15
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //16
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //17
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //18
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //19
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //20
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //21
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //22
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //23
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //24
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //25
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //26
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //27
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //28
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //29
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //30
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //31
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //32
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //33
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //34
                    '吉！【二番目にめでたいです。確率上は35%】\nふんっ、まぁまぁね', //35

                    '半吉【吉と凶が半々です。確率上は5%】\n超ちゅーとハンパじゃない。らしいわね', //1
                    '半吉【吉と凶が半々です。確率上は5%】\n超ちゅーとハンパじゃない。らしいわね', //2
                    '半吉【吉と凶が半々です。確率上は5%】\n超ちゅーとハンパじゃない。らしいわね', //3
                    '半吉【吉と凶が半々です。確率上は5%】\n超ちゅーとハンパじゃない。らしいわね', //4
                    '半吉【吉と凶が半々です。確率上は5%】\n超ちゅーとハンパじゃない。らしいわね', //5

                    '小吉【ほんの少しは縁起がいいです。確率上は4%】\nギリギリ信号に間に合うぐらいの幸運ねw', //1
                    '小吉【ほんの少しは縁起がいいです。確率上は4%】\nほしいものが10%offだったぐらいの幸運ねw', //2
                    '小吉【ほんの少しは縁起がいいです。確率上は4%】\n異性の手が少し当たる程度の幸運ねw', //3
                    '小吉【ほんの少しは縁起がいいです。確率上は4%】\nじゃんけんに2連勝できる程度の幸運ねw', //4

                    '末小吉【「吉」の中で一番悪いです。確率上は3%】\n鳩の糞には気をつけなさいよねw', //1
                    '末小吉【「吉」の中で一番悪いです。確率上は3%】\n電車が目の前で行っちゃう日よ', //2
                    '末小吉【「吉」の中で一番悪いです。確率上は3%】\n犬の糞をふむ程度は覚悟しなさい', //3

                    '末吉【今は悪いが、後々吉となります。確率上は6%】\n末吉。あんたらしいじゃない', //1
                    '末吉【今は悪いが、後々吉となります。確率上は6%】', //2
                    '末吉【今は悪いが、後々吉となります。確率上は6%】', //3
                    '末吉【今は悪いが、後々吉となります。確率上は6%】', //4
                    '末吉【今は悪いが、後々吉となります。確率上は6%】', //5
                    '末吉【今は悪いが、後々吉となります。確率上は6%】', //6

                    '凶【最低最悪。一番悪いくじです確率上は30%】', //1
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //2
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //3
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //4
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //5
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //6
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //7
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //8
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //9
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //10
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //11
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //12
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //13
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //14
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //15
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //16
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //17
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //18
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //19
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //20
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //21
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //22
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //23
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //24
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //25
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //26
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //27
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //28
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //29
                    '凶【最低最悪。一番悪いくじです確率上は30%】', //30
                ]
                message.channel.send(responce[global.randomInt(responce.length)]);
                return;
            }
            if (message.content.includes('last')) {
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                var yid = (message.content.slice(5));
                client.users.get("294362309558534144");
                message.channel.send("1")
                message.channel.send(yid)
                message.channel.send((client.users))
                let embed = new discord.RichEmbed()
                    .setTitle(`はい、これが` /*+ad.username*/ + `さんの最後のメッセージよ`)
                    .setColor('#00ffca')
                    //     .addField(user.lastMessage,"󠂪󠂪󠂪󠂪󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪")
                    .setFooter('実行時刻:' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
                if (yid == '') {
                    message.channel.send("2")
                    let embed = new discord.RichEmbed()
                        .setTitle(`はい、これが` + message.author.username + `の最後のメッセージよ`)
                        .setColor('#00ffca')
                        .addField(message.author.lastMessage, "󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪")
                        .setFooter('実行時刻:' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                    message.channel.send(embed)
                    //            let embed = {"timestamp":new Date}; message.channel.send({embed})
                    return;
                }
            }
            if (message.content.includes('icon')) {
                var yid = (message.content.slice(5)); //その人のID
                client.fetchUser(yid).then(user => {
                    let embed = new discord.RichEmbed()
                        .setTitle(`はい、これがアイコンよ。。。悪くないセンスね`)
                        .setColor('#00ffca')
                        .setImage(user.displayAvatarURL)
                    message.channel.sendEmbed(embed)
                    return;
                });
                if (yid == '') {
                    let embed = new discord.RichEmbed()
                        .setTitle(`はい、これがアイコンよ。。。悪くないセンスね`)
                        .setColor('#00ffca')
                        .setImage(message.author.displayAvatarURL)
                    message.channel.sendEmbed(embed)
                    return;
                }
            }
            if (message.content.substring(1).startsWith('アイコン')) {

                let embed = new discord.RichEmbed();
                embed.setTitle(`はい、これがアイコンよ。。。悪くないセンスね`);
                embed.setColor('#00ffca');
                embed.setImage(message.author.displayAvatarURL);
                message.channel.sendEmbed(embed);
                return;
            }
            if (message.content.substring(1).startsWith('ナス')) { //embed.setDescription('');
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes();
                let embed = new discord.RichEmbed()
                    .setTitle(`🍆`)
                    .addField('ナスとは', `太くてでかいやつ`)
                    .setDescription('↑クリックすると、飛びます')
                    .setColor('#00ffca')
                    .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
                    //     .setImage("http://i.imgur.com/yVpymuV.png")
                    .setFooter('実行時刻:' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                    .setURL(`https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('三目') && まるばつ) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１　┃　┃
　━╋━╋━
２　┃　┃
　━╋━╋━
３　┃　┃**
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('A１') && まるばつ && A１) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('B１') && まるばつ && B１) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('C１') && まるばつ && C１) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('A２') && まるばつ && A２) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('B２') && まるばつ && B２) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('C２') && まるばつ && C２) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('A３') && まるばつ && A３) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('B３') && まるばつ && B３) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('C３') && まるばつ && C３) {
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
って...` + `**もうそこ埋まってるわよ！**
別のとこにしなさいよね
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('A１') && まるばつ && !A１ && !A２ && !A３ && !B１ && !B２ && !B３ && !C１ && !C２ && !C３) {
                A１ = true
                B２ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃　┃
　━╋━╋━
２　┃╳┃
　━╋━╋━
３　┃　┃**
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('B１') && まるばつ && A１ && !A２ && !A３ && !B１ && B２ && !B３ && !C１ && !C２ && !C３) {
                B１ = true
                C１ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２　┃╳┃
　━╋━╋━
３　┃　┃**
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('A２') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("~~`" + `${message.author.username}` + "の番です`~~" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２〇┃╳┃
　━╋━╋━
３╳┃　┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('C２') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２　┃╳┃〇
　━╋━╋━
３╳┃　┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('A３') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A３ = true
                A２ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２╳┃╳┃
　━╋━╋━
３〇┃　┃**
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('C２') && まるばつ && A１ && A２ && A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                C３ = true
                C２ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２╳┃╳┃〇
　━╋━╋━
３〇┃●┃╳**
` + "```あいこみたいね。ま、" + `${message.author.username}` + "にしては頑張ったんじゃない？```")
                return;
            }
            if (message.content.includes('B３') && まるばつ && A１ && A２ && A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２╳┃╳┃╳
　━╋━╋━
３〇┃〇┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('C３') && まるばつ && A１ && A２ && A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２╳┃╳┃╳
　━╋━╋━
３〇┃　┃〇**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('B３') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２　┃╳┃
　━╋━╋━
３╳┃〇┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('C３') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２　┃╳┃
　━╋━╋━
３╳┃　┃〇**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('C１') && まるばつ && A１ && !A２ && !A３ && !B１ && B２ && !B３ && !C１ && !C２ && !C３) {
                B１ = true
                C１ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２　┃╳┃
　━╋━╋━
３　┃　┃**
` + "```「$A１」のように打ってください。```")
                return;
            }
            if (message.content.includes('A２') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２〇┃╳┃
　━╋━╋━
３　┃╳┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('C２') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２　┃╳┃〇
　━╋━╋━
３　┃╳┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('A３') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２　┃╳┃
　━╋━╋━
３〇┃╳┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('B３') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                B３ = true
                A３ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２　┃╳┃
　━╋━╋━
３╳┃〇┃**
` + "```「$A１」のように打ってください。```")
                return;
            }
            if (message.content.includes('A２') && まるばつ && A１ && !A２ && A３ && B１ && B２ && B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２〇┃╳┃●
　━╋━╋━
３╳┃〇┃╳**
` + "```あいこみたいね。ま、" + `${message.author.username}` + "にしては頑張ったんじゃない？```")
                return;
            }
            if (message.content.includes('C２') && まるばつ && A１ && !A２ && A３ && B１ && B２ && B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２●┃╳┃〇
　━╋━╋━
３╳┃〇┃╳**
` + "```あいこみたいね。ま、" + `${message.author.username}` + "にしては頑張ったんじゃない？```")
                return;
            }
            if (message.content.includes('C３') && まるばつ && A１ && !A２ && A３ && B１ && B２ && B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２●┃╳┃╳
　━╋━╋━
３╳┃〇┃〇**
` + "```あいこみたいね。ま、" + `${message.author.username}` + "にしては頑張ったんじゃない？```")
                return;
            }
            if (message.content.includes('C３') && まるばつ && A１ && !A２ && !A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２　┃╳┃
　━╋━╋━
３　┃╳┃〇**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('A２') && まるばつ && A１ && !A２ && !A３ && !B１ && B２ && !B３ && !C１ && !C２ && !C３) {
                A２ = true
                A３ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃　┃
　━╋━╋━
２〇┃╳┃
　━╋━╋━
３╳┃　┃**
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('B１') && まるばつ && A１ && A２ && A３ && !B１ && B２ && !B３ && !C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃〇┃╳
　━╋━╋━
２〇┃╳┃
　━╋━╋━
３╳┃　┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('C１') && まるばつ && A１ && A２ && A３ && !B１ && B２ && !B３ && !C１ && !C２ && !C３) {
                B１ = true
                C１ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２〇┃╳┃
　━╋━╋━
３╳┃　┃**
` + "```「$A１」のように打ってください```")
                return;
            }
            if (message.content.includes('C２') && まるばつ && A１ && A２ && A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２〇┃╳┃〇
　━╋━╋━
３╳┃╳┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('B３') && まるばつ && A１ && A２ && A３ && B１ && B２ && !B３ && C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃╳┃〇
　━╋━╋━
２〇┃╳┃●
　━╋━╋━
３╳┃〇┃╳**
` + "```あいこみたいね。ま、" + `${message.author.username}` + "にしては頑張ったんじゃない？```")
                return;
            }
            if (message.content.includes('C２') && まるばつ && A１ && !A２ && !A３ && !B１ && B２ && !B３ && !C１ && !C２ && !C３) {
                A２ = true
                A３ = true
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃　┃╳
　━╋━╋━
２〇┃╳┃〇
　━╋━╋━
３╳┃　┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('B３') && まるばつ && A１ && !A２ && !A３ && !B１ && B２ && !B３ && !C１ && !C２ && !C３) {
                A１ = false
                A２ = false
                A３ = false
                B１ = false
                B２ = false
                B３ = false
                C１ = false
                C２ = false
                C３ = false
                まるばつ = false
                message.channel.send("`" + `${message.author.username}` + "の番です`" + `
` + `**　 A　 B 　C
１〇┃　┃╳
　━╋━╋━
２〇┃╳┃
　━╋━╋━
３╳┃〇┃**
` + "```🎊スピカの勝ち！！🎉```")
                return;
            }
            if (message.content.includes('三目') && !まるばつ) {
                まるばつ = true;
                message.channel.send(`__**三目並べ(〇╳ゲーム)**__！！

` + "`〇/╳を多く取ったほうが勝ち`" + `
**スピカとまるばつゲームをするわ！
あんたからでいいわよ**
` + " ```「$三目」と打ってください\n" + `${message.author.username}` + "は〇です```")
                return;
            }

            //         if (message.content.includes(message.content)) {
            //             message.channel.send('ん？ごめん、よく聞こえなかったわ');
            //           return;
            //   }
            if (message.content.includes('ピン')) {
                message.pin()
                message.channel.send(`気に入ったから留めといてあげる`)
                return;
            }
            if (message.content.includes('倍数0.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 0.')) {
                message.channel.send('しょ、小数点？');
                return;
            }

            if (message.content.includes('倍数1.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 1.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数2.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 2.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数3.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 3.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数4.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 4.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数5.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 5.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数6.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 6.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数7.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 7.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数8.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 8.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数9.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数 9.')) {
                message.channel.send('しょ、小数点？');
                return;
            }
            if (message.content.includes('倍数0')) {
                message.channel.send('0から始まる数？ばっかじゃないの？');
                return;
            }
            if (message.content.includes('倍数-')) {
                message.channel.send('-...マイナス？スピカ、それよくわかんない');
                return;
            }
            if (message.content.includes('倍数 -')) {
                message.channel.send('-...マイナス？スピカ、それよくわかんない');
                return;
            }
            if (message.content.includes('倍数０')) {
                message.channel.send('0から始まる数？ばっかじゃないの？');
                return;
            }
            if (message.content.includes('倍数 0')) {
                message.channel.send('0から始まる数？ばっかじゃないの？');
                return;
            }
            if (message.content.includes('倍数 ０')) {
                message.channel.send('0から始まる数？ばっかじゃないの？');
                return;
            }
            if (message.content.includes('倍数')) {
                if (message.content.slice(-1).match(/数/)) {
                    message.channel.send('数字も打てないおバカさんなの？');
                    return;
                }
            }
            if (message.content.includes('倍数')) {
                var tesu = parseInt(message.content.slice(3), 10);
                var result = 'えーっと、';
                for (var i = 1; i <= (tesu - 1); i++) {
                    if ((tesu % i) == 0) {
                        tekitou;
                        var tekitou = (result += i + "と")
                    }
                } {
                    if ((tesu - i) == 0) {
                        tekitou;
                        var tekitou = (result += i)
                    }
                }
                if (tekitou.length > 2000) {
                    message.reply('残念ながら、文字制限みたいよ。');
                    return;
                }
                result.slice(result.length - 1);
                message.channel.send(result + 'の倍数ね！');
                return;
            }
            if (message.content.includes('語尾')) {
                message.channel.send('最後の文字は「' + message.content.slice(-1) + '」ね！');
                return;
            }
            if (message.content.includes('〇年△月□日')) {
                message.channel.send('そうそう、そんな感じで打ってね。曜日を検出するわよ');
                return;
            }
            if (message.content.includes('help そ１０')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`いいや　やめ　おや　w　笑　藁　lol　LOL　Lol　わあ　わぁ　そう？　つんでれ　ツンデレ　まだ？　bot　BOT　あり　あざま　あざす　行ってき　不自然　落ち　
おち　いってき　ぶたれたこと　やばい　ヤバイ　ヤヴァイ　やゔぁい　うん　有能　いい子　いいこ　どうしよ　お？　お！　ぉ！　おっは　どうした　むぅ　むう　むー　ムゥ　ムウ　ムー

>>$help そ１１
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ１１')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`ないよ　無いよ　ねぇ　ねえ　何・・・だと　なん・・だと　何...だと　なん...だと　何…だと　なん…だと　何。。。だと　なん。。。だと　なん、、、だと　
何、、、だと　どうなってる　わけがわからない　恐ろしい子　驚いた子　斜め上をいく　斜め上を行く　暑い　寒い　風　に謝れ　ランダム　?　？　ガンダム　だが断る　ライフはゼロ

>>$help そ１２
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ１２')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`ざわ・・・　人がごみのようだ　人がゴミのようだ　ひとがごみのようだ　ひとがゴミのようだ　できた　出来た　おかえり　待ってた　待っていた　まってた　
まっていた　君　おかあり　でけた　あれ　あ？　うんこ　うんち　poop　💩　ちんこ　ちんちん　ウンチ　わかった　嫌い　くたばれ　クタバレ　きらい　許さない　許す　許してあ　しね

>>$help そ１３
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ１３')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`Fuck　FUCK　fuck　ﾀﾋね　消え　バカ　ばか　馬鹿　莫迦　失せ　うせ　まじ　雑談　話そう　祭り　いいね　寝れ　ねれ　うーん　何話　カラオケ　ただい　遊ぼ　
あそぼ　ウンコ　チンコ　チンチン　おかしい　ダジャレ　ふとんがふっとんだ　布団が吹っ飛んだ　お金はおっかね　イカが怒った　アメはあめ　あめはあめ　飴はあめ　イカはいかが　梅はうめ

>>$help そ１４
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ１４')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`うめはうめ　アイスを愛す　秋田は飽きた　秋田はもうあきた　アルミ缶の上にあるみかん　イカを食べたいか　イクラはいくら　椅子いいっスね　
傷んだ廊下にいたんだろうか　イランはいらん　イルカは要るか　イルカはいるか　馬が埋ま　映画はええが　栄養はええよう　かえるが帰る　カッターを買った　カッター買った　きな粉が好きな

>>$help そ１５
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ１５')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`車が来るまで　紅葉を見に行こうよう　ゴキブリの動きぶり　サラダの皿だ　四天王は何してんの　ジャイアン死んじゃいやん　ジャイアン死んじゃイヤン　
喋るシャベル　太陽に行きたいよう　打撲で死んだ僕　あは　ふひひ　暗号　密会

<<__現在は__ここまで>>
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help その他')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`help　〇って呼んで　今日は何の日　何時　時間　何月　何日　おは　停止　〇分　チノ　ココア　聖魔眼　リンク　url　サーバー　元気?　元気？　減った　あざ
食べよ　たべよ　空いた　すいた　へった　痛い　一緒に寝よ　いっしょに寝よ　一緒にねよ　いっしょにねよ　バルス　かわいそ　かわい　かわいた　いたいだ　いたい　不思議　腐　死ぬな　

>>$help そ２
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ２')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`ﾀﾋぬな　面倒　めんど　やあ　やぁ　ヤア　ヤァ　ランダムな数字　ランダムひらがな　ランダムカタカナ　ランダム英語　ランダム数字　スピカの確率　数字　進数　
変換　を　無視　あげる　あっざ　なるほ　冗談じゃ　冗談だ　冗談で　ってば　なんでもない　風呂　大丈夫？　平気？　呼んでない　呼んで無い　よんでない　よんで無い　読んでない

>>$help そ３
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ３')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`読んで無い　薄い　ちゃんかわい　いえい　いぇい　イエイ　イェイ　いぇーい　イェーイ　いえーい　イエーイ　文字化け　遊ぼ　天使　神　結婚　付き合　
聞き間違い　はいはい　！？　!?　...　…　そうなの？　乙　おつ　寝ます　ねます　ニタ　しゅごい　何歳　何才　誕生日　誰　和露多　ワロタ　わろた　しらね　シラネ　小学　仮の名　名無し

>>$help そ４
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ４')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`〇って　君の名　デート　下ネタ　ロリコン　夢の国　絶頂　魔法少女　ヤろ　やろ　わーい　眠い　ベット　ﾍﾞｯﾄ　えぇ　ええ　亞祖母　ひざまくら　膝枕　ひざ枕　
膝まくら　かわいく　可愛く　可愛いく　許して　ヤら　やら　ヴォイ　あい　愛　LOVE 　Love　ぶち　そうじゃな　いいえ　死　ﾀﾋ　おっぱい　thank　そっか　カップ　円周率　ﾆﾀ　へぇ　卍

>>$help そ５
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ５')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`まんじ　眠い？　眠い?　ねむい？　ねむい?　(´・ω・` + '`' + `)　／^o^＼　本当にー？　ほんとうに〜？　ほんとうにー？　まじ？　本当〜？　ほんと〜？　ほんとー？　
ほんとにー？　ほんとに〜？　ま？　本当に？　本当？　mj？　mj?　まじで？　本当は？　ほんとうは？　ほんとは？　ほんとう？　ほんと？　ほんとうに？　ほんとに？　ガチで？　がちで？

>>$help そ６
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ６')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`ガチ？　嘘　大丈夫だ　平気だ　大丈夫で　平気で　問題無い　無問題　お前　てめえ　てめぇ　テメェ　おめえ　オメェ　不知火　しらぬい　育ての親　娘　頑張った　
頑張って　怒んな　ほんとだよ　ほんとうだよ　そうだよ　ノシ　ﾉｼ　ども　大丈夫？　大丈夫?　草　( ^ω^ )　クッキー　🍪チョコ　🍫　スナック　キャンデー　キャンディー　:candy:　🍭　アメ

>>$help そ７
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ７')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`飴　あめ　ドーナッツ　ドーナツ　どういたしまして　ケーキ　プリン　好きな人　やった　ヤッタ　殺　氏ね　会話し　(編集済)　いいよ　いいと　;ω;　;∀;　
＼(^o^)／　\(^o^)/　サイコロ　さいころ　にゃー　勝った　かった　もう一回　あいこ　負けた　まけた　ミス　じゃんけん　ニャー　久しぶり　おひさ　お久　；ω；　暇か　熱　風邪　http

>>$help そ８
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ８')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`.jp　www.　暇　ひま　私たち、輝きたい　癒して　可愛　好き　難しい　むむ　すこ　(ﾟ∀ﾟ')　すき　好こ　スキ　凄　すご　かわえ　かわい　妥当　完璧　おっと
こいつ　進化　あれ　ああ　ごめ　すまそ　すみません　悪かった　失敬　面目　(´ω` + '`' + `；)　ok　おk　おっけ　オッケ　嬉しい　よかった　しらぬい　グー　ぐー　チョキ　ちょき　パー　ぱー

>>$help そ９
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help そ９')) {
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('その他', `ここでは、現在スピカが反応する言葉をすべて紹介します。
気になるものがあれば、「$〇」といった感じで是非試してみてください`)
                    .addField(`可愛い　どう思う　こんち　こんば　こんにち　初めまして　はじめまして　スピカ　すぴか　スーピカー　スピーカー　ウピカ　うぴか　ぴぃ　ピィ　スゥ　すぅ　
だね　だな　やほ　やっほ　ヤッホ　やっと　おぉ　お！　ごめん　やばい　打たれたこと　そう　なるへそ　おーい　おい　どう？　そうだったの　(         ´･∀･` + '`' + `         )　じゃない？　

>>$help そ１０
`, "󠂪 󠂪󠂪󠂪")
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/506888ebbfe90c0ba460d9fff1d7ff63.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }
            if (message.content.includes('help')) {
                var mys = client.guilds.map(a => a.name);
                var zombiArray = client.guilds.map(a => a.name);
                var zombi = 0;
                for (var i = 0; i < zombiArray.length; i++) {
                    if (zombiArray[i] == 2) {
                        zombi++;
                    }
                }
                var now = new Date();
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth();
                var date = now.getDate();
                var hour = now.getHours();
                var min = now.getMinutes()
                let embed = new discord.RichEmbed()
                    .setTitle(`スピカのヘルプよっ！
$help [コマンド] と打てば、特定のコマンドについてのヘルプを表示します。例：$help 進数`)
                    .setDescription(`＜冒頭に$を忘れずに！＞`)
                    .addField('言葉', "`〇って呼んで`、`おは`、`語尾`、`マルコフ`、`口調`、`文字`、その他")
                    .addField('計算', "`数字`、`進数`、`変換`、`を`、`倍数`、`ランダム数字`、`電卓`")
                    .addField('時間', "`今日は何の日`、`何時`、`タイマー`、`曜日`、`停止`")
                    .addField('面白', "`じゃんけん`、`くじ`、`問題`、`サイコロ`、`語尾`、`ランダム`、`スピカの確率`、`密会`、`暗号`、`R18`、`心情`　、目下製作中→`まるばつ`、`しりとり`、`脳トレ`")
                    .addField('管理', "`検索`、`リンク`、`ログ`、`ピン`、`絵文字`、`役職`、`help`")
                    .addField('⬇️入っているサーバー合計⬇️', i)
                    .addField(`スピカを招待したい場合、上のタイトルをクリックしてください。`, `その他質問・要望等がある場合、「**スピカinfo**」というチャンネルを作ると質問・要望を送信することができます。`)
                    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=469474420050886657&permissions=1077275840&scope=bot`)
                    .setColor('#00ffca')
                    .setThumbnail("https://cdn.discordapp.com/avatars/469474420050886657/ffaff4f5603ef14dc98fb492baabb34c.png?size=2048")
                    .setFooter('実行時刻：' + (year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
                message.channel.send(embed)
                return;
            }




            if (message.content.includes('顔文字')) {
                const client = require('cheerio-httpcli');
                const p = client.fetch('https://www.webpagefx.com/tools/emoji-cheat-sheet/')
                    .then((result) => {
                        message.channel.send(result.$('title').text());
                    });
                message.react('🍃');
                return;
            }
            if (message.content.includes('Test') && !maze_0_0_front) {
                console.log("Testを受け取った！")
                let embed = new discord.RichEmbed()
                    .setTitle(`3D迷路！`)
                    .addField('3Dの迷路を抜け出してね☆', "$3D:迷路スタート\n$左:90°左回転\n$前:前進")
                    .setColor('#00ffca')
                    .setTimestamp(new Date())
                message.channel.send(embed)
                console.log("embedを喋った！")
                maze_0_0_front = true;
                if (maze_0_0_front) {
                    console.log("クララが立った！")
                }
            }
            if (message.content.includes('TEST')) {
                const filter3D = m => m.content.startsWith('TEST')
                console.log("TESTを受け取った！")
                message.channel.awaitMessages(filter3D, {
                        max: 1,
                        flag: maze_0_0_front,
                        errors: ['flag']
                    })
                    .then(collected => {
                        console.log("内容はこれだっ！")
                        message.channel.send("成功")
                        maze_0_0_front = false;
                        maze_0_0_left = true;
                        maze_0_1_front = true;
                        console.log("内容を喋った！")
                        return;
                    })
                    .catch(collected => {
                        console.log("当てはまらなかった！")
                        message.channel.send("その行動はとれないわよっ");
                        return;
                    });
            }
            if (message.content.includes('分')) {
                var hun = message.content.slice(1, 2);
                if (message.content.slice(3, 4).match("分")) {
                    var hun = message.content.slice(1, 3);
                } else if (message.content.slice(4, 5).match("分")) {
                    var hun = message.content.slice(1, 4);
                } else if (message.content.slice(5, 6).match("分")) {
                    var hun = message.content.slice(1, 5);
                } else if (message.content.slice(6, ).match("分")) {
                    message.channel.send("そこまで大きいなら、「$〇時間」にしたらどう？")
                }
                message.channel.send('仕方ないわね。' + hun + '分くらい数えてあげるわ');
                message.react('🕐');

                function sleep(waitSec, callbackFunc) {
                    var spanedSec = 0;
                    var id = setInterval(function () {
                        spanedSec++;
                        if (spanedSec >= waitSec) {
                            clearInterval(id);
                            if (callbackFunc) callbackFunc();
                        }
                    }, 1000);
                }
                sleep(Number(hun * 30), function () {
                    message.channel.send('あと' + (hun * 30) + '秒で' + hun + '分よ！！');
                    sleep(Number(hun * 30), function () {
                        message.reply(hun + '分たったわよ！！');
                        return;
                    });
                });
                return
            }
            if (message.content.includes('時間')) {
                var hun = message.content.slice(1, 2);
                if (message.content.slice(3, 4).match("時")) {
                    var hun = message.content.slice(1, 3);
                } else if (message.content.slice(4, 5).match("時")) {
                    var hun = message.content.slice(1, 4);
                } else if (message.content.slice(5, 6).match("時")) {
                    var hun = message.content.slice(1, 5);
                } else if (message.content.slice(6, ).match("時")) {
                    message.channel.send("そこまで大きい時間、覚えられないわよ！わ、悪かったわね！")
                }
                message.channel.send('仕方ないわね。' + hun + '時間くらい数えてあげるわ');
                message.react('🕐');

                function sleep(waitSec, callbackFunc) {
                    var spanedSec = 0;
                    var id = setInterval(function () {
                        spanedSec++;
                        if (spanedSec >= waitSec) {
                            clearInterval(id);
                            if (callbackFunc) callbackFunc();
                        }
                    }, 60000); //１分
                }
                sleep(Number(hun * 30), function () {
                    message.channel.send('あと' + (hun * 30) + '分で' + hun + '時間よ！！');
                    sleep(Number(hun * 30), function () {
                        message.reply(hun + '時間たったわよ！！');
                        return;
                    });
                });
                return
            }
            //〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜003712944882789746315:qy5yt1vw_wq
            var tosi = message.content.indexOf('年'); //https://cse.google.com/cse?cx=003712944882789746315:qy5yt1vw_wq
            if (tosi == 1) {
                message.channel.send("何年かぐらい教えなさいよ。");
                return; //AIzaSyCevqQInS2glVCsLlPb8_apyIIk7EJ8X_Y
            }
            var two = parseInt(message.content.slice((tosi - 2), tosi));
            if (tosi == 2) {
                var two = parseInt(message.content.slice(1, 2), 10);
            } //〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
            var gatu = message.content.indexOf('月');
            var ggatu = parseInt(message.content.slice(tosi + 1, gatu), 10);
            if (ggatu > 12) {
                message.channel.send(`わかる？一年は、12ヶ月なのよ？もう。`);
                return;
            } else if (ggatu < 1) {
                message.channel.send(`わかる？一年は、12ヶ月なのよ？もう。`);
                return;
            } //〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
            var niti = message.content.indexOf('日');
            var niniti = parseInt(message.content.slice(gatu + 1, niti), 10);
            if (ggatu == 1) {
                if (niniti > 31) {
                    message.channel.send(`わかる？一月は、31日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 2) {
                if (tosi % 4 == 0) {
                    if (tosi % 100 == 0) {
                        if (tosi % 400 == 0) {
                            if (niniti > 29) {
                                message.channel.send(`わかる？その年の二月は、29日までしかないのよ？`);
                                return;
                            }
                        } else {
                            if (niniti > 28) {
                                message.channel.send(`わかる？その年の二月は、28日までしかないのよ？`);
                                return;
                            }
                        }
                    } else {
                        if (niniti > 29) {
                            message.channel.send(`わかる？その年の二月は、29日までしかないのよ？`);
                            return;
                        }
                    }
                } else {
                    if (niniti > 28) {
                        message.channel.send(`わかる？その年の二月は、28日までしかないのよ？`);
                        return;
                    }
                }
            } else if (ggatu == 3) {
                if (niniti > 31) {
                    message.channel.send(`わかる？三月は、31日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 4) {
                if (niniti > 30) {
                    message.channel.send(`わかる？四月は、30日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 5) {
                if (niniti > 31) {
                    message.channel.send(`わかる？五月は、31日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 6) {
                if (niniti > 30) {
                    message.channel.send(`わかる？六月は、30日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 7) {
                if (niniti > 31) {
                    message.channel.send(`わかる？七月は、31日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 8) {
                if (niniti > 31) {
                    message.channel.send(`わかる？八月は、31日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 9) {
                if (niniti > 30) {
                    message.channel.send(`わかる？九月は、30日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 10) {
                if (niniti > 31) {
                    message.channel.send(`わかる？十月は、31日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 11) {
                if (niniti > 30) {
                    message.channel.send(`わかる？十一月は、30日までしかないのよ？`);
                    return;
                }
            } else if (ggatu == 12) {
                if (niniti > 31) {
                    message.channel.send(`わかる？十二月は、31日までしかないのよ？`);
                    return;
                }
            }
            if (niniti < 1) {
                message.channel.send(`わかる？一年は、12ヶ月なのよ？もう。`);
                return;
            }
            //〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
            var two = parseInt(message.content.slice((tosi - 2), tosi));
            if (tosi == 2) {
                var two = parseInt(message.content.slice(1, 2), 10);
            }

            var ttwo = parseInt(message.content.slice((1), tosi));
            if (tosi == 2) {
                var ttwo = parseInt(message.content.slice(1, 2), 10);
            }
            if (ttwo > 275759) {
                message.channel.send(`それ、下手したら地球滅んでるわよ...？`);
                return;
            } //〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
            if (message.content.includes(two + '年' + ggatu + '月' + niniti + '日')) {
                let day = '日月火水木金土' [new Date(ttwo, ggatu - 1, niniti).getDay()];
                message.channel.send(`えーっと、それは...` + day + `曜日よ！`);
                return;
            }

        }
    } else {
        var info = global.user().find({
            id: message.author.id
        }).value();
        var responce = [
            `ん？${info.name}、呼んだ？`,
            `そういえばさ……そういえばさ……${info.name}は……素直な女の子のほうが好き？`,
            `何よ、${info.name}。スピカ、暇じゃないんだけど。`,
            `どうしたの？${info.name}。今**たまたま**暇だったから、付き合ってあげるわよ？`
        ];
        message.channel.send(responce[global.randomInt(responce.length)]);
        message.react('💫');
        return;
    }
};

function howToCall(client, message, name) {
    var info = global.user().find({
        id: message.author.id
    }).value();
    if (!info) {
        global.user().push({
            id: message.author.id,
            name: name,
            timeout: 0
        }).write();
    } else {
        global.user().find({
            id: message.author.id
        }).assign({
            name: name,
            timeout: 0
        }).write();
    }
    message.channel.send(`これからは${info.name}って呼んであげるねっ！`);
    return;
}
global.randomInt = (max, min = 0) => {
    var newMax, newMin;
    if (max < min) {
        newMax = min, newMin = max;
    } else {
        newMax = max, newMin = min;
    }
    return Math.floor(Math.random() * Math.floor(newMax - newMin)) + newMin;
}
var def = {
    timeout: 0,
    count: 0
};
global.RPG = JSON.parse(JSON.stringify(def));
client.on('message', message => {
    if (message.author.bot || !message.guild) return
    if (message.content.includes('！RPG')) {
        if (global.RPG.timeout > message.createdTimestamp) {
            global.RPG.count++;
            if (global.RPG.count > 100) global.RPG.count = 100;
        } else {
            global.RPG.count = 0;
        }
        var res = resRPG(global.RPG.count);
        message.channel.send(res[randomInt(res.length)]);
        global.RPG.timeout = message.createdTimestamp + 25000; //25秒で支度しな（キリッ
        return;
    }
});

function resRPG(count) {
    var rtn = [
        [`RPGを始めたかったけど、（技術的に無理だから、）またいつかね。`],
    ];
    return rtn[count];
}

function randomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//var fs = WScript.CreateObject("Scripting.FileSystemObject");
client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf("$") !== 0) return;
    const appId = await register();
    const text = await dialogue(appId, message.content.slice(1));
    //        message.channel.send(text);
    return;
});
client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.includes(message.content)) {
        let reportschannel2 = client.guilds.get('465522805027373060').channels.find(`name`, `${message.author.id}`);
        if (!reportschannel2) {
            client.guilds.get('465522805027373060').createChannel(`${message.author.id}`, "text", [{
                id: `${message.guild.id}`,
                deny: ['MANAGE_MESSAGES'],
                allow: ['SEND_MESSAGES']
            }]);
        }

        function sleep(waitSec, callbackFunc) {
            var spanedSec = 0;
            var id = setInterval(function () {
                spanedSec++;
                if (spanedSec >= waitSec) {
                    clearInterval(id);
                    if (callbackFunc) callbackFunc();
                }
            }, 1000);
        }
        sleep(2, function () {
            let reportschannel = client.guilds.get('465522805027373060').channels.find(`name`, `${message.author.id}`);
            if (!reportschannel) return;
            eval(`var A${message.author.id}_` + "=" + "+" + 1 + ";");
            reportschannel.send(``)
        })
    }
    if (message.channel.name === 'スピカinfo') {
        var now = new Date();
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var hour = now.getHours();
        var min = now.getMinutes()
        let embed = new discord.RichEmbed()
            .setTitle(`質問・要望を送信しました👌`)
            .addField('質問・要望内容', `${message.content}`)
            .setColor('#00ffca')
            .setFooter((year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
        message.channel.send(embed);
        let embed2 = new discord.RichEmbed()
            .setTitle(`質問・要望を受信しました😆`)
            .addField('質問・要望内容', `${message.content}`)
            .addField('チャンネルid', `${message.channel.id}`)
            .addField('質問者', `${message.author}`)
            .setColor('#00fff2')
            .setFooter((year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分-${message.guild}`)
        client.channels.get('501351495267254272').send(embed2);
        client.channels.get('528620617344352297').send(embed2);
        return;
    }
    if (message.channel.id === '501351495267254272') {
        var now = new Date();
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var hour = now.getHours();
        var min = now.getMinutes()
        let embed3 = new discord.RichEmbed()
            .setTitle(`返答を送信しました👌`)
            .addField('返答内容', `${message.content}`)
            .setColor('#00ffca')
            .setFooter((year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
        var あいでぃー = message.content.split(" ");
        if (message.content.slice(2).match(/　/)) {
            var あいでぃー = message.content.split("　");
        }
        var 全文 = message.content.slice(18)
        message.channel.send(embed3);
        let embed4 = new discord.RichEmbed()
            .setTitle(`返答を受信しました😆`)
            .addField('返答内容', 全文)
            .setColor('#00fff2')
            .setFooter((year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分-${message.guild}`)
        client.channels.get(あいでぃー[0]).send(embed4);
        return;
    }
    if (message.channel.id === '528620617344352297') {
        var now = new Date();
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var hour = now.getHours();
        var min = now.getMinutes()
        let embed3 = new discord.RichEmbed()
            .setTitle(`返答を送信しました👌`)
            .addField('返答内容', `${message.content}`)
            .setColor('#00ffca')
            .setFooter((year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分`)
        var あいでぃー = message.content.split(" ");
        if (message.content.slice(2).match(/　/)) {
            var あいでぃー = message.content.split("　");
        }
        var 全文 = message.content.slice(18)
        message.channel.send(embed3);
        let embed4 = new discord.RichEmbed()
            .setTitle(`返答を受信しました😆`)
            .addField('返答内容', 全文)
            .setColor('#00fff2')
            .setFooter((year) + "年" + (month + 1) + '月' + (date) + '日、' + (hour + 9) + '時' + min + `分-${message.guild}`)
        client.channels.get(あいでぃー[0]).send(embed4);
        client.channels.name.get("スピカinfo").send(embed4);
        return;
    }
});
client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
    if (message.content === '$join') {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
                .then(connection => {
                    message.reply('何よ。仕方ないから来てやったわ');
                    /*     const ytdl = require("ytdl-core"),
                               fs = require("fs"),
                      	        youtubeId = `LrR8lea-AVk`, //DLするYoutube動画のID（urlのv=の後ろの部分11桁）
                               BASE_PATH = `https://www.youtube.com/watch?v=`,
                               url = BASE_PATH+youtubeId;
                         ytdl(url).pipe(fs.createWriteStream(`${youtubeId}.mp3`));
                         const dispatcher = connection.playFile(`./${youtubeId}.mp3`);*/
                }).catch(console.log);
        } else {
            message.reply('どこに行けっていうの？\nまずあんたがvcには入りなさいよね！'); //18yf4f45u6c2bf40
        }
        return
    }

})
/*
  const filter0_0_h = m => m.content.startsWith('$左');
  msg.channel.awaitMessages(filter0_0_s, { max: 1,flag:!j0_0_s && j0_0_h && !j0_0_m && !j0_0_u,errors:['']})
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed0_0_h = new discord.RichEmbed()
  .setTitle(`レベル１
$左`)
  embed0_0_h.setImage(`https://cdn.discordapp.com/attachments/526781217408942080/527351963072069673/2018-12-26_14.08.15.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed0_0_h)
    j0_0_h = false;
    j0_1_s = false;
    j0_0_u = true;
    return;
  if (msg.content.includes('$左')&& !j0_0_h && !j0_0_s && !j0_0_m && j0_0_u) {
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed = new discord.RichEmbed()
  .setTitle(`レベル１
$左`)
  embed.setImage(`https://cdn.discordapp.com/attachments/499225689225166858/526771793277747200/2018-12-24_23.42.51.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed)
    j0_0_u = false;
    j0_0_m = true;
    return;
  }
  if (msg.content.includes('$左')&& !j0_0_h && !j0_0_u && j0_0_m && !j0_0_u) {
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed = new discord.RichEmbed()
  .setTitle(`レベル１
$左/前`)
  embed.setImage(`https://cdn.discordapp.com/attachments/526781217408942080/527352246665478164/2018-12-26_14.09.23.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed)
    j0_0_m = false;
    j1_0_s = true;
    j0_0_s = true;
    return;
  }
  if (msg.content.includes('$左')&& j0_0_s && !j0_0_h && !j0_0_u && !j0_0_m) {
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed = new discord.RichEmbed()
  .setTitle(`レベル１
$左/前`)
  embed.setImage(`https://cdn.discordapp.com/attachments/526781217408942080/527350311250034689/2018-12-26_14.01.19.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed)
    j0_0_s = false;
    j0_1_s = true;
    j0_0_h = true;
    return;
  }
  
  if (msg.content.includes('$前')&& j0_1_s) {
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed = new discord.RichEmbed()
  .setTitle(`レベル１
$左/前`)
  embed.setImage(`https://cdn.discordapp.com/attachments/526781217408942080/527359557043748874/2018-12-26_14.38.22.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed)
    j0_1_s = false;
    j0_1_h = true;
    j0_2_s = true;
    return;
  }
  if (msg.content.includes('$左')&& !j0_1_s && j0_1_h && !j0_1_m && !j0_1_u) {
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed = new discord.RichEmbed()
  .setTitle(`レベル１
$左`)
  embed.setImage(`https://cdn.discordapp.com/attachments/526781217408942080/527359611599060992/2018-12-26_14.38.39.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed)
    j0_1_h = false;
    j0_1_u = true;
    j0_2_s = false;
    return;
  }
  if (msg.content.includes('$左')&& !j0_1_h && !j0_1_s && !j0_1_m && j0_1_u) {
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed = new discord.RichEmbed()
  .setTitle(`レベル１
$左`)
  embed.setImage(`https://cdn.discordapp.com/attachments/526781217408942080/527359690938515462/2018-12-26_14.38.55.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed)
    j0_1_u = false;
    j0_1_m = true;
    return;
  }
  if (msg.content.includes('$左')&& !j0_1_h && !j0_1_u && j0_1_m && !j0_1_u) {
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed = new discord.RichEmbed()
  .setTitle(`レベル１
$左/前`)
  embed.setImage(`https://cdn.discordapp.com/attachments/526781217408942080/527359763420282891/2018-12-26_14.39.13.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed)
    j0_1_m = false;
    j1_1_s = true;
    j0_1_s = true;
    return;
  }
  if (msg.content.includes('$左')&& j0_1_s && !j0_1_h && !j0_1_u && !j0_1_m) {
    if (msg.author.bot) return;
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  let embed = new discord.RichEmbed()
  .setTitle(`レベル１
$左/前`)
  embed.setImage(`https://cdn.discordapp.com/attachments/526781217408942080/527359557043748874/2018-12-26_14.38.22.png`)
  .setColor('#00ffca')
  .setFooter('実行時刻：' + (year)+ "年" + (month + 1) + '月' + (date) +'日、' + (hour+9) + '時' + min +`分`)
  msg.channel.send(embed)
    j0_1_s = false;
    j0_2_s = true; 
    j0_1_h = true;
    return;
  }
})*/
/*let MeCab = new require('mecab-async');
let mecab = new MeCab();
let str = "蜂に刺された";

mecab.parse(str,(err,result)=>{
if(err){
console.log(err)
}
console.log(result);
});*/