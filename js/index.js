window.addEventListener('load', function () {
    //轮播图部分js
    //动画移动函数
    function animate(obj, num) {
        clearInterval(obj.move)
        obj.move = setInterval(function () {
            var step = (num - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (num == obj.offsetLeft) {
                clearInterval(obj.move);
            }
            obj.style.left = step + obj.offsetLeft + 'px';
        }, 15)
    }
    //获取元素
    var top = document.querySelector(".content-banner-top");
    var lunbotu = document.querySelector(".lunbotu");
    var left = document.querySelector('.content-left');
    var right = document.querySelector('.content-right');
    var li = lunbotu.querySelectorAll("li");
    var lunbo = document.querySelector(".lunbo");
    // 悬停和移出
    top.addEventListener('mouseover', function () {
        left.style.display = 'block';
        right.style.display = 'block';
    })
    top.addEventListener('mouseout', function () {
        left.style.display = 'none';
        right.style.display = 'none';
    })
    // 复制元素 实现无缝轮播
    var first = li[0].cloneNode(true);
    lunbotu.appendChild(first);
    // 轮播图的参数 和 小圆点的参数
    var lunbonum = 0;
    var yuandian = 0;
    //节流阀
    var flag = true;
    //根据图片数量动图创建小圆点 与 点击圆圈移动
    for (var i = 0; i < li.length; i++) {
        //创建span
        var yuanquan = document.createElement("span");
        //根据li的数量动态创建添加
        lunbo.appendChild(yuanquan);
        //为第一个默认圆圈上色
        lunbo.children[0].className = "yuanquan";
        //为创建的span添加自定义索引号 方便接下来点击按钮轮播
        lunbo.children[i].setAttribute('index', i);
        //为选中的圆圈上色
        lunbo.children[i].addEventListener('click', function () {
            for (var i = 0; i < li.length; i++) {
                lunbo.children[i].className = "";
            }
            this.className = "yuanquan";
            //获取当前选择的按钮索引号
            var index = this.getAttribute('index');
            //将索引号同步给小圆点的参数
            yuandian = index;
            //将索引号同步给轮播图的参数 这样就不会出现圆圈和轮播图各走各的局面
            lunbonum = index;
            //根据索引号轮播图片
            animate(lunbotu, -1226 * index);
        })
    }
    //点击移动
    right.addEventListener('click', function () {
        if (lunbonum == li.length) {
            lunbotu.style.left = 0 + 'px';
            lunbonum = 0;
        }
        lunbonum++;
        yuandian++;
        animate(lunbotu, -1226 * lunbonum);
        //如果自增的时候 圆点的参数大于等于3 则自动变为0 图片也会转到第一张
        if (yuandian >= 3) {
            yuandian = 0;
        }
        // 执行圆点变化函数
        yuandianchange(yuandian);
    })
    left.addEventListener('click', function () {
        if (lunbonum == 0) {
            lunbotu.style.left = -3678 + 'px';
            lunbonum = li.length;
        }
        lunbonum--;
        yuandian--;
        animate(lunbotu, -1226 * lunbonum);
        if (yuandian <= -1) {
            yuandian = 2;
        }
        yuandianchange(yuandian);
    })
    //原点的变化函数
    function yuandianchange(yuandian) {
        for (var i = 0; i < li.length; i++) {
            lunbo.children[i].className = "";
        }
        lunbo.children[yuandian].className = "yuanquan";
    }

    //轮播图旁边的选项变化
    var bannerbiaoti = document.querySelector('.banner-biaoti');
    var biaotili = bannerbiaoti.querySelectorAll('li');
    var bannerneirong = document.querySelector('.banner-neirong');
    var neirongli = bannerneirong.querySelectorAll('li');
    var guanggao = document.querySelector('.guanggao');
    for (var i = 0; i < biaotili.length; i++) {
        biaotili[i].setAttribute('index', i);
        neirongli[i].setAttribute('index', i);
        biaotili[i].addEventListener('mouseenter', function () {
            for (var i = 0; i < biaotili.length; i++) {
                biaotili[i].style.backgroundColor = "";
                neirongli[i].style.display = "none";
            }
            this.style.backgroundColor = "#ff6700";
            var num = this.getAttribute('index');
            neirongli[num].style.display = "block";
            var neirongspan = neirongli[num].querySelectorAll('span');
            for (var i = 0; i < neirongspan.length; i++) {
                var neirongp = neirongspan[i].querySelector('p');
                neirongspan[i].addEventListener('mouseenter', function () {
                    console.log(this);
                    for (var i = 0; i < neirongspan.length; i++) {
                        neirongspan[i].children[1].style.color = "black";
                    }

                    this.children[1].style.color = "#ff6700"
                })
                neirongspan[i].addEventListener('mouseleave', function () {
                    for (var i = 0; i < neirongspan.length; i++) {
                        neirongspan[i].children[1].style.color = "black";
                    }
                })
            }
        });
        biaotili[i].addEventListener('mouseleave', function () {
            for (var i = 0; i < biaotili.length; i++) {
                biaotili[i].style.backgroundColor = "";
            }
        });
        guanggao.addEventListener('mouseleave', function () {
            for (var i = 0; i < biaotili.length; i++) {
                neirongli[i].style.display = "none";
            }
        });
    }
    //轮播图下面六个小栏目
    var bannerBottomLeft = document.querySelector('.banner-bottom-left')
    var fuwu = bannerBottomLeft.querySelectorAll('li');
    for (var i = 0; i < fuwu.length; i++) {
        fuwu[i].addEventListener('mouseenter', function () {
            for (var i = 0; i < fuwu.length; i++) {
                fuwu[i].children[0].style.color = '#b0b0b0'
            }
            this.children[0].style.color = '#fff'
        })
        fuwu[i].addEventListener('mouseleave', function () {
            for (var i = 0; i < fuwu.length; i++) {
                fuwu[i].children[0].style.color = '#b0b0b0'
            }
        })
    }
    //查看更多变色
    var bannerTitle = document.querySelector('.banner-content-title');
    bannerTitle.children[1].addEventListener('mouseenter', function () {
        this.style.color = '#ff6700';
        this.children[0].style.backgroundColor = '#ff6700';
    });
    bannerTitle.children[1].addEventListener('mouseleave', function () {
        this.style.color = 'black';
        this.children[0].style.backgroundColor = 'rgba(105, 101, 101, .6)';
    })
    //广告部分选中效果
    var bannerMain = document.querySelector('.banner-content-main');
    var mainLi = bannerMain.querySelectorAll('li');
    for (var i = 0; i < mainLi.length; i++) {
        mainLi[i].addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0px 0px 10px rgb(167, 166, 166)';
        });
        mainLi[i].addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0px)';
            this.style.boxShadow = '';
        })

    }
})