const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!';

client.once('ready', () => {
    console.log('Batko ti Borisov e tuk!');
});

client.on ('message', message => {
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    var rangel = [
        'https://ibb.co/YRMQj5C',
        'https://ibb.co/6D5bz5k',
        'https://ibb.co/QP9yN67',
        'https://ibb.co/gF0jJBk',
        'https://ibb.co/PrcmdVn',
        'https://ibb.co/GtdBhtV',
        'https://ibb.co/xJ8gycq',
        'https://ibb.co/TWYyWSh',
        'https://ibb.co/xfJZT62',
        'https://ibb.co/qYK3Sjv',
        'https://ibb.co/HgTXQ6J',
        'https://ibb.co/8M8XKnk',
        'https://ibb.co/9y7TcvF',
        'https://ibb.co/3sQCgqm',
        'https://ibb.co/K9snG53',
        'https://ibb.co/HVrzny1',
        'https://ibb.co/mhYTp46',
        'https://ibb.co/ctvfJX6',
        'https://ibb.co/kMyF7Jv',
        'https://ibb.co/bHCxnfd',
        'https://ibb.co/hBnq2wd'
        
    ];
    var randomRangel = rangel[Math.floor(Math.random()*rangel.length)];

    var alex = [
        'https://ibb.co/93RMwSY',
        'https://ibb.co/p0psMQh',
        'https://ibb.co/SyZTS9B'
    ];
    var randomAlex = alex[Math.floor(Math.random()*alex.length)];

    var ivan = [
        'https://ibb.co/9NcGz02',
        'https://ibb.co/Qdh9Wr2',
        'https://ibb.co/FnBR1zY',
        'https://ibb.co/SyZTS9B'
        
    ];
    var randomIvan = ivan[Math.floor(Math.random()*ivan.length)];

    var dido = [
        'https://ibb.co/bL1MNgc',
        'https://ibb.co/fGjxsWG',
        'https://ibb.co/ThYrYkg',
        'https://ibb.co/6Rn24dz',
        'https://ibb.co/TcL0GMr',
        'https://ibb.co/h84pqZf',
        'https://ibb.co/4j6N8Yv',
        'https://ibb.co/g9LrqCG',
        'https://ibb.co/mDz65x0',
        'https://ibb.co/RPHTGQS',
        'https://ibb.co/TwpYqbg',
        'https://ibb.co/RB720rY'
        
        
    ];
    var randomDido = dido[Math.floor(Math.random()*dido.length)];

    var nikolay = [
       'https://ibb.co/7Y7xbjX',
       'https://ibb.co/Y0R1ZQJ',
       'https://ibb.co/Xyk5sym',
       'https://ibb.co/jfSPcQK',
       'https://ibb.co/yRcfPcj',
        'https://ibb.co/n3kJ1Bx',
        'https://ibb.co/rFbZD6h',
        'https://ibb.co/KWzNqmv'
    ];
    var randomNikolay = nikolay[Math.floor(Math.random()*nikolay.length)];

    var kamen = [
        'https://ibb.co/BykWS5j',
        'https://ibb.co/hgCgJg4',
        'https://ibb.co/s66b165',
        'https://ibb.co/02pxyts',
        'https://ibb.co/PjYs6B2',
        'https://ibb.co/qmS79Rg',
        'https://ibb.co/mGGQ0ns'
    ];
    var randomKamen = kamen[Math.floor(Math.random()*kamen.length)];

    var stoil = [
        'https://ibb.co/hHHYcYg',
        'https://ibb.co/zGdpZYT',
        'https://ibb.co/qsk1nWJ',
        'https://ibb.co/SXXgR2N',
        'https://ibb.co/yRcfPcj',
        'https://ibb.co/G72jffy'
    ];
    var randomStoil = stoil[Math.floor(Math.random()*stoil.length)];

    var zaro = [
        'https://ibb.co/8dnx99t',
        'https://ibb.co/9213Dv3',
        'https://ibb.co/3sZpbcC',
        'https://ibb.co/TYXb6vb',
        'https://ibb.co/qynnGmP',
        'https://ibb.co/mHv8WMG'
    ];
    var randomZaro = zaro[Math.floor(Math.random()*zaro.length)];

    var serko = [
        'https://ibb.co/bN0zjR3',
        'https://ibb.co/1KJDRXF'
    ];
    var randomSerko = serko[Math.floor(Math.random()*serko.length)];

    var ivo = [
        'https://ibb.co/F7M4nQB',
        'https://ibb.co/7kFhVT3',
        'https://ibb.co/w4MYsMD',
        'https://ibb.co/RySfNcF',
        'https://ibb.co/Q6pmPpJ',
        'https://ibb.co/FxXRfSW',
        'https://ibb.co/wQkvQPx',
        'https://ibb.co/Qnf1z4W',
        'https://ibb.co/zx6q8SY',
        'https://ibb.co/bmPyjsH',
        'https://ibb.co/xSsKmMn',
        'https://ibb.co/Qdfq57z',
        'https://ibb.co/PDLqnJC',
        'https://ibb.co/k9bHwQv'
    ];
    var randomIvo = ivo[Math.floor(Math.random()*ivo.length)];

    switch (command){
        case 'ivan':
            message.channel.send(randomIvan);
            break;

        case 'alex':
            message.channel.send(randomAlex);
            break;

        case 'rangel':
            message.channel.send(randomRangel);
            break;

        case 'stoil':
            message.channel.send(randomStoil);
            break;

        case 'zaro':
            message.channel.send(randomZaro);
            break;  

        case 'kamen':
            message.channel.send(randomKamen);
            break;

        case 'nikolai':
            message.channel.send(randomNikolay);
            break;
            
        case 'dido':
            message.channel.send(randomDido);
            break;

        case 'serko':
            message.channel.send(randomSerko);
            break;

        case 'ivo':
            message.channel.send(randomIvo);
            break;

        default:
            message.channel.send('Kvo mi lafish ve manqk?');
            break;

    }
});

client.login('OTI0NDcwNTIyNzE1MTkzMzc0.YcfCRA.HkJbNr1o0kSMuPIlIy5Cyx5hp2I');
