
badges.twitter =

  embed: (data) ->

    baseUrl = 'https://twitter.com/intent/tweet?'

    data.original_referer = 'http://github.com/'
    data.tw_p = 'tweetbutton'

    link = "#{baseUrl}#{$.param data}"

    code = """
      <a href="#{link}" target="_blank">
        <img src="http://jpillora.com/github-twitter-button/img/tweet.png"
             alt="tweet button" title="#{data.text}"></img>
      </a>
    """

    # text = "![tweet!](http://jpillora.com/github-twitter-button/img/tweet.png \"#{data.text}\")"
    # badge = "[#{text}](#{link}){:target=\"_blank\"}"

    return code

  preview: (data, code) ->
    return code