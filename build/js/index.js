/**
 * Created by roboterra_rd on 2017/6/16.
 */
var h1='zhanghao234';
function sayHello(data){console.log('hello1111'+h1+data);}
var aa=11;var a=23242442244555556666;
sayHello('好人12');
console.log($('#example h1'));
$(function () {
    // console.log($('.headtext').html());
    // console.log($('.headtext'));
    // console.log($('#example'));
    // console.log($('#example'));
    // $('body').on('click','.headtext',function () {
    //     alert(123);
    // });
    // $('body').on('click','.example1',function () {
    //     alert(123);
    // });
    // $('#example h1').click(function () {
    //     console.log('第一次绑定');
    // });
});
$(window).load(function () {
    $('#example h1').click(function () {
        console.log('第一次绑定');
        alert('第一次绑定');
    });


    $('#example h1').click(function () {
        console.log('第二次的点击事件');
        alert('第二次的点击事件');
    });
});

$('#example h1').click(function () {
    console.log('第一次绑定');
});
$('#example h1').click(function () {
    console.log('第二次绑定');
    alert(123);
});
console.log(1231414);

