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
        'https://ibb.co/qkHdTG2',
        'https://ibb.co/9HynYPL',
        'https://ibb.co/N6BpcWV',
        'https://ibb.co/M8VGnLB',
        'https://ibb.co/zNkK7nD',
        'https://ibb.co/597WJTW',
        'https://ibb.co/3F3D5q1',
        'https://ibb.co/C1xHpK0',
        'https://ibb.co/bHCxnfd',
        'https://ibb.co/hBnq2wd'
    ];
    var randomRangel = rangel[Math.floor(Math.random()*rangel.length)];

    var alex = [
        'https://ibb.co/93RMwSY',
        'https://ibb.co/p0psMQh',
        'https://ibb.co/fqh1L2h'
    ];
    var randomAlex = alex[Math.floor(Math.random()*alex.length)];

    var ivan = [
        'https://ibb.co/9NcGz02',
        'https://ibb.co/Qdh9Wr2',
        'https://ibb.co/FnBR1zY',
        'https://ibb.co/bQBhXgh'
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
        'https://ibb.co/bWt5jK2',
        'https://ibb.co/1Lc3M9J',
        'https://ibb.co/TwpYqbg',
        'https://ibb.co/RB720rY'
    ];
    var randomDido = dido[Math.floor(Math.random()*dido.length)];

    var nikolay = [
       'https://ibb.co/7Y7xbjX',
       'https://ibb.co/Y0R1ZQJ',
       'https://ibb.co/Xyk5sym',
       'https://ibb.co/jfSPcQK',
       'https://ibb.co/r6qcdtz',
       'https://ibb.co/tzpRyHW',
        'https://ibb.co/KWzNqmv',
        'https://ibb.co/rFbZD6h'
    ];
    var randomNikolay = nikolay[Math.floor(Math.random()*nikolay.length)];

    var kamen = [
        'https://ibb.co/BykWS5j',
        'https://ibb.co/hgCgJg4',
        'https://ibb.co/s66b165',
        'https://ibb.co/02pxyts',
        'https://ibb.co/PjYs6B2',
        'https://ibb.co/4p4QcgM',
        'https://ibb.co/mGGQ0ns',
        'https://ibb.co/qmS79Rg'
    ];
    var randomKamen = kamen[Math.floor(Math.random()*kamen.length)];

    var stoil = [
        'https://ibb.co/hHHYcYg',
        'https://ibb.co/zGdpZYT',
        'https://ibb.co/qsk1nWJ',
        'https://ibb.co/SXXgR2N',
        'https://ibb.co/G72jffy'
    ];
    var randomStoil = stoil[Math.floor(Math.random()*stoil.length)];

    var zaro = [
        'https://ibb.co/8dnx99t',
        'https://ibb.co/9213Dv3',
        'https://ibb.co/3sZpbcC',
        'https://ibb.co/TYXb6vb',
        'https://ibb.co/qynnGmP',
        'https://ibb.co/mHv8WMG',
        'https://ibb.co/DDQwtsP'
    ];
    var randomZaro = zaro[Math.floor(Math.random()*zaro.length)];

    var serko = [
        'https://ibb.co/bN0zjR3',
        'https://ibb.co/1KJDRXF'
    ];
    var randomSerko = serko[Math.floor(Math.random()*serko.length)];

    var ivo = [
        'https://ibb.co/7kkqf8j',
        'https://ibb.co/nkwykpF',
        'https://ibb.co/XZcdZX4',
        'https://ibb.co/MRFN2dx',
        'https://ibb.co/bRdff4c',
        'https://ibb.co/BCGXjRN',
        'https://ibb.co/1qNv739',
        'https://ibb.co/DD9kBBR',
        'https://ibb.co/zZR5LVF',
        'https://ibb.co/hCrgGWw',
        'https://ibb.co/X3300z4',
        'https://ibb.co/m9z16Db',
        'https://ibb.co/1nCmttn',
        'https://ibb.co/7jNmWSN',
        'https://ibb.co/wLb9GjN'
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
