## THE PLAN!!!:

PSPSPS IMPORTANT! get **google SEO** going! Also analytics. also Reka UI my new goat

Google SEO TODO:

- ✅vue router and different pages (/about /feedback /tools /features etc) - ✅give each page it's own title and meta description using unhead and titleTemplate - ⭐^have mom check these - also add opengraph descriptions.
- alt text and aria-labels
- flesh out feedback dialog more
- switch / to being a landing page (seperate route) and have /whiteboard or something be the whiteboard (and then /whiteboard/feedback is feedbakc or whatever)
- make a "copied email to clipabord 🎉" dialog on mailto failure (@click.prevent="...")- so make a scalable dialog opener w/ custom text... then do that.

- DONT PUBLISH THIS CODE! we need to migrate to tailwind fully first
- also we should just adpot font awesome as a dependency and use it normally instead of copying the files


## General

### FOR SAVING HANDWRITING/LATEX FOR DATASETS:

- use postgres, nuxt, later s3,
      - store LaTeX, UUID, image_url (use a UUID), AND InkML file to disk (but save a URL (same name as image_url (but .xml)) in the DB)
- use KaTeX for validation?
```
try {
  katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", { throwOnError: true });
} catch (err) {
  console.error("Invalid LaTeX:", err.message);
}
```
- also, KaTeX is much faster than MathJax, BUT MathLive has editing so we'll still use that.
- see the chat we did on it...

- 🔗 add save/load
- 📷 infinite pannable camera
     - grab icon panning tool
     - home icon tool that bring you to original position
     - spacebar on laptop
- 🗼 make a robust way to represent expressions with promises so the user can graph/solve them before they load - after this is done, we'll be able to add to GA whether recognition was successful or failed. and the average time!
- ⚙️ add different settings for the tools that pop down in a different menu (stoke width, color, etc. ) - make it cute
- ⭐ switch HMER select button to having a little AI star
- make a logo
- make google analytics mention "success" or "failure" when expression loads (needs new expression thing

### Later:

- consider making it so that you can select a portion of the graph to set the bounds
  Analytics:
  Once you get users:
  Track custom events:
  “Converted handwriting”
  “Created graph”
  “Exported LaTeX”
  Now you can say:
  “Users converted 3,482 math expressions.”

### DONE:

- 🔨 refactor toolbar
- 🖌️ add global color scheme with :root so its nice and easy
- ↩️ add undo/redo
- make undo/redo work with erasing!!
- 📞 make it work on phones
- make widget toolbar clickable on mobile!! (touch not registering)
- 🐱 add github icon that links to the github page
- refactor widget movement/selection system
- 🧰 refactor widgets big time!!!! (aah!!)
     - 😜 refactor widgets to organize and follow best pracitces of like vue architecture organization... --- NOTE: tf does this mean

for this undo-redo fix thing:

- change graph colors
- add(import?) expression to graph
- future "change" expression (like solving it or editing it. Action.before & Action.after) (also this will be used with Partials in TS and be useful for graph colors)
- turn graph back into expression
- remove expression from graph

for SEO:

- SSG
