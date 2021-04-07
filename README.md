# antimatter543.github.io
 http://jmcglone.com/guides/github-pages/ This POGGERS.
 Also, whenever I look at the github.io's of websites, it's mildly annoying how there's never a link to the actual website, so you have to search it up. Oh no, +5 seconds! Anyways, here's the link:
 https://antimatter543.github.io/
 
 Jekyll makes it so that instead of having to change URLS, etc. for every single site, you can make a default.html and then import that into the index, etc. And that's just one of the things it can do! PogChamp.


 So, in our index.html, the stuff between --- is called 'front matter'; anything with the --- --- will be processed by Jekyll.
 So every file with layout: default will generate the full HTML doc by replacing {{content}} in _layouts/defaults.html with the contents of the file. POG

 AHHH:
 page.title refers to the 'title' in --- for that page.
 site.posts refers to the _posts folder in the site directory (I think). Pog!
 There's a way  to test this:
 just add page.default in some text so see what shows up.