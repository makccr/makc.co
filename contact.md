---
layout: main.html
title: Contact
description: It's a contact page, I think the title says it all. 
---
<h1>{{ title }}</h1>

<p class="caption">{{ description }}</p>

<h2><i class="icon icon-email"></i><br><a href="mailto:m@makc.co" target="_blank">m@makc.co</a></h2>

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="contact-form">
  <input type="hidden" name="form-name" value="contact" />

  <!-- Honeypot -->
  <p class="hidden">
    <label>Don’t fill this out: <input name="bot-field" /></label>
  </p>

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required placeholder="Your name">
  </div>

  <div class="form-group">
    <label for="contact">Contact</label>
    <input type="text" id="contact" name="contact" required placeholder="Email or phone">
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required placeholder="What’s on your mind?"></textarea>
  </div>

  <button type="submit">Send It</button>
</form>

<p class="caption">
    <strong>Full Disclosure:</strong> This form just sends me and email, but a few people asked for a form, so now there is a form. 
</p>

### Some Notes
There are some types of question andior comments that would be better directed to other areas. For example, if you're having an issue with my [dot files](https://github.com/makccr/dot) or one of [my projects](https://github.com/makccr) hosted on [GitHub](https://github.com), it would be better in almost every case to simply [create an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) on the respective GitHub page; if for no other reason, than the fact that other users will then be able to see whatever issue you were having and perhaps troubleshoot their own issues faster. Likewise if you have a comment about a video I've made, those comments would be best left on [YouTube](https://www.youtube.com/@makc) or [Odysee](https://odysee.com/@makc:a) where you saw the video. 

#### Bug Reports
If you are attempting to submit a bug report for this website, first of all, thanks for helping out. Second, the best way to do this would be to [create an issue](https://github.com/makccr/makccr.github.io/issues/new) on this website's GitHub repository. If you are unable or unwilling to do so however, feel free to just [send an e-mail](mailto:m@makc.co?subject=bugReport) with "Bug Report" in the subject line (clicking the proceeding link will take care of this for you).

#### Social Media Accounts
You are more than welcome to contact me via any of the social media accounts that are linked to from this site in the form of direct message or a public post. Just know that I have a pretty spotty at best record when it come to actually responding to or even seeing messages on these accounts. TLDR: The best way to contact me (if your goal is the fastest response) will almost always be good ol' fashioned <a href="mailto:m@makc.co" target="_blank">e-mail</a>.
