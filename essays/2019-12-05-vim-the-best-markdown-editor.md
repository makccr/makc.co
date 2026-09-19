---
title: "Vim: The Best Markdown Editor"
layout: essay.html
date: 2019-12-05
tags: essay 
subject: ["technology", "CLI", "linux"]
---

Before I start writing any opinions here, I’d like to take a second to talk about why I think I’m qualified to say what the best markdown editor is, and what my criteria in choosing a markdown editor looks like. There is no shortage of blogs and articles out there that seek to answer this very question, so I wouldn’t expect anyone to just be taking my word for it, without knowing if my word has any value to you, or the way that you want to work.

Also, if you’re not familiar with Markdown, the rest of this will make no sense whatsoever. Sorry.

## Who Am I To Judge
I write a lot of text. Which, I know, alone isn’t really a qualification. What I do think is a qualification, however, is the diversity of text that I work with, basically every day. I write an insane amount of text in this format. I routinely work with books, blog posts like this, notes, recipe cards, and even my to-do list (when I use it) is a markdown file. I manipulate all of these types of markdown files daily. This is important for two reasons:

1.  _Exporting:_ I’m writing a lot of different things in Markdown, with the intention of exporting them to other formats. So I’m not just writing markdown. I routinely need to get markdown files formatted as HTML, PDFs, Word documents, and only occasionally (personal notes & GitHub) is markdown the final product. Of course, that’s sort of one of the pillars of the language, so I think it’s important to be familiar with the way that this process works.
2.  _Stress Testing:_ It’s very easy for me to tell, immediately, if a markdown editor is not up to snuff. I often have multiple files open at one time, and I routinely open up very large files. I have four or five documents that are somewhere between 100,000 and 200,000 words, which I need to open up every day. A lot of markdown editors, especially new ones, just won’t do this for me. They’ll freeze up, crash, chug, or find other more unique ways to make their usage miserable.
    
On a final note: I have tried a ridiculous amount of Markdown apps on every platform. Whether it be iOS, OSX, Linux, Windows, or BSD. Really, the only platform on which I haven’t done enough experimentation to really say anything confidently is Android. I don’t have anything against Android; it’s just that I sort of hate phones, and I don’t want to spend a ton of time on them. I have an iPhone just because that was the first smartphone that I bought, and I haven’t really messed around too much since then.

## My Grading Criteria
### Power
I think that I have pretty high expectations for Markdown. I didn’t try to develop a stressful test to put editors through. I just have a pretty heavy workload, as a result of the way that I like to work. Even before I started using Markdown, I was hitting Microsoft Word or Google Sheets with very heavy workloads.

But this is, essentially, the criteria by which I grade a Markdown app. I like really nice-looking, beautiful apps, but I’m totally fine using something a bit more ugly if it does the job better. I think most people feel the same way, but in my case, I’m pretty good at figuring out quickly whether or not the pretty apps are even worth wasting my time with.

### Cross-platform Compatibility
I also really care about an app being cross-platform. I really want to be able to use an app on at least MacOS and Linux; ideally, Windows as well.

### Feature Set (Export, Templates, ext.)
I overlooked this for a really long time. But being able to export quickly and easily, to a lot of different formats, is sort of a must for a good markdown editor. More than just being able to export to PDF or Word, I’m also looking for editors that will support a lot of customization in this department as well. Being able to browse a lot of pre-made templates and being able to create custom templates myself is a huge bonus.

### Speed
There’s not a lot to say about his category. I want to be able to write and manipulate text quickly. If that requires some additional learning (keyboard shortcuts and whatnot), that’s totally fine.

### Launch Time
Finally, I’ve taken into account the launch time. Not just for the app itself, but for the opening of files once the application is open, and the switching between files. This, I think, should be pretty self-explanatory. Obviously, Photoshop is the gold standard for photo editing, but it takes so long to launch, in comparison to other apps, that I’m probably not opening up Photoshop just to crop an image. Being able to just launch an app when you launch your computer and leave it open is one thing. But that’s not really a good way to get around a slow launch time. A slow launch time for the app almost always means a slow loading time when opening files. Also, apps crash, and sometimes you have to restart, and I don’t want to be sitting around waiting for Photoshop to open when I can rotate an image from Finder.

## Vim
There are two apps that I want to talk about today, and the first of which is Vim. This is a very old app, originally released in 1991, and based on an even older text editor, Vi, that’s been around since the mid-seventies. I’m going to wager that a good chunk of the markdown crowd has never heard of Vim, and that’s because, despite being a wickedly fast and powerful text editor, Vim has never really caught on with a lot of writing communities. Vim really thrives, almost exclusively, in the Linux and BSD world, which is where I found it.

So the first thing to mention is that Vim checks four of the five boxes on my criteria better than any app I have ever used. I’m not trying to be hyperbolic, I’m being honest. The launch time, both for files and the app itself, is instant. Again, it may sound like I’m being hyperbolic, but I’m 100% serious. It doesn’t matter whether I’m opening up a list of 10 names or a 150,000-word novel, Vim launches immediately. This is because of the fact that Vim, at least in the form that I use it and recommend people use it, is a command-line application.

This is likely why Vim has yet to take off, among writers, the way that I believe it should have. Vim has a learning curve, and a lot of mythology around that learning curve. People who use Vim daily will ward off new users, because it’s not for _just anyone_. This mythology is the main reason why I stayed away from Vim for as long as I did. I was constantly being told by people who used Vim every day not to mess around with it unless you were already a senior developer capable of writing your own text editor over a weekend.

But the truth is, Vim’s brutal learning curve is conquered in about a week, mostly a weekend in my case. But you will actually be slower in Vim when you first start. Which is a very odd and off-putting thing. Your typical learning curve for any piece of software is a nice, gentle upward curve. But when using Vim, you will quite literally start typing at a fairly normal speed, get way slower for a brief period of time, and then become faster in Vim than any other application you’ve ever used. This is mostly because Vim does not utilize your computer’s mouse. Vim, or at least Vi, was built at a time before the mouse was really a thing. Everything was then, and is still now, done via the keyboard.

This is Vim’s real strength. If you think about it, you can only ever type in any application as fast as your fingers will go. If I type 60 WPM in Microsoft Word, I won’t type 120 WPM in Vim. The real strength of any text editor is its ability to manipulate text. Markdown takes care of a lot of the basic formatting for us, which is why writing Markdown probably already feels fast and more efficient than anything else. But if Markdown handles formatting, Vim handles everything else. You can correct words, spell check, delete, re-write, change, and manipulate text in a matter of seconds using Vim. Vim has movement controls to navigate by line, paragraph, sentence, word, and all the way down to the individual characters, and it’s all done without ever moving your fingers from the home row. Most Vim users I know of actually disable arrow keys to force themselves to use Vim’s alternative arrow keys: h,j,k,l (the real pros even disable the backspace).

<img class="thirds" src="img/2019-12-05-B.jpg" alt="a graph i made">
<p class="caption">
    A very rough depiction of Vim's "learning curve".
</p>

## Typora
However, as much as I like Vim, and I really do use Vim for basically everything, the app does have a glaring weakness. Vim is an app that is only interested in being one thing: a text editor. It’s designed to allow you to write and manipulate whatever kind of text you need to work with, as quickly and efficiently as possible. Even Vim’s closest competitor, Emacs, does much, much more out of the box than Vim. By default in Vim, something as basic as spell checking is turned off. Vim writes and edits text. That’s all.

So, in some ways, it really shouldn’t even be considered a contender for the top spot on my list of Markdown editors, as it miserably fails on one point of criteria. Vim does not export to anything. You have to find an alternative solution for exporting Markdown. But this should say a lot about the quality of the text editing experience that you’ll get with Vim. It just straight up doesn’t even try to work with Markdown, and yet I still call it the best text editor for Markdown. I hope this makes sense to people who’ve never used Vim before, as that’s the target audience for this post.

Anyway, I recommend Typora as an alternative tool for exporting Markdown to other formats. It’s not as pretty as something like Ulysses or IA Writer, but it does pretty much all the same stuff, and it runs on more than just MacOS. Typora runs on Linux, MacOS, Windows, and is really easy to install. (That might not make sense if you run MacOS or Windows, but any Linux users will know that, depending on your distribution, some apps can actually be pretty difficult to install.)

Typora is a really good graphical editor. I’ve never had much of an issue in terms of reliability, and it handles my 100,000+ word documents absolutely fine. So if you’re not going to use Vim, and you’re not on MacOS, Typora really is the way to go. But even if you’re using Vim as your primary editor, Typora will be very helpful for you.

First of all, Typora will actually allow you to export to alternative formats. HTML, PDF, Word, Epub, ext, you can convert Markdown to anything else you might need very quickly and easily. But where I really think Typora stands out are in two areas:

1.  **Simplicity**: Like Vim, Typora does seem to be built to do one thing, and do it better than anything else. Typora is a markdown editor, and it’s built to edit markdown as quickly as possible. There aren’t any crazy UI elements that get in the way; it has a very simple layout. Of course, the simplicity is sort of misleading, because it’s very powerful under the hood, as you might expect, and maintains the useful feature sets of any other Markdown editors I’ve used.
2.  **Customization**: Not only does Typora have its own Theme Gallery that allows user submission, but it also allows for easy, custom theming. Typora’s themes are powered by CSS, a language that is easy to learn, if you don’t already know it, and even easier to manipulate, even if you don’t. I imagine it would be very easy for a committed tinkerer to create custom Typora themes for their projects without ever intentionally setting out to learn CSS.
    
Also, it’s free!
