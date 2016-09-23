$(document).ready(function() {
	oldHtml = $('#content').html();
});

$('#search_submit').click(function() {
	$('#search_input').change();
});

$('#search_input').change(function() {
	var searchKey = $(this).val();
	if (searchKey === '') return;
	$content = $('#content');
	//$('#search_submit').text('Loading');
	$.ajax({
		type: 'GET',
		url: '/feed.xml',
		dataType: 'xml',
		success: function(xml) {
			var items = new Array();
			$(xml).find('item').each(function() {
				var $item = $(this);
				var searchKeyLower = searchKey.toLowerCase();
				if ($item.children('title').text().toLowerCase().indexOf(searchKeyLower) != -1 ||
					$item.children('description').text().toLowerCase().indexOf(searchKeyLower) != -1) {
					items.push($item);
					return true;
				}
				$item.children('category').each(function() {
					if ($(this).text().toLowerCase() === searchKeyLower) {
						items.push($item);
						return false;
					}
				});
			});
			$content.html('');
			if (items.length == 0) {
				var $result = $('<div class="noresults_title"></div>');
				$result.text("No results found.");
				$content.append($result);
			}
			$.each(items, function() {
				displayArticle($content, $(this));
				console.log($(this).find('title').text());
			});
		},
		error: function() {
			var $result = $('<div class="noresults_title"></div>');
			$result.text("There was an error in the search. Please try again later.");
			$content.prepend($result);
		},
		complete: function() {
			//$('#search_submit').text('Search');
		}
	});
});

$('#search_reset').click(function() {
	if (oldHtml === '') return;
	$('#content').html(oldHtml);
	$('#search_input').val('');
});

function displayArticle($content, $item) {
	$article = $('<div class="article group"></div>');

	var title = $item.children('title').text();
	var url = $('.url').text();
	var link = $item.children('link').text();

	content = '<div class="article_title"><a href="' + link + '">' + title + '</a></div>';

	content += '<div class="article_meta">';
	content += '<div class="article_date">' + $item.children('pubDate').text() + '</div>';
	content += '<div class="article_categories"> in ';
	$item.children('category').each(function() {
		var category = $(this).text();
		content += '<a href="/categories#tag_'+category+'" class="tag_'+category+'">'+category+'</a>';
	});
	content += '</div>';
	content += '<div style="clear:both"></div>';
	content += '</div>';

	content += '<div class="article_text">' + $item.children('excerpt').text() + '<p></p></div>';
	content += '<div class="article_read_more"><a href="' + link + '">Read more...</a></div>';

	$article.html(content);
	$article.appendTo($content);
}