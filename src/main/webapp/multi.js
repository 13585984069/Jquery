$(function (){
    $("#add").click(function (){
        $("#first > option:selected").appendTo($("#second"));
    })

    $("#add_all").click(function (){
        let children = $("#first").children();
        // children.each(function (){
            $("#second").append(children);
        // })
        // $("#first > option").appendTo("#second");

    })

    $("#remove").click(function (){
        $("#second > option:selected").appendTo($("#first"));
    })

    $("#remove_all").click(function (){
        $("#second > option").appendTo("#first");
    })
    $("#first").dblclick(function (){
        $("#first > option:selected").appendTo($("#second"));
    })

    $("#second").dblclick(function (){
        $("#second > option:selected").appendTo($("#first"));
    })
})