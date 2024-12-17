export const directMixins = {
    data() {
        return {
            redirect: "",
            redirect_button: "",
            homepage: "/",
        };
    },
    mounted() {
        // 其它页面带redirect跳转过来时
        let search = new URLSearchParams(document.location.search);
            let redirect = search.get("redirect");
        if (redirect) {
            sessionStorage.setItem("redirect", redirect);
        }

        this.checkDirect();
    },
    methods: {
        checkDirect: function () {
            // 读取sessionStorage中的redirect
            const redirect = sessionStorage.getItem("redirect");
            if (redirect && redirect.startsWith("http")) {
                this.redirect = redirect;
                this.redirect_button = "即将跳转";
            } else {
                this.redirect = this.homepage;
                this.redirect_button = "返回首页";
            }

            let alternate = search.get("alternate");

            if (~~alternate) {
                this.isAlternate = true;
            }
        },
        skip: function () {
            if (this.redirect) {
                setTimeout(() => {
                    location.href = decodeURIComponent(this.redirect);
                }, 1200);
            }
        }
    },
};
