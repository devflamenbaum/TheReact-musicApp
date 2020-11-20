import { v4 as uuidv4 } from 'uuid';

function chillHop(){
    return [
        {
            name: 'Slow Down',
            cover: 'https://i1.sndcdn.com/artworks-yXZuTwg88Nehpkzy-vHz2oQ-t500x500.jpg',
            artist: 'Chris Linton & Cadmium',
            audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/810/slow-down-1597413629-DK6yEJdwpt.mp3',
            color: ['#dba079', '#35261b'],
            id: uuidv4(),
            active: true
        },
        {
            name: 'Lonely Way',
            cover: 'https://linkstorage.linkfire.com/medialinks/images/c8889797-4b23-4e49-a57b-93412a6e0707/artwork-440x440.jpg',
            artist: 'Rival',
            audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/838/1602924116_i3Tn2EkNdU_Rival---Lonely-Way-ft.-Caravn-NCS-Release.mp3',
            color: ['#1e1c1e', '#e6b162'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Alive',
            cover: 'https://linkstorage.linkfire.com/medialinks/images/8405c82d-032d-4ea2-9bbe-c65e15cb6add/artwork-440x440.jpg',
            artist: 'N3WPORT',
            audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/833/alive-1601992829-IK73lvg1gR.mp3',
            color: ['#588DB9', '#343434'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Don\'t Surrender',
            cover: 'https://linkstorage.linkfire.com/medialinks/images/adc747a3-4733-469f-857f-13deb682c314/artwork-440x440.jpg',
            artist: 'Egzod',
            audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/828/dont-surrender-1600956029-D336DLlcF0.mp3',
            color: ['#b19689', '#9d2f2b'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Shakedown',
            cover: 'https://linkstorage.linkfire.com/medialinks/images/c0047ed3-0fdb-4a27-a72a-017d04e66fd6/artwork-440x440.jpg',
            artist: 'Clarx',
            audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/835/shakedown-1602237629-mpRmkmD9WC.mp3',
            color: ['#6f169f', '#f262a1'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Safe & Sound',
            cover: 'https://linkstorage.linkfire.com/medialinks/images/22e9bc04-d35a-40d1-b150-1a4ef6995a3e/artwork-440x440.jpg',
            artist: 'Deaf Kev',
            audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/832/safe-sound-1601629229-6xELTJzmos.mp3',
            color: ['#f02308', '#2e0a23'],
            id: uuidv4(),
            active: false
        }
    ]
}

export default chillHop;