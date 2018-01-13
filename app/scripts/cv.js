$(function(){
    var rank = $('.rank_level p');
    var parent = rank.parent();
    for (var i = 0; i < parent.length; i++) {
        var element = parent[i];
        element.style.width = rank[i].innerHTML;
    }

});