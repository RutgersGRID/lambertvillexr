function i(e,c){return function(a){const o=e/c,s=a.image.width/a.image.height/o;a.offset.x=s>1?(1-1/s)/2:0,a.repeat.x=s>1?1/s:1,a.offset.y=s>1?0:(1-s)/2,a.repeat.y=s>1?1:s}}function n(e,c,a){const o=c/a,s=e.image.width/e.image.height/o;e.offset.x=s>1?(1-1/s)/2:0,e.repeat.x=s>1?1/s:1,e.offset.y=s>1?0:(1-s)/2,e.repeat.y=s>1?1:s}export{n as f,i as l};