
Vue.component('sv-header-v1', {
    props: ['header', 'site'],
    template: `
<div class="inner">
    <!-- Logo -->
    <a v-bind:href="site.root + 'index.html'" class="logo">
        <span class="symbol"><img v-bind:src="header.logo" alt="" /></span><span class="title">{{ header.title }}</span>
    </a>

    <!-- Nav -->
    <nav>
        <ul>
            <li><a href="#menu">Menu</a></li>
        </ul>
    </nav>
</div>`
});

Vue.component('sv-menu', {
    props: ['site'],
    template: `
<nav id="menu">
    <h2>Menu</h2>
    <ul>
        <li><a v-bind:href="site.root">Home</a></li>
        <li><a v-bind:href="site.root + 'sessions/list.html'">Sessions</a></li>
        <li><a href="generic.html">About</a></li>
        <li><a href="generic.html">Register</a></li>
    </ul>
</nav>`
});

Vue.component('sv-footer', {
    template: `
<div class="inner">
    <section>
        <h2>Get in touch</h2>
        <form method="post" action="#">
            <div class="fields">
                <div class="field half">
                    <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div class="field half">
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div class="field">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                </div>
            </div>
            <ul class="actions">
                <li><input type="submit" value="Send" class="primary" /></li>
            </ul>
        </form>
    </section>
    <section>
        <h2>Follow</h2>
        <ul class="icons">
            <li><a href="#" class="icon style2 fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon style2 fa-facebook"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon style2 fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon style2 fa-dribbble"><span class="label">Dribbble</span></a></li>
            <li><a href="#" class="icon style2 fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="#" class="icon style2 fa-500px"><span class="label">500px</span></a></li>
            <li><a href="#" class="icon style2 fa-phone"><span class="label">Phone</span></a></li>
            <li><a href="#" class="icon style2 fa-envelope-o"><span class="label">Email</span></a></li>
        </ul>
    </section>
    <ul class="copyright">
        <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li><li><a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a></li>
    </ul>
</div>`
});

Vue.component('sv-speaker-tile', {
    props: ['speaker', 'site'],
    template: `
<article v-bind:class="speaker.style">
    <span class="image">
        <img v-bind:src="speaker.image" alt="" />
    </span>
    <a v-bind:href="site.root + 'speakers/#' + speaker.id">
        <h2>{{ speaker.name }}</h2>
        <div class="content">
            <p>{{ speaker.bio }}</p>
        </div>
    </a>
</article>
`
});

Vue.component('sv-session-tile', {
    props: ['session', 'speaker', 'site'],
    template: `
<article v-bind:class="speaker.style">
    <span class="image">
        <img v-bind:src="speaker.image" alt="" />
    </span>
    <a v-bind:href="site.root + 'sessions/#' + session.id">
        <h2>{{ session.title }}</h2>
        <div class="content">
            <p>{{ session.blurb }}<br/>{{ session.time }}</p>
        </div>
    </a>
</article>
`
});

Vue.component('sv-speaker-list', {
    props: ['speakers', 'site'],
    template: `
<ul>
    <li v-for="speaker in speakers"><a v-bind:href="site.root + 'speakers/#' + speaker.id">{{ speaker.name }}</a> - {{ speaker.bio }}</li>
</ul>`
});

Vue.component('sv-speaker-details', {
    props: ['speaker', 'site'],
    template: `
<div>
    <h1>{{ speaker.name }}</h1>
    <p>{{ speaker.bio }}</p>
    <p v-if="speaker.twitter"><a v-bind:href="'https://twitter.com/' + speaker.twitter" target="_blank">Twitter</a></p>
    <h4>Sessions</h4>
    <ul>
        <li v-for="session in speaker.sessions"><a v-bind:href="site.root + 'sessions/#' + session.id">{{ session.title }}</a></li>
    </ul>
</div>`
});

Vue.component('sv-session-details', {
    props: ['session', 'site'],
    template: `
<div>
    <h3>{{ session.title }}</h3>
    <h4><a v-bind:href="site.root + 'speakers/#' + session.speakerId">{{ session.speaker }}</a></h4>
    <h5>{{ session.time }}</h5>
    <p>{{ session.description }}</p>
</div>`
});