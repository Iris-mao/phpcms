# phpcms
phpcms快速建站实例
* 教程：http://down.chinaz.com/try/201208/2128_1.htm  上面有很详细的建站教程（跟PHPCMS V9用户手册上的内容基本差不多，手册也可以在网站上下载），按照步骤首先将phpcms搭建在本地
* 官网网址：http://www.phpcms.cn/
* 此例制作的网站：http://www.dejiemo.com
* 代码目录结构：
  自己写的模板一般拷贝一份phpcms/templates/default默认模板进行自己模板的对应修改，所有的页面展示内容都放在content文件夹里面，模板里面的config.php文件是对模板的一些基本信息进行配置
  一般情况下header.html是头部文件，index.html是首页，list.html是文章列表页，show.html是文章详情页
* 用的比较多的变量
  $catid 栏目id
  $page  分页信息
  $title 文章标题
  $content 文章内容
  $r[id] 文章对应的id
* 套站的概念：先将html页面模板写好，然后用
  ```
  {pc:content moreinfo="1" action="lists" catid="11" num="3" page="$page" order="id DESC"}
  {loop $data $r}
  {/loop}
  {/pc}
  ```
  将对应栏目的内容套到对应的模板中