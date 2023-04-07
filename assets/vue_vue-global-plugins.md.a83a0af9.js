import{_ as s,c as a,o as n,N as l}from"./chunks/framework.d5c3a6a5.js";const u=JSON.parse('{"title":"Complementos Globales de Vue","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue-global-plugins.md"}'),o={name:"vue/vue-global-plugins.md"},p=l(`<h1 id="complementos-globales-de-vue" tabindex="-1">Complementos Globales de Vue <a class="header-anchor" href="#complementos-globales-de-vue" aria-label="Permalink to &quot;Complementos Globales de Vue&quot;">​</a></h1><p>Esta sección explica de qué manera son ordenados y agregados los complementos globales de Vue en nuestra SPA.</p><p>Empecemos desde el principio.</p><h2 id="main" tabindex="-1"><code>main</code> <a class="header-anchor" href="#main" aria-label="Permalink to &quot;\`main\`&quot;">​</a></h2><p>En el <a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/main.ts" target="_blank" rel="noreferrer">archivo principal</a>, ubicado en la raiz del proyecto, tenemos lo siguiente.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @/main.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/plugins/app</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/plugins</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/assets/css/app.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="plugins-app" tabindex="-1"><code>plugins/app</code> <a class="header-anchor" href="#plugins-app" aria-label="Permalink to &quot;\`plugins/app\`&quot;">​</a></h2><p>La primera pregunta que nos viene a la mente es:</p><ul><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/plugins/app.ts" target="_blank" rel="noreferrer">¿Qué devuelve <code>@/plugins/app</code>?</a></li></ul><p>Hechemos un vistazo a este archivo.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @/plugins/app.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../App.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> app</span></span></code></pre></div><p>Observe que primero importamos el método <code>createApp</code>, nativo de Vue, para luego instanciar la constante <code>app</code>, pasándole el componente principal <a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/App.vue" target="_blank" rel="noreferrer"><code>App.vue</code></a>. Una vez hecho esto, exportamos la constante <code>app</code>.</p><h2 id="plugins" tabindex="-1"><code>plugins</code> <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;\`plugins\`&quot;">​</a></h2><p>Según lo establecido en el <a href="./../vue/vue-global-plugins.html#main">archivo principal</a>, la siguiente pregunta que hacemos es:</p><ul><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/plugins/index.ts" target="_blank" rel="noreferrer">¿Qué devuelve <code>import &#39;@/plugins&#39;</code>?</a></li></ul><p>Hechemos un vistazo también a este archivo.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @/plugins/index.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./pinia</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./components</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./router</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>Como se puede observar, trata sobre la importación de tres complementos debidamente ordenados, cada uno en su propio módulo. Veamos cada uno de ellos.</p><h2 id="plugins-pinia" tabindex="-1"><code>plugins/pinia</code> <a class="header-anchor" href="#plugins-pinia" aria-label="Permalink to &quot;\`plugins/pinia\`&quot;">​</a></h2><p>Empezamos con <a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/plugins/pinia.ts" target="_blank" rel="noreferrer">plugins/pinia</a> el cual nos permitirá manejar el estado global de la aplicación.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @/plugins/pinia.ts</span></span>
<span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/plugins/app</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createPinia</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pinia</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PiniaHistoryPlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/modules/ShopCart/plugins/PiniaHistoryPlugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> FontAwesomePlugin </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/modules/ShopCart/plugins/FontAwesome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pinia </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createPinia</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">pinia</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(PiniaHistoryPlugin)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(pinia)</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(FontAwesomePlugin)</span></span></code></pre></div><p>Aquí están sucediendo varias cosas que despiertan curiosidad y que serán discutidas más adelante.</p><p>Sin embargo, lo importante para reconocer aquí es que primero estamos importando lo que devuelve <a href="./../vue/vue-global-plugins.html#plugins-app"><code>plugins/app</code></a>. Luego configuramos los complementos <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer"><code>pinia</code></a> y <a href="https://fontawesome.com/" target="_blank" rel="noreferrer"><code>FontAwesomePlugin</code></a>, pasándolos como complemento a la instancia de <code>app</code> a travéz del método <code>use</code>.</p><h2 id="plugins-components" tabindex="-1"><code>plugins/components</code> <a class="header-anchor" href="#plugins-components" aria-label="Permalink to &quot;\`plugins/components\`&quot;">​</a></h2><p>Continuamos con <a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/plugins/components.ts" target="_blank" rel="noreferrer">los componentes globales</a> de la aplicación.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @/plugins/components.ts</span></span>
<span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/plugins/app</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineAsyncComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> EmptyLayout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineAsyncComponent</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/layouts/EmptyLayout.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> DashboardLayout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineAsyncComponent</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/layouts/DashboardLayout.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> AppLink </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineAsyncComponent</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/components/AppLink.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">empty-layout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> EmptyLayout)</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default-layout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> DashboardLayout)</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AppLink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> AppLink)</span></span></code></pre></div><p>Observe que aquí también se está importando primero <a href="./../vue/vue-global-plugins.html#plugins-app"><code>@/plugins/app</code></a>. Luego se importan dinámicamente tres componentes respectivamente, los cuales finalmente serán implementados de manera global:</p><ul><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/components/AppLink.vue" target="_blank" rel="noreferrer"><code>AppLink.vue</code></a></li><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/layouts/EmptyLayout.vue" target="_blank" rel="noreferrer"><code>EmptyLayout.vue</code></a></li><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/layouts/DashboardLayout.vue" target="_blank" rel="noreferrer"><code>DashboardLayout.vue</code></a></li></ul><h2 id="plugins-router" tabindex="-1"><code>plugins/router</code> <a class="header-anchor" href="#plugins-router" aria-label="Permalink to &quot;\`plugins/router\`&quot;">​</a></h2><p>Y por último, en <a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/plugins/router.ts" target="_blank" rel="noreferrer">este archivo</a>, también se importa primero <a href="./../vue/vue-global-plugins.html#plugins-app"><code>@/plugins/app</code></a>, para finalmente pasar el <a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/src/router/index.ts" target="_blank" rel="noreferrer"><code>router</code></a> como complemento global.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @/plugins/router.ts</span></span>
<span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/plugins/app</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/router</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(router)</span></span></code></pre></div><p>Esto es todo lo que necesita saber para entender lo que hace el <a href="./../vue/vue-global-plugins.html#main">archivo principal</a> en cuanto a los complementos.</p>`,32),e=[p];function t(r,c,i,D,y,C){return n(),a("div",null,e)}const A=s(o,[["render",t]]);export{u as __pageData,A as default};