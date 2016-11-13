/** 1.0.0 **/
$.fn.stride = function (options) {

    $(this).each(function(){

        var stride = {

            $el: $(this),

            options: {
                lastScrollTop: 0,
                x: $(this).data('stride-x') || 50,
                y: $(this).data('stride-y') || 50,
                a: $(this).data('stride-acceleration') || 50
            },

            init: function (options) {
                $(window).scroll(_.throttle(this.onScroll.bind(this), 10));
                $.extend(this.options, options);
                this.onLoad();
            },

            onLoad: function () {
                var elementOffset = this.$el.offset().top;
                var backgroundX = this.options.backgroundX;
                var backgroundY = this.options.backgroundY;
                var backgroundAcceleration = this.options.backgroundAcceleration;

                this.$el.css('background-position', backgroundX + '% ' + (backgroundY + Math.max(document.body.scrollTop - elementOffset) / (backgroundAcceleration * .5)) + '%')
            },

            onScroll: function () {
                var backgroundX = this.options.backgroundX;
                var backgroundY = this.options.backgroundY;
                var backgroundAcceleration = this.options.backgroundAcceleration;

                if (this.$el.length) {
                    var height = this.$el.outerHeight();
                    var scrollTop = $(window).scrollTop();
                    var elementOffset = this.$el.offset().top;
                    var distance = (elementOffset - scrollTop);


                    if ((elementOffset < (scrollTop + $(window).height())) && -height < distance) {
                        this.$el.css('background-position', backgroundX + '% ' + (backgroundY + Math.max(document.body.scrollTop - elementOffset) / (backgroundAcceleration * .5)) + '%');
                    }
                }
            }

        };

        stride.init(options);
    });

};

$(function(){

    $('[data-stride]').stride({
        x: 50,
        y: 50,
        a:-20
    });

});