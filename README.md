# Horizontal Rule with Cool ::after Effect!

This is from [Nathaniel Landau's page!](https://natelandau.com/my-mac-osx-bash_profile/)

Here are the rules:

hr {
padding: 0;
border: none;
border-top: medium double #333;
color: #333;
text-align: center;
margin-left: 0;
margin-right: 0;
margin-top: 2.9124rem;
}

hr::after {
font-family: FontAwesome;
content: "\f18c";
display: inline-block;
top: -.8em;
padding: 0 .25em;
background: #FDF3E7;
}

blockquote, hr::after, html {
position: relative;
}

// ::after, inherited from hr
hr {
color: #333;
text-align: center;
}

And I was looking for a different way to do things other than font icons ...
