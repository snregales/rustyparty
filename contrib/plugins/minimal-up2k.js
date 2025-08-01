/*

makes the up2k ui REALLY minimal by hiding a bunch of stuff

almost the same as minimal-up2k.html except this one...:

 -- applies to every write-only folder when used with --js-browser

 -- only applies if javascript is enabled

 -- doesn't hide the total upload ETA display

 -- looks slightly better


========================
== USAGE INSTRUCTIONS ==

1. create a volume which anyone can read from (if you haven't already)
2. copy this file into that volume, so anyone can download it
3. enable the plugin by telling the webbrowser to load this file;
    assuming the URL to the public volume is /res/, and
    assuming you're using config-files, then add this to your config:

    [global]
      js-browser: /res/minimal-up2k.js

alternatively, if you're not using config-files, then
add the following commandline argument instead:
  --js-browser=/res/minimal-up2k.js

*/

var u2min = `
<style>

#ops, #path, #tree, #files, #wfp,
#u2conf td.c+.c, #u2cards, #srch_dz, #srch_zd {
  display: none !important;
}
#u2conf {margin:5em auto 0 auto !important}
#u2conf.ww {width:70em}
#u2conf.w {width:50em}
#u2conf.w .c,
#u2conf.w #u2btn_cw {text-align:left}
#u2conf.w #u2btn_cw {width:70%}
#u2etaw {margin:3em auto}
#u2etaw.w {
  text-align: center;
  margin: -3.5em auto 5em auto;
}
#u2etaw.w #u2etas {margin-right:-37em}
#u2etaw.w #u2etas.o {margin-top:-2.2em}
#u2etaw.ww {margin:-1em auto}
#u2etaw.ww #u2etas {padding-left:4em}
#u2etas {
  background: none !important;
  border: none !important;
}
#wrap {margin-left:2em !important}
.logue {
  border: none !important;
  margin: 2em auto !important;
}
.logue:before {content:'' !important}

</style>

<a href="#" onclick="this.parentNode.innerHTML='';">show advanced options</a>
`;

if (!has(perms, 'read')) {
  var e2 = mknod('div');
  e2.innerHTML = u2min;
  ebi('wrap').insertBefore(e2, QS('#wfp'));
}
