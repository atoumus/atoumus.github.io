;var _self='undefined'!=typeof window?window:'undefined'!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var a=/\blang(?:uage)?-(\w+)\b/i,i=0,e=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(a){return a instanceof t?new t(a.type,e.util.encode(a.content),a.alias):'Array'===e.util.type(a)?a.map(e.util.encode):a.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\u00a0/g,' ')},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,'__id',{value:++i}),e.__id},clone:function(t){var i=e.util.type(t);switch(i){case'Object':var r={};for(var a in t)t.hasOwnProperty(a)&&(r[a]=e.util.clone(t[a]));return r;case'Array':return t.map(function(t){return e.util.clone(t)})};return t}},languages:{extend:function(t,a){var i=e.util.clone(e.languages[t]);for(var r in a)i[r]=a[r];return i},insertBefore:function(t,a,r,i){i=i||e.languages;var s=i[t];if(2==arguments.length){r=arguments[1];for(var n in r)r.hasOwnProperty(n)&&(s[n]=r[n]);return s};var l={};for(var o in s)if(s.hasOwnProperty(o)){if(o==a)for(var n in r)r.hasOwnProperty(n)&&(l[n]=r[n]);l[o]=s[o]};return e.languages.DFS(e.languages,function(e,a){a===i[t]&&e!=t&&(this[e]=l)}),i[t]=l},DFS:function(t,a,n,i){i=i||{};for(var r in t)t.hasOwnProperty(r)&&(a.call(t,r,t[r],n||r),'Object'!==e.util.type(t[r])||i[e.util.objId(t[r])]?'Array'!==e.util.type(t[r])||i[e.util.objId(t[r])]||(i[e.util.objId(t[r])]=!0,e.languages.DFS(t[r],a,r,i)):(i[e.util.objId(t[r])]=!0,e.languages.DFS(t[r],a,null,i)))}},plugins:{},highlightAll:function(t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};e.hooks.run('before-highlightall',r);for(var i,n=r.elements||document.querySelectorAll(r.selector),s=0;i=n[s++];)e.highlightElement(i,t===!0,r.callback)},highlightElement:function(t,i,n){for(var o,c,s=t;s&&!a.test(s.className);)s=s.parentNode;s&&(o=(s.className.match(a)||[,''])[1].toLowerCase(),c=e.languages[o]),t.className=t.className.replace(a,'').replace(/\s+/g,' ')+' language-'+o,t.parentNode&&(s=t.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(a,'').replace(/\s+/g,' ')+' language-'+o));var p=t.textContent,r={element:t,language:o,grammar:c,code:p};if(e.hooks.run('before-sanity-check',r),!r.code||!r.grammar)return r.code&&(e.hooks.run('before-highlight',r),r.element.textContent=r.code,e.hooks.run('after-highlight',r)),e.hooks.run('complete',r),void 0;if(e.hooks.run('before-highlight',r),i&&_self.Worker){var l=new Worker(e.filename);l.onmessage=function(t){r.highlightedCode=t.data,e.hooks.run('before-insert',r),r.element.innerHTML=r.highlightedCode,n&&n.call(r.element),e.hooks.run('after-highlight',r),e.hooks.run('complete',r)},l.postMessage(JSON.stringify({language:r.language,code:r.code,immediateClose:!0}))}
else r.highlightedCode=e.highlight(r.code,r.grammar,r.language),e.hooks.run('before-insert',r),r.element.innerHTML=r.highlightedCode,n&&n.call(t),e.hooks.run('after-highlight',r),e.hooks.run('complete',r)},highlight:function(a,r,i){var n=e.tokenize(a,r);return t.stringify(e.util.encode(n),i)},matchGrammar:function(t,a,s,m,A,w,P){var T=e.Token;for(var p in s)if(s.hasOwnProperty(p)&&s[p]){if(p==P)return;var c=s[p];c='Array'===e.util.type(c)?c:[c];for(var S=0;S<c.length;++S){var i=c[S],I=i.inside,v=!!i.lookbehind,y=!!i.greedy,k=0,L=i.alias;if(y&&!i.pattern.global){var x=i.pattern.toString().match(/[imuy]*$/)[0];i.pattern=RegExp(i.pattern.source,x+'g')};i=i.pattern||i;for(var n=m,o=A;n<a.length;o+=a[n].length,++n){var d=a[n];if(a.length>t.length)return;if(!(d instanceof T)){i.lastIndex=0;var r=i.exec(d),E=1;if(!r&&y&&n!=a.length-1){if(i.lastIndex=o,r=i.exec(t),!r)break;for(var g=r.index+(v?r[1].length:0),f=r.index+r[0].length,l=n,u=o,O=a.length;O>l&&(f>u||!a[l].type&&!a[l-1].greedy);++l)u+=a[l].length,g>=u&&(++n,o=u);if(a[n]instanceof T||a[l-1].greedy)continue;E=l-n,d=t.slice(o,u),r.index-=o};if(r){v&&(k=r[1].length);var g=r.index+k,r=r[0].slice(k),f=g+r.length,b=d.slice(0,g),N=d.slice(f),h=[n,E];b&&(++n,o+=b.length,h.push(b));var R=new T(p,I?e.tokenize(r,I):r,L,r,y);if(h.push(R),N&&h.push(N),Array.prototype.splice.apply(a,h),1!=E&&e.matchGrammar(t,a,s,n,o,!0,p),w)break}
else if(w)break}}}}},tokenize:function(t,a){var n=[t],r=a.rest;if(r){for(var i in r)a[i]=r[i];delete a.rest};return e.matchGrammar(t,n,a,0,0,!1),n},hooks:{all:{},add:function(t,a){var r=e.hooks.all;r[t]=r[t]||[],r[t].push(a)},run:function(t,a){var r=e.hooks.all[t];if(r&&r.length)for(var i,n=0;i=r[n++];)i(a)}}},t=e.Token=function(e,t,a,r,i){this.type=e,this.content=t,this.alias=a,this.length=0|(r||'').length,this.greedy=!!i};if(t.stringify=function(a,r,i){if('string'==typeof a)return a;if('Array'===e.util.type(a))return a.map(function(e){return t.stringify(e,r,a)}).join('');var n={type:a.type,content:t.stringify(a.content,r,i),tag:'span',classes:['token',a.type],attributes:{},language:r,parent:i};if(a.alias){var o='Array'===e.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(n.classes,o)};e.hooks.run('wrap',n);var s=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||'').replace(/"/g,'&quot;')+'"'}).join(' ');return'<'+n.tag+' class="'+n.classes.join(' ')+'"'+(s?' '+s:'')+'>'+n.content+'</'+n.tag+'>'},!_self.document)return _self.addEventListener?(e.disableWorkerMessageHandler||_self.addEventListener('message',function(t){var a=JSON.parse(t.data),r=a.language,i=a.code,n=a.immediateClose;_self.postMessage(e.highlight(i,e.languages[r],r)),n&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName('script')).pop();return r&&(e.filename=r.src,e.manual||r.hasAttribute('data-manual')||('loading'!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(e.highlightAll):window.setTimeout(e.highlightAll,16):document.addEventListener('DOMContentLoaded',e.highlightAll))),_self.Prism}();'undefined'!=typeof module&&module.exports&&(module.exports=Prism),'undefined'!=typeof global&&(global.Prism=Prism);Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},'attr-value':{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,'attr-name':{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside['attr-value'].inside.entity=Prism.languages.markup.entity,Prism.hooks.add('wrap',function(e){'entity'===e.type&&(e.attributes.title=e.content.replace(/&amp;/,'&'))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,'function':/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore('markup','tag',{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:'language-css'}}),Prism.languages.insertBefore('inside','attr-value',{'style-attr':{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{'attr-name':{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,'attr-value':{pattern:/.+/i,inside:Prism.languages.css}},alias:'language-css'}},Prism.languages.markup.tag));Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},'class-name':{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,'boolean':/\b(?:true|false)\b/,'function':/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend('clike',{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,'function':/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore('javascript','keyword',{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},'function-variable':{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:'function'}}),Prism.languages.insertBefore('javascript','string',{'template-string':{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{'interpolation-punctuation':{pattern:/^\$\{|\}$/,alias:'punctuation'},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore('markup','tag',{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:'language-javascript'}}),Prism.languages.js=Prism.languages.javascript;!function(e){var a={variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[\w#?*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:'important'},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,inside:a}],variable:a.variable,'function':{pattern:/(^|[\s;|&])(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|[\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,lookbehind:!0},'boolean':{pattern:/(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var t=a.variable[1].inside;t['function']=e.languages.bash['function'],t.keyword=e.languages.bash.keyword,t.boolean=e.languages.bash.boolean,t.operator=e.languages.bash.operator,t.punctuation=e.languages.bash.punctuation}(Prism);!function(e){var t=/%%?[~:\w]+%?|!\S+!/,a={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:'attr-name',inside:{punctuation:/:/}},r=/"[^"]*"/,i=/(?:\b|-)\d+\b/;e.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:'property'},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/^for\b|\b(?:in|do)\b/i,string:r,parameter:a,variable:t,number:i,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,lookbehind:!0,inside:{keyword:/^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,string:r,parameter:a,variable:t,number:i,operator:/\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:r,parameter:a,variable:[t,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:i,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^\w+\b/i,string:r,parameter:a,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:'property'},variable:t,number:i,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}}(Prism);!function(e){var a=/#(?!\{).+/,t={pattern:/#\{[^}]+\}/,alias:'variable'};e.languages.coffeescript=e.languages.extend('javascript',{comment:a,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:t}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,'class-member':{pattern:/@(?!\d)\w+/,alias:'variable'}}),e.languages.insertBefore('coffeescript','comment',{'multiline-comment':{pattern:/###[\s\S]+?###/,alias:'comment'},'block-regex':{pattern:/\/{3}[\s\S]*?\/{3}/,alias:'regex',inside:{comment:a,interpolation:t}}}),e.languages.insertBefore('coffeescript','string',{'inline-javascript':{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:'punctuation'},rest:e.languages.javascript}},'multiline-string':[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:'string'},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:'string',inside:{interpolation:t}}]}),e.languages.insertBefore('coffeescript','keyword',{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript['template-string']}(Prism);Prism.languages.css.selector={pattern:/[^{}\s][^{}]*(?=\s*\{)/,inside:{'pseudo-element':/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,'pseudo-class':/:[-\w]+(?:\(.*\))?/,'class':/\.[-:.\w]+/,id:/#[-:.\w]+/,attribute:/\[[^\]]+\]/}},Prism.languages.insertBefore('css','function',{hexcode:/#[\da-f]{3,8}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%.]+/});Prism.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m],deleted:/^[-<].*$/m,inserted:/^[+>].*$/m,diff:{pattern:/^!(?!!).+$/m,alias:'important'}};Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};Prism.languages.ini={comment:/^[ \t]*;.*$/m,selector:/^[ \t]*\[.*?\]/m,constant:/^[ \t]*[^\s=]+?(?=[ \t]*=)/m,'attr-value':{pattern:/=.*/,inside:{punctuation:/^[=]/}}};Prism.languages.json={property:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][+-]?\d+)?)\b/,punctuation:/[{}[\]);,]/,operator:/:/g,'boolean':/\b(?:true|false)\b/i,'null':/\bnull\b/i},Prism.languages.jsonp=Prism.languages.json;Prism.languages.less=Prism.languages.extend('css',{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,punctuation:/[{}();:,]/,operator:/[+\-*\/]/}),Prism.languages.insertBefore('less','punctuation',{'function':Prism.languages.less.function}),Prism.languages.insertBefore('less','property',{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],'mixin-usage':{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:'function'}});Prism.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,'function':/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/};Prism.languages.markdown=Prism.languages.extend('markup',{}),Prism.languages.insertBefore('markdown','prolog',{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:'punctuation'},code:[{pattern:/^(?: {4}|\t).+/m,alias:'keyword'},{pattern:/``.+?``|`[^`\n]+`/,alias:'keyword'}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:'important',inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:'important',inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:'punctuation'},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:'punctuation'},'url-reference':{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:'url'},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold);Prism.languages.nginx=Prism.languages.extend('clike',{comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},keyword:/\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|events|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i}),Prism.languages.insertBefore('nginx','keyword',{variable:/\$[a-z_]+/i});Prism.languages.nix={comment:/\/\*[\s\S]*?\*\/|#.*/,string:{pattern:/"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,greedy:!0,inside:{interpolation:{pattern:/(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,lookbehind:!0,inside:{antiquotation:{pattern:/^\$(?=\{)/,alias:'variable'}}}}},url:[/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,{pattern:/([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,lookbehind:!0}],antiquotation:{pattern:/\$(?=\{)/,alias:'variable'},number:/\b\d+\b/,keyword:/\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,'function':/\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,'boolean':/\b(?:true|false)\b/,operator:/[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,punctuation:/[{}()[\].,:;]/},Prism.languages.nix.string.inside.interpolation.inside.rest=Prism.util.clone(Prism.languages.nix);Prism.languages.php=Prism.languages.extend('clike',{keyword:/\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),Prism.languages.insertBefore('php','class-name',{'shell-comment':{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:'comment'}}),Prism.languages.insertBefore('php','keyword',{delimiter:{pattern:/\?>|<\?(?:php|=)?/i,alias:'important'},variable:/\$\w+\b/i,'package':{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore('php','operator',{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add('before-highlight',function(e){'php'===e.language&&/(?:<\?php|<\?)/gi.test(e.code)&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi,function(t){for(var a=e.tokenStack.length;-1!==e.backupCode.indexOf('___PHP'+a+'___');)++a;return e.tokenStack[a]=t,'___PHP'+a+'___'}),e.grammar=Prism.languages.markup)}),Prism.hooks.add('before-insert',function(e){'php'===e.language&&e.backupCode&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add('after-highlight',function(e){if('php'===e.language&&e.tokenStack){e.grammar=Prism.languages.php;for(var t=0,r=Object.keys(e.tokenStack);t<r.length;++t){var a=r[t],i=e.tokenStack[a];e.highlightedCode=e.highlightedCode.replace('___PHP'+a+'___','<span class="token php language-php">'+Prism.highlight(i,e.grammar,'php').replace(/\$/g,'$$$$')+'</span>')};e.element.innerHTML=e.highlightedCode}}));Prism.languages.insertBefore('php','variable',{'this':/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/static|self|parent/,punctuation:/::|\\/}}});Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/,greedy:!0,lookbehind:!0},variable:/@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,'function':/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,'boolean':/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};Prism.languages.twig={comment:/\{#[\s\S]*?#\}/,tag:{pattern:/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,inside:{ld:{pattern:/^(?:\{\{-?|\{%-?\s*\w+)/,inside:{punctuation:/^(?:\{\{|\{%)-?/,keyword:/\w+/}},rd:{pattern:/-?(?:%\}|\}\})$/,inside:{punctuation:/.*/}},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,'boolean':/\b(?:true|false|null)\b/,number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][-+]?\d+)?)\b/,operator:[{pattern:/(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],property:/\b[a-zA-Z_]\w*\b/,punctuation:/[()\[\]{}:.,]/}},other:{pattern:/\S(?:[\s\S]*\S)?/,inside:Prism.languages.markup}};Prism.languages.typescript=Prism.languages.extend('javascript',{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|false|true|module|declare|constructor|string|Function|any|number|boolean|Array|symbol|namespace|abstract|require|type)\b/}),Prism.languages.ts=Prism.languages.typescript;Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,lookbehind:!0,alias:'string'},comment:/#.*/,key:{pattern:/(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,lookbehind:!0,alias:'atrule'},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:'important'},datetime:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,lookbehind:!0,alias:'number'},'boolean':{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:'important'},'null':{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:'important'},string:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}))/m,lookbehind:!0,greedy:!0},number:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+\-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./};!function(){if('undefined'!=typeof self&&self.Prism&&self.document){var t='line-numbers',e=function(e){var o=a(e),r=o['white-space'];if('pre-wrap'===r||'pre-line'===r){var i=e.querySelector('code'),n=e.querySelector('.line-numbers-rows'),t=e.querySelector('.line-numbers-sizer'),s=e.textContent.split('\n');t||(t=document.createElement('span'),t.className='line-numbers-sizer',i.appendChild(t)),t.style.display='block',s.forEach(function(e,a){t.textContent=e||'\n';var r=t.getBoundingClientRect().height;n.children[a].style.height=r+'px'}),t.textContent='',t.style.display='none'}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener('resize',function(){Array.prototype.forEach.call(document.querySelectorAll('pre.'+t),e)}),Prism.hooks.add('complete',function(t){if(t.code){var a=t.element.parentNode,i=/\s*\bline-numbers\b\s*/;if(a&&/pre/i.test(a.nodeName)&&(i.test(a.className)||i.test(t.element.className))&&!t.element.querySelector('.line-numbers-rows')){i.test(t.element.className)&&(t.element.className=t.element.className.replace(i,' ')),i.test(a.className)||(a.className+=' line-numbers');var r,s=t.code.match(/\n(?!$)/g),o=s?s.length+1:1,n=new Array(o+1);n=n.join('<span></span>'),r=document.createElement('span'),r.setAttribute('aria-hidden','true'),r.className='line-numbers-rows',r.innerHTML=n,a.hasAttribute('data-start')&&(a.style.counterReset='linenumber '+(parseInt(a.getAttribute('data-start'),10)-1)),t.element.appendChild(r),e(a)}}})}}();