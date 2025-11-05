

const x = {
    a:function(){
        console.log(this);

        function test(){
            console.log(this);
        }

        test();
    }
}

x.a();