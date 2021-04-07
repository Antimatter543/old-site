# antimatter543.github.io
 http://jmcglone.com/guides/github-pages/ This POGGERS.
 Also, whenever I look at the github.io's of websites, it's mildly annoying how there's never a link to the actual website, so you have to search it up. Oh no, +5 seconds! Anyways, here's the link:

 <h1> https://antimatter543.github.io/ </h1>
 
 Jekyll makes it so that instead of having to change URLS, etc. for every single site, you can make a default.html and then import that into the index, etc. And that's just one of the things it can do! PogChamp.


 So, in our index.html, the stuff between --- is called 'front matter'; anything with the --- --- will be processed by Jekyll.
 So every file with layout: default will generate the full HTML doc by replacing {{content}} in _layouts/defaults.html with the contents of the file. POG

 AHHH:
 page.title refers to the 'title' in --- X --- for that page.
 site.posts refers to the _posts folder in the site directory (I think). Pog!
 There's a way  to test this:
 just add page.layout in some text so see what shows up (theoretically, if you put this in default.html, the home page should show up with 'default' wherever you put page.layout)
 //

 Here's why you made a folder called 'blog', then put index.html in it.
 Basically, on the main page you have a thing going to /blog (which would be a folder). In this folder, you have the index.html, which is the thing that the website reads first or whatever. Basically, you could've also had the main page link to blog.html (also on the main directory), but these are the same thing.
 I guess it looks neater this way. Yeah.

 Oh, by main page I guess I meant default.html.