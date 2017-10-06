const openStream = require('./openStream');
const Peer = require('simple-peer');
const $ = require('jquery');

openStream((stream) => {
    playVideo(stream, 'localStream');
    const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });

    p.on('signal', token => {
        $('#txtMySignal').val(JSON.stringify(token));
    });

    $('#btnConnect').click(() => {
        const friendSignal = JSON.parse($('#txtFriendSignal').val());
        p.signal(friendSignal);
    });

    p.on('stream', friendStream => playVideo(stream, 'friendStream'));
});