$(document).ready(function () {
    var discNo = 1;
    var trackNo = 1;

    $('.add_disc_button').on('click', function () {
        $('div#AddDisc')
            // コピー処理
            .clone(true)
            // 不要なID削除
            .removeAttr("id")
            // 非表示解除
            .removeClass("notdisp")
            // ディスクナンバーを１ずつ増やす
            .find('input[name=d_number]')
            .attr('value', 1 + discNo)
            .end()
            // 表示追加
            .insertBefore('.disc_track_submit');
        discNo++;
    });

    $('.add_track_button').on('click', function () {
        $('div#AddTrack')
            // コピー処理
            .clone(true)
            // 不要なID削除
            .removeAttr("id")
            // 非表示解除
            .removeClass("notdisp")
            // トラックナンバーを１ずつ増やす
            .find('input[name=t_number]')
            .attr('value', 1 + trackNo)
            .end()
            // 表示追加
            .insertBefore('.add_track_button');
        trackNo++;
    });

        // 削除ボタン押下時イベント
        $('button[name=remove_track_button]').on('click',function(){
            $(this).parent('div').remove();
        });
});