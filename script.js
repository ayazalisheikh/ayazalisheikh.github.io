const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const translations={
  en:{
    title:'Ayaz Ali Shaikh | Writer & Researcher',
    brand:'Ayaz Ali Shaikh',
    nav:['About','Books','Articles','Research','Contact'],
    eyebrow:'PERSONAL ACADEMIC & WRITING WEBSITE',
    h1:'A journey through<br><em>ideas, history</em> and social change',
    lead:'I am Ayaz Ali Shaikh. My writing and research explore history, politics, Marxist thought, class relations and the contradictions of modern society.',
    actions:['Explore books','About me'],
    introTitle:'Keeping thought alive<br>through questions',
    introP1:'This website brings together my books, research, essays and intellectual work. It approaches historical events not merely as narratives, but through the political, economic and class forces that shape them.',
    introP2:'My interests include modern South Asian history, Pakistan’s federal structure, nationalism, Marxist political economy, digital capitalism and the social consequences of artificial intelligence.',
    linkResearch:'Explore research areas',
    booksTitle:'Books & research projects',
    booksSub:'Critical inquiries into history, politics and society.',
    book1:'The Foundation of Pakistan: Two-Nation Theory or Provincial Autonomy?',
    book1p:'An inquiry into the creation of Pakistan through constitutional disagreements, the federal question and provincial autonomy.',
    book2:'Why Is It Necessary to Study Marxism in the Age of Modern AI?',
    book2p:'A Marxist examination of artificial intelligence, labour, surplus value, monopoly and digital capitalism.',
    book3:'Pakistan: A Nation or a Federation?',
    book3p:'A forthcoming research project on nationalism, federalism, provincial autonomy and the structure of the state.',
    tags:['HISTORY / POLITICS','MARXISM / TECHNOLOGY','RESEARCH IN PROGRESS'],
    articlesTitle:'Selected themes',
    articlesSub:'Themes from my essays and analysis. Publication links and full texts can be added as they become available.',
    articleTitles:['Artificial Intelligence, Capitalism and Left Politics','Jinnah, Congress and the Constitutional Question of Pakistan','Digital Capitalism and the Future of Labour'],
    articleDescs:['Rather than rejecting AI as such, the key questions concern its ownership, use and social purpose.','Federal arrangements, the distribution of power and political contradictions in the history of Partition.','Data, platform economies, automation and class relations in the digital era.'],
    note:'Note: These are thematic introductions; links and publication details can be added later.',
    researchTitle:'Core research areas',
    researchSub:'Through the lens of historical materialism and critical social analysis.',
    researchNames:['Pakistan’s history and federalism','Marxism and political economy','AI and digital capitalism','Modern South Asian politics'],
    researchDescs:['Partition, constitutional crises, provincial autonomy and the national question.','Class contradictions, capital accumulation and social transformation.','Automation, data, labour, monopoly and the social ownership of technology.','Nationalism, colonial legacies and relations of state power.'],
    quote:'“To understand society, we must look beyond appearances to its underlying contradictions and material conditions.”',
    quoteBy:'A guiding perspective',
    contactTitle:'Let’s continue<br>the conversation.',
    contactText:'For correspondence about research, books, essays or academic collaboration.',
    location:'Sindh, Pakistan',
    github:'GitHub profile',
    rights:'All rights reserved',
    top:'Back to top'
  }
};
let english=false;
document.getElementById('langSwitch').addEventListener('click',()=>{
  english=!english;
  document.getElementById('langSwitch').textContent=english?'سنڌي':'EN';
  document.body.classList.toggle('en',english);
  document.documentElement.lang=english?'en':'sd';
  document.documentElement.dir=english?'ltr':'rtl';
  const t=english?translations.en:null;
  if(t){
    document.title=t.title;
    document.querySelector('.brand').innerHTML=t.brand+'<span>.</span>';
    document.querySelectorAll('#mainNav>a').forEach((a,i)=>a.textContent=t.nav[i]);
    document.querySelector('.eyebrow').textContent=t.eyebrow;
    document.querySelector('.hero h1').innerHTML=t.h1;
    document.querySelector('.hero-lead').textContent=t.lead;
    document.querySelectorAll('.hero-actions a')[0].textContent=t.actions[0];
    document.querySelectorAll('.hero-actions a')[1].textContent=t.actions[1];
    document.querySelector('.intro h2').innerHTML=t.introTitle;
    document.querySelectorAll('.intro-copy p')[0].textContent=t.introP1;
    document.querySelectorAll('.intro-copy p')[1].textContent=t.introP2;
    document.querySelector('.intro-copy .text-link').innerHTML=t.linkResearch+' <span>←</span>';
    document.querySelector('#books .section-heading h2').textContent=t.booksTitle;
    document.querySelector('#books .section-heading p').textContent=t.booksSub;
    const infos=document.querySelectorAll('.book-info');
    [t.book1,t.book2,t.book3].forEach((v,i)=>infos[i].querySelector('h3').textContent=v);
    [t.book1p,t.book2p,t.book3p].forEach((v,i)=>infos[i].querySelector('p').textContent=v);
    infos.forEach((el,i)=>el.querySelector('.tag').textContent=t.tags[i]);
    document.querySelector('#articles .section-heading h2').textContent=t.articlesTitle;
    document.querySelector('#articles .section-heading p').textContent=t.articlesSub;
    document.querySelectorAll('.article-list h3').forEach((el,i)=>el.textContent=t.articleTitles[i]);
    document.querySelectorAll('.article-list p').forEach((el,i)=>el.textContent=t.articleDescs[i]);
    document.querySelector('.note').textContent=t.note;
    document.querySelector('#research .section-heading h2').textContent=t.researchTitle;
    document.querySelector('#research .section-heading p').textContent=t.researchSub;
    document.querySelectorAll('.research-grid h3').forEach((el,i)=>el.textContent=t.researchNames[i]);
    document.querySelectorAll('.research-grid p').forEach((el,i)=>el.textContent=t.researchDescs[i]);
    document.querySelector('.quote-section p').textContent=t.quote;
    document.querySelector('.quote-section span').textContent=t.quoteBy;
    document.querySelector('.contact-inner h2').innerHTML=t.contactTitle;
    document.querySelector('.contact-inner>div:first-child p').textContent=t.contactText;
    document.querySelector('.contact-details>p').textContent=t.location;
    document.querySelector('.contact-details .text-link').innerHTML=t.github+' <span>↗</span>';
    document.querySelector('footer>span').innerHTML='© <span id="year">'+new Date().getFullYear()+'</span> Ayaz Ali Shaikh — '+t.rights;
    document.querySelector('footer>a:last-child').textContent=t.top+' ↑';
  }else{location.reload();}
});
