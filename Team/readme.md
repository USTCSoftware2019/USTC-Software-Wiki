## 文档说明

我们这一次选取 `http://2018.igem.org/Team:BNDS_CHINA` 这个网站作为我们的设计模板。
关于网站的布局可以使用参考上面网站的布局，内容的话我们暂时不填，也可以写一些测试的文字，
或者这个区域该写一些什么。

### 目录说明
+ 首先，`/Team`目录下面的是我们`/Template/html/header.html`里面的导航的内容，比如
`/Team/PARTS`对应的是相应的下面的代码：

```html
<li class="menu_item more parts_menu">PARTS<span></span>
    <div class="info_menu_item">
        <ul>
            <li><a href="https://2019.igem.org/Team:USTC-Software/Parts">Parts</a></li>
            <li><a href="https://2019.igem.org/Team:USTC-Software/Basic_Part">Basic Part</a></li>
            <li><a href="https://2019.igem.org/Team:USTC-Software/Composite_Part">Composite Part</a></li>
            <li><a href="https://2019.igem.org/Team:USTC-Software/Part_Collection">Part Collection</a></li>
        </ul>
    </div>
</li>
```

我们需要在`/Team/PARTS`里面创建对应的文件`Parts.html`，对应的是
`<a href="https://2019.igem.org/Team:USTC-Software/Parts"><\a>`.
同样需要创建剩下的三个页面`Basic_Part.html`,`Composite_Part`,`Part_Collection`。

### 框架使用
在每个页面中我们需要引入以下文件，不管是否用到，因为他们在`header.html`里面被引入了，在本地开发时，需要
引入这些css文件来保证上传到IGEM官网上页面显示的一致性。引入的内容包括：
```html
<link rel="stylesheet" type="text/css" href="https://2019.igem.org/Template:USTC-Software/css/default?action=raw&ctype=text/css" />
<link rel="stylesheet" type="text/css" href="https://2019.igem.org/Template:USTC-Software/css/bootstrap?action=raw&ctype=text/css" />
<script type="text/javascript" src="https://2019.igem.org/Template:USTC-Software/js/jquery?action=raw&ctype=text/javascript"></script>
<script type="text/javascript" src="https://2019.igem.org/Template:USTC-Software/js/popper?action=raw&ctype=text/javascript"></script>
<script type="text/javascript" src="https://2019.igem.org/Template:USTC-Software/js/bootstrap?action=raw&ctype=text/javascript"></script>
```

在每次创建一个新的页面的时候，可以将`/Team/template.html`里面的内容复制到新的页面，然后修改`body`里面的内
容就可以了。

### 其他

关于wiki的编写帮助可以在`/readme.md`中查看。

 