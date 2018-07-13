//localStorage.clear();

var data = {
    'conference': null,
    'speakers': null,
    'sessions': null
};

data.createSite = (version) => {
    return {
        'root': '/presentations/a-room-with-a-vue/speaker-vue/' + version + '/',
    }
}

var conference = localStorage.getItem('conference');
if (!conference) {
    data.conference = {
        name: 'Super Conf',
        description: 'a super powered conference',
        dates: 'October 22-25 2018',
        location: 'Star City'
    };

    localStorage.setItem('conference', JSON.stringify(data.conference));
} else {
    data.conference = JSON.parse(conference)
}

var speakers = localStorage.getItem('speakers');
if (!speakers) {
    data.speakers = [
        {
            id: 'spider-man',
            name: 'Spider-Man',
            bio: "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/spider-man.jpg',
            style: 'style',
            sessions: [ 'session-1', 'session-2' ]
        },
        {
            id: 'captain-marvel',
            name: 'Captain Marvel',
            bio: "When head of NASA security Carol Danvers was exposed to a powerful alien device, she transformed her into the mighty cosmic powered hero, Captain Marvel!",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/captain-marvel.jpg',
            style: 'style',
            sessions: [ 'session-6' ]
        },
        {   
            id: 'thor',
            name: 'Thor',
            bio: "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/thor.jpg',
            style: 'style',
            sessions: [ 'session-3' ]
        },
        {
            id: 'hulk',
            name: 'Hulk',
            bio: "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/hulk.jpg',
            style: 'style',
            sessions: [ 'session-4' ]
        },
        {
            id: 'deadpool',
            name: 'Deadpool',
            bio: "Ever-quipping mercenary Wade Wilson’s healing factor—and big mouth—make him one of the most relentlessly wisecracking heroes in the universe.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/deadpool.jpg',
            style: 'style',
            sessions: [ 'session-5' ]
        },
        {
            id: 'black-widow',
            name: 'Black Widow',
            bio: "Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/black-widow.jpg',
            style: 'style',
            sessions: [ 'session-11' ]
        },
        {
            id: 'black-panther',
            name: 'Black Panther',
            bio: "T’Challa is the king of the secretive and highly advanced African nation of Wakanda as well as the powerful warrior known as the Black Panther.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/black-panther.jpg',
            style: 'style',
            sessions: [ 'session-7' ]
        },
        {
            id: 'iron-man',
            name: 'Iron Man',
            bio: "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/iron-man.jpg',
            style: 'style',
            sessions: [ 'session-8' ]
        },
        {
            id: 'scarlet-witch',
            name: 'Scarlet Witch',
            bio: "Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/scarlet-witch.jpg',
            style: 'style',
            sessions: [ 'session-9' ]
        },
        {
            id: 'captain-america',
            name: 'Captain America',
            bio: "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
            image: '/presentations/a-room-with-a-vue/speaker-vue/img/captain-america.jpg',
            style: 'style',
            sessions: [ 'session-10' ]
        }
    ];

    localStorage.setItem('speakers', JSON.stringify(data.speakers));
} else {
    data.speakers = JSON.parse(speakers)
}

var sessions = localStorage.getItem('sessions');
if (!sessions) {
    data.sessions = [
        {
            id: 'session-1',
            title: 'How To Do Whatever a Spider Can',
            speaker: 'Spider-Man',
            speakerId: 'spider-man',
            blurb: 'Learn how to channel your inner arachnid and fight crime.',
            description: `<strong>Spider-Man</strong>. <strong>Spider-Man</strong>. I do whatever a spider can...<br/><br/>
And now so can you! I'll share my crimefighting secrets that you can start using today to capture the bad guys and keep your Aunt May safe.`,
            time: 'Saturday 10am - 11am'
        },
        {
            id: 'session-2',
            title: 'Multiverse Theory and Spider-People',
            speaker: 'Spider-Man',
            speakerId: 'spider-man',
            blurb: 'Why are there so many of us?',
            description: 'Attend this session to find out why there are so many Spider people. Where are they coming from? Where are they going?',
            time: 'Friday 3pm - 4pm'
        },
        {
            id: 'session-3',
            title: "You Don't Have To Be A God To Be This Good",
            speaker: 'Thor',
            speakerId: 'thor',
            blurb: 'I mean, it helps, but it is not required.',
            description: 'Learn what you can do as a mortal to be your best self.',
            time: 'Friday 2pm - 3pm'
        },
        {
            id: 'session-4',
            title: 'Zen and the Art of Smashing',
            speaker: 'Hulk',
            speakerId: 'hulk',
            blurb: 'HULK SMASH',
            description: 'HULK SMASH HULK SMASH HULK SMASH HULK SMASH HULK SMASH HULK SMASH HULK SMASH',
            time: 'Saturday Whenever Hulk Wants'
        },
        {
            id: 'session-5',
            title: "Breaking the Fourth Wall",
            speaker: 'Deadpool',
            speakerId: 'deadpool',
            blurb: "Why doesn't anyone care about the other walls?",
            description: 'Hey, you there. Yeah, you. Come to this session.',
            time: 'Saturday 4pm - 5pm'
        },
        {
            id: 'session-6',
            title: "When Fury Calls",
            speakerId: 'captain-marvel',
            blurb: "You answer",
            description: 'In this session we\'ll discuss how high tech communication devices look like pagers from the 90s.',
            time: 'Friday 4pm - 5pm'
        },
        {
            id: 'session-7',
            title: "Everyday Uses of Vibranium",
            speakerId: 'black-panther',
            blurb: "It makes great spoons",
            description: 'Now that Wakanda has revealed itself to the world, find out new and inventive ways to use Vibranium.',
            time: 'Friday 2pm - 3pm'
        },
        {
            id: 'session-8',
            title: "Being Rich And Smart Is Too A Super Power",
            speakerId: 'iron-man',
            blurb: "You can't prove otherwise",
            description: 'There are endless ways you could use a massive fortune to heal the world. Why not build death machines?',
            time: 'Friday 1pm - 2pm'
        },
        {
            id: 'session-9',
            title: "Advanced Telekinesis",
            speakerId: 'scarlet-witch',
            blurb: "Make big moves with your mind",
            description: 'Intermediate telekinesis ability required. This session will cover moving items that weigh more than 3 tons.',
            time: 'Friday 11am - 12pm'
        },
        {
            id: 'session-10',
            title: "Patriotism: Past and Present",
            speakerId: 'captain-america',
            blurb: 'Doing what is right even if it\'s not popular',
            description: 'This talk will cover the history of patriotism and civic duty from ancient civilizations to recent times in America.',
            time: 'Saturday '
        },
        {
            id: 'session-11',
            title: "How To Use Your Stealthiness To Ghost Parties",
            speakerId: 'black-widow',
            blurb: "I call it the Russian Goodbye",
            description: 'Sometimes you can just leave. You don\'t have to say goodbye.',
            time: 'Saturday '
        }
    ];

    localStorage.setItem('sessions', JSON.stringify(data.sessions));
} else {
    data.sessions = JSON.parse(sessions)
}

data.addSession = (session) => {
    data.sessions.push(session);
    localStorage.setItem('sessions', JSON.stringify(data.sessions));

    var speaker = data.speakers.find((speaker) => speaker.id === session.speakerId);
    speaker.sessions.push(session.id);
    localStorage.setItem('speakers', JSON.stringify(data.speakers));
};

data.addSpeaker = (speaker) => {
    speaker.id = speaker.name.toLowerCase().replace(/[\W_]+/g,"-");
    speaker.sessions = [];

    data.speakers.push(speaker);
    
    localStorage.setItem('speakers', JSON.stringify(data.speakers));
};