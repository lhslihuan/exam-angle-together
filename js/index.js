/**
 * @author lihuan
 * @date 2015/3/19
 */

$(function () {
    var $input = $(".j_auto_complete");
    $.widget("ui.autocomplete", $.ui.autocomplete, {
        _renderItem: function (ul, item) {
            var $ul = $(ul);
            var $li = $("<li>");

            switch (item.type) {
                case 'recentTitle':
                    $li.addClass("title")
                        .append($("<a>").text("您最近浏览过的项目"));
                    break;
                case 'projectTitle':
                    $li.addClass("title")
                        .append($("<a>").html("搜索<span class='red'>" + item.term + "</span>相关的创业项目"));
                    break;
                case 'personTitle':
                    $li.addClass("title")
                        .append($("<a>").html("搜索<span class='red'>" + item.term + "</span>相关的投资人"));
                    break;
                case 'seeMore':
                    $ul.addClass("see-more")
                        .append($("<a>").text("查看更多"));
                    break;
                case 'recent':
                case 'project':
                    var titleHtml = item.title.replace(item.term, "<span class='red'>" + item.term + "</span>");
                    $li.append("<a>").html(
                        "<img src='" + item.imgSrc + "'/>" +
                        "<span class='right'>" +
                        "<h4>" +
                        titleHtml + (item.isRapid ? "<i class='rapid'></i>" : '') +
                        "</h4>" +
                        "<p>" + item.intro + "</p>" +
                        "<span class='creator'>项目创建人：" + item.creator + "</span>" +
                        "<span class='date'>加入天使汇时间：" + item.date + "</span>" +
                        "</span>"
                    );
                    break;
                case 'person':
                    var nameHtml = item.name.replace(item.term, "<span class='red'>" + item.term + "</span>");
                    $li.append("<a>").html(
                        "<img src='" + item.imgSrc + "'/>" +
                        "<span class='right'>" +
                        "<h4>" +
                        nameHtml + " " + item.title +
                        "</h4>" +
                        "<p>" + item.intro + "</p>" +
                        "<p>" + "投资理念" + item.idea + "</p>" +
                        "</span>"
                    );
                    break;
            }

            return $li.appendTo($ul);
        }
    });

    $input.autocomplete({
        minLength: 0,
        appendTo: '.j_auto-complete-container',
        source: function (request, response) {
            if (!request.term) {
                response([
                    {
                        type: "recentTitle"
                    },
                    {
                        type: 'recent',
                        term: request.term,
                        isRapid: true,
                        title: "创见",
                        intro: "聚焦行业报道与创业公司挖掘的科技媒体",
                        creator: "王旭升",
                        date: "2012-12-20",
                        imgSrc: "http://img0.bdstatic.com/img/image/shouye/bizhi0318.jpg",
                        label: "创见",
                        value: "创见"
                    },
                    {
                        type: 'recent',
                        term: request.term,
                        isRapid: false,
                        title: "创业100",
                        intro: "聚焦行业报道与创业公司挖掘的科技媒体",
                        creator: "王旭升",
                        date: "2012-12-20",
                        imgSrc: "http://img0.bdstatic.com/img/image/shouye/bizhi0318.jpg",
                        label: "创业100",
                        value: "创业100"
                    },

                    {
                        type: 'recent',
                        term: request.term,
                        isRapid: true,
                        title: "创见",
                        intro: "聚焦行业报道与创业公司挖掘的科技媒体",
                        creator: "王旭升",
                        date: "2012-12-20",
                        imgSrc: "http://img0.bdstatic.com/img/image/shouye/bizhi0318.jpg",
                        label: "创见",
                        value: "创见"
                    },
                    {
                        type: 'recent',
                        term: request.term,
                        isRapid: false,
                        title: "创业100",
                        intro: "聚焦行业报道与创业公司挖掘的科技媒体",
                        creator: "王旭升",
                        date: "2012-12-20",
                        imgSrc: "http://img0.bdstatic.com/img/image/shouye/bizhi0318.jpg",
                        label: "创业100",
                        value: "创业100"
                    }
                ]);
            } else if (request.term === '创') {
                response([
                    {
                        type: "projectTitle",
                        term: request.term
                    },
                    {
                        type: 'project',
                        term: request.term,
                        isRapid: true,
                        title: "创见",
                        intro: "聚焦行业报道与创业公司挖掘的科技媒体",
                        creator: "王旭升",
                        date: "2012-12-20",
                        imgSrc: "http://img0.bdstatic.com/img/image/shouye/bizhi0318.jpg",
                        label: "王旭升",
                        value: "创见"
                    },
                    {
                        type: 'project',
                        term: request.term,
                        isRapid: false,
                        title: "创业100",
                        intro: "聚焦行业报道与创业公司挖掘的科技媒体",
                        creator: "王旭升",
                        date: "2012-12-20",
                        imgSrc: "http://img0.bdstatic.com/img/image/shouye/bizhi0318.jpg",
                        label: "王旭升",
                        value: "创业100"
                    },
                    {
                        type: "personTitle",
                        term: request.term
                    },
                    {
                        type: 'person',
                        term: request.term,
                        name: "创宁羽",
                        title: "天使投资人",
                        intro: "北京 • 盛邦投资公司首席执行官",
                        idea: "寻找靠谱项目和靠谱创业者",
                        imgSrc: "http://img0.bdstatic.com/img/image/shouye/bizhi0318.jpg",
                        label: "创宁羽",
                        value: "创宁羽"
                    },
                    {
                        type: 'person',
                        term: request.term,
                        name: "创飞",
                        title: "天使投资人",
                        intro: "聚焦行业报道与创业公司挖掘的科技媒体",
                        idea: "寻找靠谱项目和靠谱创业者",
                        imgSrc: "http://img0.bdstatic.com/img/image/shouye/bizhi0318.jpg",
                        label: "创飞",
                        value: "创飞"
                    }
                ]);
            } else {
                response([]);
            }
        }
    });

    $input.on("autocompleteselect autocompletefocus", function (event, ui) {
        var item = ui.item;
        if (item.type === 'recentTitle' || item.type === 'projectTitle' || item.type === 'personTitle') {
            return false;
        }
    });

    $input.focus(function () {
        $input.autocomplete("search", "");
    });
});
