$(document).ready(function () {
    $('button','.add_track').on('click', function () {
        $('button','.add_track').before('<p>追加されました</p>');
    });
});