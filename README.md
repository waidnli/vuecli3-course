# vue-cli

### Vue ui / Create vue project...
```
vue ui
```

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Git
* [简易](http://www.bootcss.com/p/git-guide/)
* [详细](https://www.liaoxuefeng.com/wiki/896043488029600)

### SSH
```
ssh-keygen -t rsa -C "youremail@example.cpm"
```

### git config
```
$ git config --global user.name "Your Name"
$ git config --global user.email "Your Email@gmail.com"
```

**注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。**

### git init
* 通过git init命令把这个目录变成Git可以管理的仓库
* .git文件

### git add / git commit
* 使用命令git add <file>，注意，可反复多次使用，添加多个文件；

* 使用命令git commit -m <message>，完成。

```
$ git add file1.txt
$ git add file2.txt file3.txt
$ git commit -m "add 3 files."
```

### git status
* 随时掌握工作区的状态

### git diff
* 可以查看修改内容

```
$ git diff readme.txt
```

### git remote
* 关联github仓库
```
$ git remote add origin git@github.com:path/name.git
```

### git push
* -u 指定一个默认主机
* -u后可以直接push
```
$ git push -u origin master 
```

### git reset
* 版本回退
* HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id
* 穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
* 要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。

```
$ git reset --hard HEAD^
```

### git checkout -- 
* git checkout -- file可以丢弃工作区的修改：
```
$ git checkout -- readme.txt
```
** 没有--，就变成了“切换到另一个分支”的命令**

### git clone
* [克隆](https://www.liaoxuefeng.com/wiki/896043488029600/898732792973664)
```
// 执行如下命令以创建一个本地仓库的克隆版本：
git clone /path/to/repository 
// 如果是远端服务器上的仓库，你的命令会是这个样子：
git clone username@host:/path/to/repository
```

### git checkout 
* [分支管理](https://www.liaoxuefeng.com/wiki/896043488029600/896954848507552)
```
// 创建一个叫做“feature_x”的分支，并切换过去：
git checkout -b feature_x
// 切换回主分支：
git checkout master
// 再把新建的分支删掉：
git branch -d feature_x
// 除非你将分支推送到远端仓库，不然该分支就是 不为他人所见的
git push origin <branch>
```

### 更新与合并 pull/merge
* 更新你的本地仓库至最新改动

    `git pull`

* 以在你的工作目录中 获取（fetch） 并 合并（merge） 远端的改动。要合并其他分支到你的当前分支（例如 master）

    `git merge <branch>`
