(function() {
  var badges;

  badges = {};

  $(function() {
    return $("#GA").on('keyup', '#username,#project', function() {
      var proj, user;
      user = $('#GA #username').val();
      proj = $('#GA #project').val();
      return $('#GA #page').val("https://github.com/" + user + "/" + proj);
    });
  });

  badges.GA = {
    embed: function(data) {
      var baseUrl, img, query;
      baseUrl = 'https://www.google-analytics.com/collect?';
      query = {
        v: "1",
        a: "257770996",
        t: "pageview",
        dl: data.page,
        ul: "en-us",
        de: "UTF-8",
        cid: "978224512.1377738459",
        tid: data.tid,
        z: "887657232"
      };
      img = "![ga tracker](" + baseUrl + ($.param(query)) + " \"ga tracker\")";
      return img;
    }
  };

  badges.nodeico = {
    embed: function(data) {
      var baseUrl;
      baseUrl = 'https://nodei.co/npm/';
      data.link = "" + baseUrl + data["package"] + "/";
      data.img = "" + baseUrl + data["package"] + ".png";
      return "[![NPM](" + data.img + ")](" + data.link + ")";
    },
    preview: function(data, code) {
      return "<a href=\"" + data.link + "\"><img src=\"" + data.img + "\"></img></a>";
    }
  };

  badges.testling = {
    embed: function(data) {
      var baseUrl;
      baseUrl = 'https://ci.testling.com';
      data.link = "" + baseUrl + "/" + data.username + "/" + data.project;
      data.img = "" + data.link + ".png";
      return "[![browser support](" + data.img + ")](" + data.link + ")";
    },
    preview: function(data, code) {
      return "<a href=\"" + data.link + "\"><img src=\"" + data.img + "\"></img></a>";
    }
  };

  badges.travis = {
    embed: function(data) {
      var baseUrl;
      baseUrl = 'https://travis-ci.org';
      data.link = "" + baseUrl + "/" + data.username + "/" + data.project;
      data.img = "" + data.link + ".png";
      return "[![Build Status](" + data.img + ")](" + data.link + ")";
    },
    preview: function(data, code) {
      return "<a href=\"" + data.link + "\"><img src=\"" + data.img + "\"></img></a>";
    }
  };

  badges.twitter = {
    embed: function(data) {
      var baseUrl, code, link;
      baseUrl = 'https://twitter.com/intent/tweet?';
      data.original_referer = 'http://github.com/';
      data.tw_p = 'tweetbutton';
      link = "" + baseUrl + ($.param(data));
      code = "<a href=\"" + link + "\" target=\"_blank\">\n  <img src=\"http://jpillora.com/github-twitter-button/img/tweet.png\"\n       alt=\"tweet button\" title=\"" + data.text + "\"></img>\n</a>";
      return code;
    },
    preview: function(data, code) {
      return code;
    }
  };

  $(function() {
    var update;
    update = function(elem) {
      var api, code, container, data, html, outputCont, previewCont;
      container = elem.closest('.badge-container');
      api = container.data('api');
      data = {};
      container.find('input').each(function() {
        return data[$(this).attr('id')] = $(this).val();
      });
      code = api.embed(data);
      outputCont = container.find('.output');
      outputCont.toggle(!!code);
      outputCont.find('textarea').val(code);
      html = typeof api.preview === "function" ? api.preview(data, code) : void 0;
      previewCont = container.find('.preview');
      previewCont.find('.preview-box').html(html);
      return previewCont.toggle(!!html);
    };
    $(".badge-container").each(function() {
      var api, id;
      id = $(this).attr('id');
      console.log('init', id);
      api = badges[id];
      if (!api) {
        return;
      }
      $(this).data('api', api);
      return update($(this));
    });
    $(document).on('keyup', 'input', function() {
      return update($(this));
    });
    $(document).on('click', '.title', function() {
      return $(this).closest('.badge-container').toggleClass('active');
    });
    $(".output textarea").attr("readonly", "readonly");
    return $(document).on('click', '.output textarea', function() {
      return this.select();
    });
  });

}).call(this);
