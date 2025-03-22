<template>
    <footer class="app-footer">
        <div class="contact">
            <div class="container">
                <dl>
                    <dt>客户服务</dt>
                    <dd><i class="iconfont icon-kefu"></i>在线客服</dd>
                    <dd><i class="iconfont icon-question"></i>问题反馈</dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><i class="iconfont icon-iconfontweixin"></i>公众号</dd>
                    <dd><i class="iconfont icon-weibo"></i>微博</dd>
                </dl>
                <dl>
                    <dt>服务热线</dt>
                    <dd class="hostline">400-0000-000<br><small>周一至周日</small></dd>
                </dl>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.app-footer {
    background-color: #f5f5f5;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0;
    position: bottom;
}

.app-footer .contact .container {
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.app-footer .contact .container dl {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
}

.app-footer .contact .container dt {
    margin-bottom: 10px;
    flex-basis: 100%;
}

.app-footer .contact .container dd {
    margin: 0 10px 10px 0;
    padding: 10px;
    width: 80px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;
}

.app-footer .contact .container dd:hover {
    background-color: #e0e0e0;
    color: #333;
}

.app-footer .contact .container dd.hostline {
    width: auto;
    height: auto;
    border: none;
    padding: 0;
    font-size: 16px;
    text-align: left;
    transition: none;
}

.app-footer .contact .container dd.hostline:hover {
    background-color: transparent;
    color: inherit;
}

.app-footer .contact .container dd i {
    font-size: 24px;
    margin-bottom: 5px;
}

@media (max-width: 768px) {
    .app-footer .contact .container dl {
        justify-content: center;
    }

    .app-footer .contact .container dd {
        width: 60px;
        height: 80px;
        font-size: 12px;
    }

    .app-footer .contact .container dd i {
        font-size: 20px;
    }
}

</style>