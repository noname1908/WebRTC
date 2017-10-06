const openStream = require('./openStream');

openStream();

const Peer = require('simple-peer');

const P = new Peer({ initiator });