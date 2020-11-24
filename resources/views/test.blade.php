<html>
    <head>
        <script src="https://unpkg.com/vue"></script>
    </head>
    <body>
        <div id="app">
            <hello-world></hello-world>
            <p> Hier asuch: <hello-world></hello-world></p>
        </div>

        <script>
            Vue.component('hello-world', {
                template: '<div>Hello World Yeah</div>'
            });
            new Vue({el: "#app"});
        </script>
    </body>
</html>
