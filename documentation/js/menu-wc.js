'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">geekmon-web documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f268e24cf1ad01494438557a76cb03b2a2c59f8980eebd79858ea9cd2784f0748a5bc1a2b45f80059f8ceb2f08d34f71bb7d40a097959a6fc87d5e21296a242c"' : 'data-target="#xs-components-links-module-AppModule-f268e24cf1ad01494438557a76cb03b2a2c59f8980eebd79858ea9cd2784f0748a5bc1a2b45f80059f8ceb2f08d34f71bb7d40a097959a6fc87d5e21296a242c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f268e24cf1ad01494438557a76cb03b2a2c59f8980eebd79858ea9cd2784f0748a5bc1a2b45f80059f8ceb2f08d34f71bb7d40a097959a6fc87d5e21296a242c"' :
                                            'id="xs-components-links-module-AppModule-f268e24cf1ad01494438557a76cb03b2a2c59f8980eebd79858ea9cd2784f0748a5bc1a2b45f80059f8ceb2f08d34f71bb7d40a097959a6fc87d5e21296a242c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthenticationModule-d78ac8f579ff27129f7bee510f68cf35966434fb7bf77feb47dd75a7519c2142a71af564a9b0cd56a4ea901045402f884e9d52a61356e3ee5663b593a0233662"' : 'data-target="#xs-components-links-module-AuthenticationModule-d78ac8f579ff27129f7bee510f68cf35966434fb7bf77feb47dd75a7519c2142a71af564a9b0cd56a4ea901045402f884e9d52a61356e3ee5663b593a0233662"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-d78ac8f579ff27129f7bee510f68cf35966434fb7bf77feb47dd75a7519c2142a71af564a9b0cd56a4ea901045402f884e9d52a61356e3ee5663b593a0233662"' :
                                            'id="xs-components-links-module-AuthenticationModule-d78ac8f579ff27129f7bee510f68cf35966434fb7bf77feb47dd75a7519c2142a71af564a9b0cd56a4ea901045402f884e9d52a61356e3ee5663b593a0233662"' }>
                                            <li class="link">
                                                <a href="components/SignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link" >AuthenticationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardsModule.html" data-type="entity-link" >CardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardsModule-6d2c7aba4d4961abdd6f888121a2828765f9c412de14362c8904d1b35ae0c1e9f38d07c0582761cefda738afb844a4293f449ce63557441dee03e0cbe962258d"' : 'data-target="#xs-components-links-module-CardsModule-6d2c7aba4d4961abdd6f888121a2828765f9c412de14362c8904d1b35ae0c1e9f38d07c0582761cefda738afb844a4293f449ce63557441dee03e0cbe962258d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardsModule-6d2c7aba4d4961abdd6f888121a2828765f9c412de14362c8904d1b35ae0c1e9f38d07c0582761cefda738afb844a4293f449ce63557441dee03e0cbe962258d"' :
                                            'id="xs-components-links-module-CardsModule-6d2c7aba4d4961abdd6f888121a2828765f9c412de14362c8904d1b35ae0c1e9f38d07c0582761cefda738afb844a4293f449ce63557441dee03e0cbe962258d"' }>
                                            <li class="link">
                                                <a href="components/CardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardsRoutingModule.html" data-type="entity-link" >CardsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DigiviceModule.html" data-type="entity-link" >DigiviceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DigiviceModule-98492ab3fa778fe481a0554c0dff4f1523d4ed691d10c6c52426e5dadd768e2de78d6f316d4cf4a6647045559f70ce4a78a4b1d7a0c903bf1906cc8f4a02712b"' : 'data-target="#xs-components-links-module-DigiviceModule-98492ab3fa778fe481a0554c0dff4f1523d4ed691d10c6c52426e5dadd768e2de78d6f316d4cf4a6647045559f70ce4a78a4b1d7a0c903bf1906cc8f4a02712b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DigiviceModule-98492ab3fa778fe481a0554c0dff4f1523d4ed691d10c6c52426e5dadd768e2de78d6f316d4cf4a6647045559f70ce4a78a4b1d7a0c903bf1906cc8f4a02712b"' :
                                            'id="xs-components-links-module-DigiviceModule-98492ab3fa778fe481a0554c0dff4f1523d4ed691d10c6c52426e5dadd768e2de78d6f316d4cf4a6647045559f70ce4a78a4b1d7a0c903bf1906cc8f4a02712b"' }>
                                            <li class="link">
                                                <a href="components/DigiviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DigiviceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DigiviceRoutingModule.html" data-type="entity-link" >DigiviceRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForumModule.html" data-type="entity-link" >ForumModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForumModule-3342c38815b0ea16d61b8a2e39425b87e598b5c0aba91d06d2b17365740e5ab3e4f095595c36b6dd6d0ac8f410f4c6f7b44a1aecce93ed798c9894be79ea811a"' : 'data-target="#xs-components-links-module-ForumModule-3342c38815b0ea16d61b8a2e39425b87e598b5c0aba91d06d2b17365740e5ab3e4f095595c36b6dd6d0ac8f410f4c6f7b44a1aecce93ed798c9894be79ea811a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForumModule-3342c38815b0ea16d61b8a2e39425b87e598b5c0aba91d06d2b17365740e5ab3e4f095595c36b6dd6d0ac8f410f4c6f7b44a1aecce93ed798c9894be79ea811a"' :
                                            'id="xs-components-links-module-ForumModule-3342c38815b0ea16d61b8a2e39425b87e598b5c0aba91d06d2b17365740e5ab3e4f095595c36b6dd6d0ac8f410f4c6f7b44a1aecce93ed798c9894be79ea811a"' }>
                                            <li class="link">
                                                <a href="components/EditModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForumComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReplyModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplyModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForumRoutingModule.html" data-type="entity-link" >ForumRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-81a37ad00e214fa3bdaa3f89a21c03b719f4eb74d5ab47ed85d52ee6b2897c12dc866e1024c9b199a793b96502c41aae03bdf57381e46676e0ba2e3503f23ca3"' : 'data-target="#xs-components-links-module-HomeModule-81a37ad00e214fa3bdaa3f89a21c03b719f4eb74d5ab47ed85d52ee6b2897c12dc866e1024c9b199a793b96502c41aae03bdf57381e46676e0ba2e3503f23ca3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-81a37ad00e214fa3bdaa3f89a21c03b719f4eb74d5ab47ed85d52ee6b2897c12dc866e1024c9b199a793b96502c41aae03bdf57381e46676e0ba2e3503f23ca3"' :
                                            'id="xs-components-links-module-HomeModule-81a37ad00e214fa3bdaa3f89a21c03b719f4eb74d5ab47ed85d52ee6b2897c12dc866e1024c9b199a793b96502c41aae03bdf57381e46676e0ba2e3503f23ca3"' }>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PokedexModule.html" data-type="entity-link" >PokedexModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PokedexModule-c4853fff087b8005b7d6ee6d0edf79eee69d3d4866a9a5b4f7a8c3b673a107c2526ba74c42af2dd91050f3eeac81697df0fb6600e3d189f069a1256ee654f12e"' : 'data-target="#xs-components-links-module-PokedexModule-c4853fff087b8005b7d6ee6d0edf79eee69d3d4866a9a5b4f7a8c3b673a107c2526ba74c42af2dd91050f3eeac81697df0fb6600e3d189f069a1256ee654f12e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PokedexModule-c4853fff087b8005b7d6ee6d0edf79eee69d3d4866a9a5b4f7a8c3b673a107c2526ba74c42af2dd91050f3eeac81697df0fb6600e3d189f069a1256ee654f12e"' :
                                            'id="xs-components-links-module-PokedexModule-c4853fff087b8005b7d6ee6d0edf79eee69d3d4866a9a5b4f7a8c3b673a107c2526ba74c42af2dd91050f3eeac81697df0fb6600e3d189f069a1256ee654f12e"' }>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PokedexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PokedexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QrComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PokedexRoutingModule.html" data-type="entity-link" >PokedexRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' : 'data-target="#xs-components-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' :
                                            'id="xs-components-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' }>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' : 'data-target="#xs-directives-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' :
                                        'id="xs-directives-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' }>
                                        <li class="link">
                                            <a href="directives/DownloadFile.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadFile</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' : 'data-target="#xs-pipes-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' :
                                            'id="xs-pipes-links-module-SharedModule-4f9a35ee2f5b49919643c6eec3afd2b88b259e2b297775c26d0d701fadd16d1217f6bb406d8b15ca162b4b6ed4a2e8af839ff55ec8a4542792ad5683f141cea6"' }>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TvShowsModule.html" data-type="entity-link" >TvShowsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TvShowsModule-6112828f28539cbc72a523230978862a26ecf3b6ce63596e94837acfad7bbe5c8851f4d6b7fcdb13b43f81a4e597b7c53fb96cb20d852fb9ae2a854a86619271"' : 'data-target="#xs-components-links-module-TvShowsModule-6112828f28539cbc72a523230978862a26ecf3b6ce63596e94837acfad7bbe5c8851f4d6b7fcdb13b43f81a4e597b7c53fb96cb20d852fb9ae2a854a86619271"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TvShowsModule-6112828f28539cbc72a523230978862a26ecf3b6ce63596e94837acfad7bbe5c8851f4d6b7fcdb13b43f81a4e597b7c53fb96cb20d852fb9ae2a854a86619271"' :
                                            'id="xs-components-links-module-TvShowsModule-6112828f28539cbc72a523230978862a26ecf3b6ce63596e94837acfad7bbe5c8851f4d6b7fcdb13b43f81a4e597b7c53fb96cb20d852fb9ae2a854a86619271"' }>
                                            <li class="link">
                                                <a href="components/CardsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TvShowsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TvShowsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-TvShowsModule-6112828f28539cbc72a523230978862a26ecf3b6ce63596e94837acfad7bbe5c8851f4d6b7fcdb13b43f81a4e597b7c53fb96cb20d852fb9ae2a854a86619271"' : 'data-target="#xs-pipes-links-module-TvShowsModule-6112828f28539cbc72a523230978862a26ecf3b6ce63596e94837acfad7bbe5c8851f4d6b7fcdb13b43f81a4e597b7c53fb96cb20d852fb9ae2a854a86619271"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TvShowsModule-6112828f28539cbc72a523230978862a26ecf3b6ce63596e94837acfad7bbe5c8851f4d6b7fcdb13b43f81a4e597b7c53fb96cb20d852fb9ae2a854a86619271"' :
                                            'id="xs-pipes-links-module-TvShowsModule-6112828f28539cbc72a523230978862a26ecf3b6ce63596e94837acfad7bbe5c8851f4d6b7fcdb13b43f81a4e597b7c53fb96cb20d852fb9ae2a854a86619271"' }>
                                            <li class="link">
                                                <a href="pipes/PaginatorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginatorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TvShowsRoutingModule.html" data-type="entity-link" >TvShowsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/MoviesComponent-1.html" data-type="entity-link" >MoviesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SeriesComponent-1.html" data-type="entity-link" >SeriesComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/AbstractDownloadFile.html" data-type="entity-link" >AbstractDownloadFile</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DigiviceService.html" data-type="entity-link" >DigiviceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ForumService.html" data-type="entity-link" >ForumService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link" >HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PokedexService.html" data-type="entity-link" >PokedexService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedService.html" data-type="entity-link" >SharedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TvShowsService.html" data-type="entity-link" >TvShowsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/BaseInterceptor.html" data-type="entity-link" >BaseInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PermissionGuard.html" data-type="entity-link" >PermissionGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalData.html" data-type="entity-link" >ModalData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalData-1.html" data-type="entity-link" >ModalData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});