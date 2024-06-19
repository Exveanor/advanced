import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";


const template = (facts) => html`
<h2>Fun Facts</h2>
<section id="dashboard">
                ${facts.length !== 0 ?
                
                html`
                <ul class="card-wrapper">
                    ${facts.map(fact => html`
                    <div class="fact">
                    <h3 class="category" href="/category/${fact.category}">Category</h3>
                    <img src="${fact.imageUrl}" alt="example1" />
                    <p class="description" >"${fact.description}"</p>
                    <a class="details-btn" href="/moreInfo">More Info</a>
                    </div>
                    `)}
                `   :
                html`
                <h2>No Fun Facts yet.</h2>`
            }
        <section>`

export async function showDashboard(ctx) {
    const facts = await getAllFacts();

    ctx.render(template(facts))
}