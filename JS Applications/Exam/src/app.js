import page from '../node_modules/page/page.mjs';
import { render } from "../../node_modules/lit-html/lit-html.js";
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';
import { showLogin } from './views/login.js';
import { showDashboard } from './views/dashboard.js';
import { getUserData } from './utils.js';
import { logout } from './api/auth.js';
import { showDetails } from './views/details.js';
import { showAdd } from './views/add.js';
import { showEdit } from './views/edit.js';
import { showSearch } from './views/search.js';

const main = document.querySelector('main');

document.getElementById('navLogout').addEventListener('click', onLogout);

function session(ctx, next) {
    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}

function decorateContext(ctx, next) {
    ctx.render = function (content) {
        render(content, main);
    };

    next();
}

function updateNav(ctx, next) {
    const usr = document.querySelector('div.user');
    const guest = document.querySelector('div.guest');

    if (ctx.user) {
        usr.style.display = 'inline';
        guest.style.display = 'none';
    } else {
        usr.style.display = 'none';
        guest.style.display = 'inline';
    }

    next()
}

async function onLogout() {
    await logout();

    page.redirect('/dashboard')
}

page(decorateContext);
page(session);
page(updateNav);

page('/', showHome);
page('/register', showRegister);
page('/login', showLogin);
page('/dashboard', showDashboard);
page('/details/:id', showDetails);
page('/add', showAdd);
page('/edit/:id', showEdit);
page('/search', showSearch);

page.start();