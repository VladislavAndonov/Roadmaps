import { jsSections } from './js_content.js';
import { tsSections } from './ts_content.js';
import { ngSections } from './ng_content.js';

const roadmaps = {
    js: {
        title: 'JavaScript Roadmap',
        icon: 'ph-file-js',
        sections: jsSections
    },
    ts: {
        title: 'TypeScript Roadmap',
        icon: 'ph-file-ts',
        sections: tsSections
    },
    ng: {
        title: 'Angular Roadmap',
        icon: 'ph-angular-logo',
        sections: ngSections
    }
};

let currentSections = roadmaps.js.sections;

const openState = {};

loadRoadmap('js');

function loadRoadmap(type) {
    const roadmap = roadmaps[type];

    currentSections = roadmap.sections;

    document.querySelector('.title-text').textContent = roadmap.title;

    document.querySelector('.header-title i').className =
        `ph-fill ${roadmap.icon}`;

    renderSections(currentSections);
}

function renderSections(sections) {
    const nav = document.getElementById('nav-bar');
    const container = document.getElementById('sections-container');

    nav.innerHTML = '';
    container.innerHTML = '';

    Object.keys(openState).forEach(key => delete openState[key]);

    sections.forEach((section, si) => {
        const nav = document.getElementById('nav-bar');
        const container = document.getElementById('sections-container');

        const chip = document.createElement('button');
        chip.className = 'nav-chip';
        chip.innerHTML = `<span>${section.emoji}</span><span>${section.label}</span>`;
        chip.onclick = () => document.getElementById(`section-${si}`).scrollIntoView({ behavior: 'smooth' });
        nav.appendChild(chip);

        openState[si] = {};

        const sectionEl = document.createElement('div');
        sectionEl.className = 'section';
        sectionEl.id = `section-${si}`;

        const header = document.createElement('div');
        header.className = 'section-header';
        header.innerHTML = `<h2 class="section-title"><span>${section.emoji}</span><span>${section.label}</span></h2>`;

        const toggleAllBtn = document.createElement('button');
        toggleAllBtn.className = 'toggle-all';
        toggleAllBtn.textContent = 'Expand all';
        toggleAllBtn.onclick = () => {
            const allOpen = section.topics.every((_, i) => openState[si][i]);
            section.topics.forEach((_, i) => {
                openState[si][i] = !allOpen;
                const body = document.getElementById(`body-${si}-${i}`);
                const chev = document.getElementById(`chev-${si}-${i}`);
                body.classList.toggle('open', !allOpen);
                chev.classList.toggle('open', !allOpen);
            });
            toggleAllBtn.textContent = allOpen ? 'Expand all' : 'Collapse all';
        };
        header.appendChild(toggleAllBtn);
        sectionEl.appendChild(header);

        const list = document.createElement('div');
        list.className = 'topic-list';

        section.topics.forEach((topic, ti) => {
            const card = document.createElement('div');
            card.className = 'topic-card';

            const btn = document.createElement('button');
            btn.className = 'topic-btn';
            btn.innerHTML = `
        <span class="topic-name">
          <span class="dot" style="background:${section.color}"></span>
          ${topic.title}
        </span>
        <span class="chevron" id="chev-${si}-${ti}">▾</span>
      `;
            btn.onclick = () => {
                openState[si][ti] = !openState[si][ti];
                const body = document.getElementById(`body-${si}-${ti}`);
                const chev = document.getElementById(`chev-${si}-${ti}`);
                body.classList.toggle('open', openState[si][ti]);
                chev.classList.toggle('open', openState[si][ti]);
                const allOpen = section.topics.every((_, i) => openState[si][i]);
                toggleAllBtn.textContent = allOpen ? 'Collapse all' : 'Expand all';
            };

            const body = document.createElement('div');
            body.className = 'topic-body';
            body.id = `body-${si}-${ti}`;
            const ul = document.createElement('ul');
            topic.items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                ul.appendChild(li);
            });
            body.appendChild(ul);

            card.appendChild(btn);
            card.appendChild(body);
            list.appendChild(card);
        });

        sectionEl.appendChild(list);
        container.appendChild(sectionEl);
    });
}

document.getElementById('js').addEventListener('click', () => {
    loadRoadmap('js');
});

document.getElementById('ts').addEventListener('click', () => {
    loadRoadmap('ts');
});

document.getElementById('ng').addEventListener('click', () => {
    loadRoadmap('ng');
});
