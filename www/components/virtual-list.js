(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);var r=document,a=(window,e.$),i=(e.Template7,e.utils),s=e.device,l=(e.support,e.Class),n=(e.Modal,e.ConstructorMethods),o=(e.ModalMethods,function(e){function t(t,l){void 0===l&&(l={}),e.call(this,l,[t]);var n,o=this;"md"===t.theme?n=48:"ios"===t.theme?n=44:"aurora"===t.theme&&(n=38);var p={cols:1,height:n,cache:!0,dynamicHeightBufferSize:1,showFilteredItemsOnly:!1,renderExternal:void 0,setListHeight:!0,searchByItem:void 0,searchAll:void 0,itemTemplate:void 0,ul:null,createUl:!0,scrollableParentEl:void 0,renderItem:function(e){return('\n          <li>\n            <div class="item-content">\n              <div class="item-inner">\n                <div class="item-title">'+e+"</div>\n              </div>\n            </div>\n          </li>\n        ").trim()},on:{}};if(o.useModulesParams(p),o.params=i.extend(p,l),void 0!==o.params.height&&o.params.height||(o.params.height=n),o.$el=a(l.el),o.el=o.$el[0],0!==o.$el.length){o.$el[0].f7VirtualList=o,o.items=o.params.items,o.params.showFilteredItemsOnly&&(o.filteredItems=[]),o.params.itemTemplate?"string"==typeof o.params.itemTemplate?o.renderItem=t.t7.compile(o.params.itemTemplate):"function"==typeof o.params.itemTemplate&&(o.renderItem=o.params.itemTemplate):o.params.renderItem&&(o.renderItem=o.params.renderItem),o.$pageContentEl=o.$el.parents(".page-content"),o.pageContentEl=o.$pageContentEl[0],o.$scrollableParentEl=o.params.scrollableParentEl?a(o.params.scrollableParentEl).eq(0):o.$pageContentEl,!o.$scrollableParentEl.length&&o.$pageContentEl.length&&(o.$scrollableParentEl=o.$pageContentEl),o.scrollableParentEl=o.$scrollableParentEl[0],void 0!==o.params.updatableScroll?o.updatableScroll=o.params.updatableScroll:(o.updatableScroll=!0,s.ios&&s.osVersion.split(".")[0]<8&&(o.updatableScroll=!1));var m,h=o.params.ul;o.$ul=h?a(o.params.ul):o.$el.children("ul"),0===o.$ul.length&&o.params.createUl&&(o.$el.append("<ul></ul>"),o.$ul=o.$el.children("ul")),o.ul=o.$ul[0],m=o.ul||o.params.createUl?o.$ul:o.$el,i.extend(o,{$itemsWrapEl:m,itemsWrapEl:m[0],domCache:{},displayDomCache:{},tempDomElement:r.createElement("ul"),lastRepaintY:null,fragment:r.createDocumentFragment(),pageHeight:void 0,rowsPerScreen:void 0,rowsBefore:void 0,rowsAfter:void 0,rowsToRender:void 0,maxBufferHeight:0,listHeight:void 0,dynamicHeight:"function"==typeof o.params.height}),o.useModules();var c,d,f,u,g=o.handleScroll.bind(o),v=o.handleResize.bind(o);return o.attachEvents=function(){c=o.$el.parents(".page").eq(0),d=o.$el.parents(".tab").eq(0),f=o.$el.parents(".panel").eq(0),u=o.$el.parents(".popup").eq(0),o.$scrollableParentEl.on("scroll",g),c&&c.on("page:reinit",v),d&&d.on("tab:show",v),f&&f.on("panel:open",v),u&&u.on("popup:open",v),t.on("resize",v)},o.detachEvents=function(){o.$scrollableParentEl.off("scroll",g),c&&c.off("page:reinit",v),d&&d.off("tab:show",v),f&&f.off("panel:open",v),u&&u.off("popup:open",v),t.off("resize",v)},o.init(),o}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setListSize=function(){var e=this,t=e.filteredItems||e.items;if(e.pageHeight=e.$scrollableParentEl[0].offsetHeight,e.dynamicHeight){e.listHeight=0,e.heights=[];for(var r=0;r<t.length;r+=1){var a=e.params.height(t[r]);e.listHeight+=a,e.heights.push(a)}}else e.listHeight=Math.ceil(t.length/e.params.cols)*e.params.height,e.rowsPerScreen=Math.ceil(e.pageHeight/e.params.height),e.rowsBefore=e.params.rowsBefore||2*e.rowsPerScreen,e.rowsAfter=e.params.rowsAfter||e.rowsPerScreen,e.rowsToRender=e.rowsPerScreen+e.rowsBefore+e.rowsAfter,e.maxBufferHeight=e.rowsBefore/2*e.params.height;(e.updatableScroll||e.params.setListHeight)&&e.$itemsWrapEl.css({height:e.listHeight+"px"})},t.prototype.render=function(e,t){var r=this;e&&(r.lastRepaintY=null);var a=-(r.$el[0].getBoundingClientRect().top-r.$scrollableParentEl[0].getBoundingClientRect().top);if(void 0!==t&&(a=t),null===r.lastRepaintY||Math.abs(a-r.lastRepaintY)>r.maxBufferHeight||!r.updatableScroll&&r.$scrollableParentEl[0].scrollTop+r.pageHeight>=r.$scrollableParentEl[0].scrollHeight){r.lastRepaintY=a;var i,s,l,n=r.filteredItems||r.items,o=0,p=0;if(r.dynamicHeight){var m,h=0;r.maxBufferHeight=r.pageHeight;for(var c=0;c<r.heights.length;c+=1)m=r.heights[c],void 0===i&&(h+m>=a-2*r.pageHeight*r.params.dynamicHeightBufferSize?i=c:o+=m),void 0===s&&((h+m>=a+2*r.pageHeight*r.params.dynamicHeightBufferSize||c===r.heights.length-1)&&(s=c+1),p+=m),h+=m;s=Math.min(s,n.length)}else(i=(parseInt(a/r.params.height,10)-r.rowsBefore)*r.params.cols)<0&&(i=0),s=Math.min(i+r.rowsToRender*r.params.cols,n.length);var d,f=[];for(r.reachEnd=!1,d=i;d<s;d+=1){var u=void 0,g=r.items.indexOf(n[d]);d===i&&(r.currentFromIndex=g),d===s-1&&(r.currentToIndex=g),r.filteredItems?r.items[g]===r.filteredItems[r.filteredItems.length-1]&&(r.reachEnd=!0):g===r.items.length-1&&(r.reachEnd=!0),r.params.renderExternal?f.push(n[d]):r.domCache[g]?(u=r.domCache[g]).f7VirtualListIndex=g:(r.renderItem?r.tempDomElement.innerHTML=r.renderItem(n[d],g).trim():r.tempDomElement.innerHTML=n[d].toString().trim(),u=r.tempDomElement.childNodes[0],r.params.cache&&(r.domCache[g]=u),u.f7VirtualListIndex=g),d===i&&(l=r.dynamicHeight?o:d*r.params.height/r.params.cols),r.params.renderExternal||(u.style.top=l+"px",r.emit("local::itemBeforeInsert vlItemBeforeInsert",r,u,n[d]),r.fragment.appendChild(u))}r.updatableScroll||(r.dynamicHeight?r.itemsWrapEl.style.height=p+"px":r.itemsWrapEl.style.height=d*r.params.height/r.params.cols+"px"),r.params.renderExternal?n&&0===n.length&&(r.reachEnd=!0):(r.emit("local::beforeClear vlBeforeClear",r,r.fragment),r.itemsWrapEl.innerHTML="",r.emit("local::itemsBeforeInsert vlItemsBeforeInsert",r,r.fragment),n&&0===n.length?(r.reachEnd=!0,r.params.emptyTemplate&&(r.itemsWrapEl.innerHTML=r.params.emptyTemplate)):r.itemsWrapEl.appendChild(r.fragment),r.emit("local::itemsAfterInsert vlItemsAfterInsert",r,r.fragment)),void 0!==t&&e&&r.$scrollableParentEl.scrollTop(t,0),r.params.renderExternal&&r.params.renderExternal(r,{fromIndex:i,toIndex:s,listHeight:r.listHeight,topPosition:l,items:f})}},t.prototype.filterItems=function(e,t){void 0===t&&(t=!0);var r=this;r.filteredItems=[];for(var a=0;a<e.length;a+=1)r.filteredItems.push(r.items[e[a]]);t&&(r.$scrollableParentEl[0].scrollTop=0),r.update()},t.prototype.resetFilter=function(){var e=this;e.params.showFilteredItemsOnly?e.filteredItems=[]:(e.filteredItems=null,delete e.filteredItems),e.update()},t.prototype.scrollToItem=function(e){var t=this;if(e>t.items.length)return!1;var r=0;if(t.dynamicHeight)for(var a=0;a<e;a+=1)r+=t.heights[a];else r=e*t.params.height;var i=t.$el[0].offsetTop;return t.render(!0,i+r-parseInt(t.$scrollableParentEl.css("padding-top"),10)),!0},t.prototype.handleScroll=function(){this.render()},t.prototype.isVisible=function(){return!!(this.el.offsetWidth||this.el.offsetHeight||this.el.getClientRects().length)},t.prototype.handleResize=function(){this.isVisible()&&(this.setListSize(),this.render(!0))},t.prototype.appendItems=function(e){for(var t=0;t<e.length;t+=1)this.items.push(e[t]);this.update()},t.prototype.appendItem=function(e){this.appendItems([e])},t.prototype.replaceAllItems=function(e){this.items=e,delete this.filteredItems,this.domCache={},this.update()},t.prototype.replaceItem=function(e,t){this.items[e]=t,this.params.cache&&delete this.domCache[e],this.update()},t.prototype.prependItems=function(e){for(var t=this,r=e.length-1;r>=0;r-=1)t.items.unshift(e[r]);if(t.params.cache){var a={};Object.keys(t.domCache).forEach(function(r){a[parseInt(r,10)+e.length]=t.domCache[r]}),t.domCache=a}t.update()},t.prototype.prependItem=function(e){this.prependItems([e])},t.prototype.moveItem=function(e,t){var r=this,a=e,i=t;if(a!==i){var s=r.items.splice(a,1)[0];if(i>=r.items.length?(r.items.push(s),i=r.items.length-1):r.items.splice(i,0,s),r.params.cache){var l={};Object.keys(r.domCache).forEach(function(e){var t=parseInt(e,10),s=a<i?a:i,n=a<i?i:a,o=a<i?-1:1;(t<s||t>n)&&(l[t]=r.domCache[t]),t===s&&(l[n]=r.domCache[t]),t>s&&t<=n&&(l[t+o]=r.domCache[t])}),r.domCache=l}r.update()}},t.prototype.insertItemBefore=function(e,t){var r=this;if(0!==e)if(e>=r.items.length)r.appendItem(t);else{if(r.items.splice(e,0,t),r.params.cache){var a={};Object.keys(r.domCache).forEach(function(t){var i=parseInt(t,10);i>=e&&(a[i+1]=r.domCache[i])}),r.domCache=a}r.update()}else r.prependItem(t)},t.prototype.deleteItems=function(e){for(var t,r=this,a=0,i=function(i){var s=e[i];void 0!==t&&s>t&&(a=-i),s+=a,t=e[i];var l=r.items.splice(s,1)[0];if(r.filteredItems&&r.filteredItems.indexOf(l)>=0&&r.filteredItems.splice(r.filteredItems.indexOf(l),1),r.params.cache){var n={};Object.keys(r.domCache).forEach(function(e){var t=parseInt(e,10);t===s?delete r.domCache[s]:parseInt(e,10)>s?n[t-1]=r.domCache[e]:n[t]=r.domCache[e]}),r.domCache=n}},s=0;s<e.length;s+=1)i(s);r.update()},t.prototype.deleteAllItems=function(){var e=this;e.items=[],delete e.filteredItems,e.params.cache&&(e.domCache={}),e.update()},t.prototype.deleteItem=function(e){this.deleteItems([e])},t.prototype.clearCache=function(){this.domCache={}},t.prototype.update=function(e){e&&this.params.cache&&(this.domCache={}),this.setListSize(),this.render(!0)},t.prototype.init=function(){this.attachEvents(),this.setListSize(),this.render()},t.prototype.destroy=function(){var e=this;e.detachEvents(),e.$el[0].f7VirtualList=null,delete e.$el[0].f7VirtualList,i.deleteProps(e),e=null},t}(l)),p={name:"virtualList",static:{VirtualList:o},create:function(){this.virtualList=n({defaultSelector:".virtual-list",constructor:o,app:this,domProp:"f7VirtualList"})}};if(t){if(e.prototype.modules&&e.prototype.modules[p.name])return;e.use(p),e.instance&&(e.instance.useModuleParams(p,e.instance.params),e.instance.useModule(p))}return p}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
