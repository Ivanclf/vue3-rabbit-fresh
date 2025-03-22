<template>
    <nav class="app-topnav">
        <div class="container">
            <ui>
                <template v-if="true">
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>name</a></li>
                    <li>
                        <el-popconfirm title="确认退出吗？" confirm-button-text="确认" cancel-button-text="退出">
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="javascript:;">我的订单</a></li>
                    <li><a href="javascript:;">会员中心</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;">登录</a></li>
                </template>
            </ui>
        </div>
    </nav>
</template>

<style scoped>
.app-topnav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
}
.container {
    display: flex;
    justify-content: flex-end; /* Align items to the right */
    align-items: center; /* Vertically center items */
    flex-direction: row;
    padding: 0 40px; /* Increase padding for a wider appearance */
    width: 50%; /* Restrict container to the right half */
    margin-left: auto; /* Push container to the right */
}
.container ui {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}
.container li {
    display: inline-block;
}
.container a {
    padding: 20px 20px; /* Expand padding to cover the top and bottom */
    text-decoration: none;
    color: #333;
    position: relative;
}
.container a:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background-color: #333; /* Match the color of the text */
}

/* Hover effect to expand highlight */
.container a:hover {
    background-color: rgba(0, 0, 0, 0.05); /* Add a subtle highlight */
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .container {
        justify-content: center; /* Center items on smaller screens */
        flex-wrap: wrap; /* Allow items to wrap */
        padding: 0 10px; /* Adjust padding for smaller screens */
        width: 100%; /* Use full width on smaller screens */
        margin-left: 0; /* Reset margin */
    }
    .container ui {
        width: 100%; /* Ensure the list takes full width */
        display: flex;
        justify-content: center; /* Center items */
        flex-wrap: wrap; /* Allow items to wrap */
    }
    .container li {
        flex: 1 1 auto; /* Allow items to grow and wrap properly */
        text-align: center; /* Center text */
    }
    .container a {
        padding: 10px; /* Adjust padding for smaller screens */
        font-size: 14px; /* Reduce font size */
    }
    .container a:not(:last-child)::after {
        display: none; /* Remove dividers on smaller screens */
    }
}
</style>