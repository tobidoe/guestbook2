<html>
    <head>
        <script src="https://unpkg.com/vue"></script>
    </head>
    <body>
        <div id="app">
            <hello-world/>
        </div>

        <p> Hier auch: <hello-world/></p>
        <script>
            Vue.component('hello-world', {
                template: '<div>Hello World from Vue-Component</div>'
            });
            new Vue({el: "#app"});
        </script>
    </body>
</html>
