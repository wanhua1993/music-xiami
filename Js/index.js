/**
 * Created by Orange on 2015/12/26.
 */

var imgDivs = document.getElementsByClassName('shadeimg');
for (var i = 0; i < imgDivs.length; i++) {
    imgDivs[i].onmouseover = function () {
        this.children[1].style.display='block';
        this.children[2].style.display='block';
        this.children[3].style.display='block';

    };
    imgDivs[i].onmouseout=function(){
        this.children[1].style.display='none';
        this.children[2].style.display='none';
        this.children[3].style.display='none';
    }
}


var objPs=document.getElementsByClassName('desc3');
for (var i = 0; i < objPs.length; i++) {
    objPs[i].onmouseover = function () {
        this.classList.add('active');
    };
    objPs[i].onmouseout=function(){
        this.classList.remove('active');
    }
}

/*大虾推荐*/
var oLi=document.getElementsByClassName('p-line');
for(var i=0;i<oLi.length;i++)
{
    oLi[i].index=i;
    oLi[i].onmouseover = function () {
        this.classList.add('active');
      for(var j=0;j<oLi.length;j++)
      {
          if(this.index!=j)
          {
              oLi[j].classList.remove('active');
          }
      }
    }
}

var searchText=document.getElementById('search-text');
searchText.onfocus=function(){
    if(this.value=='音乐搜索,找人...')
    {
        this.value='';
        this.style.color='black';
    }
};
searchText.onblur=function(){
    if(this.value=='')
    {
        this.value='音乐搜索,找人...';
        this.style.color='#C3C3C3';
    }
}

/*底部选项卡*/
var selectUi=document.getElementById('selectMenu');
var selectLi=selectUi.getElementsByTagName('li');
var contents=document.getElementsByClassName('bottom-ul');
for(var i=0;i<selectLi.length;i++)
{
    if(selectLi[i].classList.contains('last-btn'))
    {
        continue;
    }
    selectLi[i].index=i;
    selectLi[i].onclick=function(){
        this.className='active';
        contents[this.index].className='bottom-ul clearfix active';
        for(var j=0;j<selectLi.length;j++)
        {
            if(selectLi[j].classList.contains('last-btn')) {
                continue;
            }
            if(this.index!=j)
            {
                selectLi[j].className='';
                contents[j].className='bottom-ul clearfix';
            }
        }
    }
}