# IGEM WIKI编写指南

## Wiki Freeze

##### 截止日期：美国东部时间10月21日晚上11:59

## Wiki Rules

 1.团队无法编辑，禁用，隐藏或更改iGEM登录栏

 2.团队必须使用其维基上的标准页面才能获得奖励和奖牌

 3.团队不能在他们的维基上使用Adobe Flash

 4.团队必须在2019.igem.org上托管*所有内容*

 5.球队不能在他们的维基上使用iframe

 6.团队不能在他们的维基上使用任何受版权保护的材料，包括图像

 7.在Wiki Freeze截止日期之后，团队不能改变内容

## Wiki Workplace

团队wiki的命名区间是**2019.igem.org/Team:Example**。

团队wiki的模板区间是**2019.igem.org/Template:USTC-Software**。

## Editing Help

### 上传文件

访问[2019.igem.org/Special](https://2019.igem.org/Special:Upload):[Upload](https://2019.igem.org/Special:Upload)可以上传文件到服务器，需要注意的是，文件的命名。

文件的命名方式`T--Example--Filename.ext`。比如USTC-Software上传了一张bg.svg图片。这个时候命名为`T--USTC-Software--bg.svg`。

### 创建页面

如果用户想要创建about页面，那么只需要输入网址：`2019.igem.org/Team:Example/about`。然后点击上面的wiki tools 链接，接着点击edit就可以书写内容了。

### 使用模板

想要创建header模板，只要输入网址`2019.igem.org/Template:Example/header`。使用的话直接 `{{ Example/header }}`，注意使用模板时不要在html标签内使用。

## MathJax

使用mathjax之前，需要导入script文件：`<script src="https://2019.igem.org/common/MathJax-2.5-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"> `.

### 如何导入CSS和Script

首先将自己写好的css和script文件上传到团队的templates里面。然后再在html标签中导入文件：

```html
<html>
<link rel="stylesheet" type="text/css" 
href="http://2015.igem.org/Template:YourTeamName/CSS?action=raw&ctype=text/css" />

<h2>Our Project</h2>
<p>Here is the beginning of the page about our project.</p>

<p>Here is the end of the page about our project.</p>

<script type="text/javascript" src="http://2015.igem.org/Template:YourTeamName/Javascript?
action=raw&ctype=text/javascript"></script>
</html>
```

## Jquery

Jquery 1.11.1已经在igem官方网站中全局引入。但是我们为了使用bootstrap4的最新特性，又重新引入了Jquery 3.x。引入的方式可以看Team文件夹下面的html文件。

### 如何上传以及引入图片及视频

首先访问我们的队伍的Wiki空间**https://2019.igem.org/Team:USTC-Software/Team**，这个时候登陆自己的账户，显示已经登陆进去后，点击**wiki tools**，然后再点击**Upload files**，接着选择自己要上传的文件，注意文件的命名方式（见*上传文件*这一节）。

上传好之后，可以点击**list of files**，它的网址是https://2019.igem.org/Special:ListFiles。在Username里面输入自己的用户名，就可以只查看自己上传的文件了。随便点击一张进去，再次点击图片本身，就可以在浏览器的地址栏出现网址。会出现类似的网址：https://2019.igem.org/wiki/images/e/ee/T--USTC-Software--WEB.svg。图片网址唯一不同的是**e/ee**这个文件夹。

### 关于Wiki的参考文献

参考文献写在每个页面的尾部，不要单独创建一个文件。



