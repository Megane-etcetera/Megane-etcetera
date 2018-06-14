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
            // トラック追加ボタンの名前を変える
            .find('button[class=temprate_add_track_button]')
            .removeClass('temprate_add_track_button')
            .addClass('add_track_button')
            .end()
            // ディスクナンバーを１ずつ増やす
            .find('input[name=d_number]')
            .attr('value', 1 + discNo)
            .end()
            // 表示追加
            .insertBefore('.disc_track_submit');
        trackNo = 1;
        discNo++;
    });

    $(document).on('click', '.add_track_button', function () {
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
            .insertBefore(this);
        trackNo++;
    });

        // トラック削除ボタン押下時イベント
        $('button[name=remove_track_button]').on('click',function(){
            $(this).parent('div').remove();
        });

        // ディスク削除ボタン押下時イベント
        $('button[name=remove_disc_button]').on('click',function(){
            $(this).parent('div').remove();
        });
});