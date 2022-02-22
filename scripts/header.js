
imageSource = {name:'logo', urlpath:''};
navigation=[{name:'Home', nav:'index.html',myId:'link1'},
    {name:'About Me', nav:'pages/about.html', myId:'link2'},
    {name:'Contact Us', nav:'pages/contact.html',myId:'link3'}]


imageSource.urlpath = './assets/logo.PNG';

document.getElementById('logo').alt = imageSource.name;
document.getElementById('logo').src = imageSource.urlpath;
console.log(navigation.length)
for(var linkIndex = 0; linkIndex < navigation.length;linkIndex++){
console.log(navigation[linkIndex])
document.getElementById(navigation[linkIndex].myId).innerHTML = navigation[linkIndex].name;
document.getElementById(navigation[linkIndex].myId).href = navigation[linkIndex].nav;
}

