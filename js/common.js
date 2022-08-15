window.addEventListener('load', function () {
    //顶部选中悬停变色
    var topNavLeft = document.querySelector('.topnav-left');
    var topNavRight = document.querySelector('.topnav-right');
    var lefta = topNavLeft.querySelectorAll('a');
    var righta = topNavRight.querySelectorAll('a');
    var shopcart = topNavRight.querySelector('.shopcart');
    var cartbottom = topNavRight.querySelector('.shopcart_content');
    var navTag = document.querySelector('.mainnav-nav-biaoti');
    var navTagLi = navTag.querySelectorAll('li');
    var navneirongbox = document.querySelector('.mainnav-neirong');
    var navneirong = document.querySelectorAll('.mainnav-nav-neirong');
    var mainnav = document.querySelector('.mainnav-nav');
    //顶部左导航栏
    for (var i = 0; i < lefta.length; i++) {
        lefta[i].addEventListener('mouseover', function () {
            for (var i = 0; i < lefta.length; i++) {
                lefta[i].style.color = '#b0b0b0';
            }
            this.style.color = '#fff';
            this.addEventListener('mouseout', function () {
                this.style.color = '#b0b0b0';
            })
        })

    };
    //顶部右导航栏
    for (var i = 0; i < righta.length; i++) {
        righta[i].addEventListener('mouseover', function () {
            for (var i = 0; i < righta.length; i++) {
                righta[i].style.color = '#b0b0b0';
            }
            this.style.color = '#fff';
            this.addEventListener('mouseout', function () {
                this.style.color = '#b0b0b0';
            })
        })
    };
    // 顶部右购物车
    shopcart.addEventListener('mouseover', function () {
        cartbottom.style.display = 'block';
        shopcart.style.color = '#ff6700';
        shopcart.style.backgroundColor = '#fff';
    })
    shopcart.addEventListener('mouseout', function () {
        cartbottom.style.display = 'none';
        shopcart.style.color = '#b0b0b0';
        shopcart.style.backgroundColor = '#424242';
    });

    //主导航栏悬停
    //为标题添加索引号
    for (var i = 0; i < navTagLi.length; i++) {
        navTagLi[i].setAttribute('index', i);
        navTagLi[i].addEventListener('mouseover', function () {
            for (var i = 0; i < navTagLi.length; i++) {
                navTagLi[i].children[0].style.color = '#333';
            }
            this.children[0].style.color = '#ff6700';
            var num = this.getAttribute('index');
            for (var i = 0; i < navTagLi.length - 2; i++) {
                navneirong[i].style.display = 'none';
            }
            if (num < 7) {
                navneirong[num].style.display = 'block'
            }
            navneirongbox.style.display = 'block';
            mainnav.addEventListener('mouseleave', function () {
                for (var i = 0; i < navTagLi.length; i++) {
                    navTagLi[i].children[0].style.color = '#333';
                }
                if (num < 7) {
                    navneirong[num].style.display = 'none'
                }
                navneirongbox.style.display = 'none';
            })
        })
    }
    //尾部选中效果
    var footerService = document.querySelector(".footer-service");
    var serviceLi = footerService.querySelectorAll('li');
    for (var i = 0; i < serviceLi.length; i++) {
        serviceLi[i].addEventListener('mouseenter', function () {
            this.children[0].style.color = '#ff6700'
        })
        serviceLi[i].addEventListener('mouseleave', function () {
            this.children[0].style.color = '#616161'
        })
    }
    //links选中效果
    var footerLinks = document.querySelector('.footer-links');
    var linksDl = footerLinks.querySelectorAll('dl');
    for (var i = 1; i < linksDl.length; i++) {
        linksDl[i].addEventListener('mouseenter', function () {
            var linksDd = this.querySelectorAll('dd');
            for (var i = 0; i < linksDd.length; i++) {
                linksDd[i].addEventListener('mouseenter', function () {
                    this.children[0].style.color = '#ff6700'
                })
                linksDd[i].addEventListener('mouseleave', function () {
                    this.children[0].style.color = '#757575'
                })
            }
        })
    }
    //客服选中效果
    var contact = document.querySelector('.contact');
    contact.children[2].addEventListener('mouseenter', function () {
        this.style.color = '#fff';
        this.style.backgroundColor = '#ff6700'
    });
    contact.children[2].addEventListener('mouseleave', function () {
        this.style.color = '#ff6700';
        this.style.backgroundColor = '#fff'
    })

})