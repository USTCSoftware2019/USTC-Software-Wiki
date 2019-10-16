jQuery.extend(jQuery.easing, {
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    }
});

$(document).ready(function(){

    // set up and create progress bar in DOM
    $('.autoMenu2').eq(0).before('<div class="progressbar"></div>');
    var container = $('.progressbar');
    container.append('<div class="shim"></div>');
    var shim = $('.progressbar .shim');
    container.append('<div class="holder clearfix"></div>');
    var holder = $('.progressbar .holder');
    holder.append('<div class="bar"></div>');
    var bar = $('.progressbar .bar');
    bar.append('<div class="indicator"></div>');
    var indicator = $('.progressbar .indicator');
    holder.append('<div class="labels"></div>');
    var labels = $('.progressbar .labels');
    holder.append('<div class="labelsInner"></div>');
    var labelsInner = $('.progressbar .labelsInner');
    $('h3, h4, h2.ref').each(function(){
        var text = $(this).text();
        var end = text.indexOf(' ');
        if(end > text.indexOf(':') && text.indexOf(':') !== -1) end = text.indexOf(':');
        end = end === -1 ? text.length : end;
        var code = '<i class="mainTitle" data-label="'+ text.substring(0, end) +'"></i>';
        console.log($(this));
        if($(this).is('H4')){
            code = '<i class="innerTitle" data-label="&nbsp;"></i>';
        }else if($(this).is('H2')){
            code = '<i class="mainTitle" data-label="Ref"></i>'
        }
        labels.append(code);
    });

    var points = labels.find('i');
    points.css('width', 100/$('h3, h2.ref, h4').length+'%');

    // var points = labelsInner.find('i');
    // points.css('width', 100/$('h3, h2.ref, h4').length+'%');


    // var points = labels.find('i.innerTitle');
    // points.css('width', "1%");
    // $('h4').each(function () {
    //     var code = '<i data-label="' + " " + '"></i>';
    //     labels.append(code);
    // })
    //
    // points = labels.find('i');
    // points.css('width', 100/$('h4').length+'%');
    // match height of shim
    // stop layout jumping when progress bar fixes to / unfixes
    // from top of viewport
    function setShimHeight(){
        shim.css('height', container.height()+'px');
    }
    setShimHeight();
    $(window).resize(function(){ setShimHeight(); });

    // position indicator bar so it starts at first dot
    function setIndicatorX(){
        var point = points.eq(0);
        var xpos = point.offset().left + (point.width() / 2);
        indicator.css('left', xpos+'px');
    }
    setIndicatorX();
    $(window).resize(function(){ setIndicatorX(); });

    // fix/unfix progress bar to top of viewport
    function fixPosition(){
        if(container.is(':visible')) {
            if(!container.hasClass('fixed')) {
                if(holder.offset().top <= $(window).scrollTop()) {
                    container.addClass('fixed');
                }
            }
            else {
                if(shim.offset().top > $(window).scrollTop()) {
                    container.removeClass('fixed');
                }
            }
        }
    }
    fixPosition();
    $(window).scroll(function(){ fixPosition() });
    $(window).resize(function(){ fixPosition(); });

    // set trigger point
    // i.e. how far down viewport is the "eye line"
    var triggerPoint = 0;
    function setTriggerPoint(){
        triggerPoint = $(window).height() * .18;
    }
    setTriggerPoint();
    $(window).resize(function(){ setTriggerPoint(); });

    // update progress bar
    function setPosition(){
        if(container.is(':visible')) {
            var section = false;
            var sectionIndex = 0;
            var currentPosition = $(window).scrollTop() + triggerPoint;
            // dots
            // if before first section
            if(currentPosition < $('h3, h4, h2.ref').eq(0).offset().top) {
                points.removeClass('reading read');
                section = -1;
            }
            // if after first section
            else {
                $('h3, h4, h2.ref').each(function(){
                    var sectionTop = $(this).offset().top;
                    if(currentPosition >= sectionTop) {
                        points.removeClass('reading');
                        points.eq(sectionIndex).addClass('reading');
                        points.eq(sectionIndex).addClass('read');
                        section = sectionIndex;
                    }
                    else {
                        points.eq(sectionIndex).removeClass('read');
                    }
                    sectionIndex++;
                });
            }
            // bar
            var barWidth = 0;
            // if before start
            if(section == -1) {
                var point = points.eq(0);
                barWidth = point.offset().left + (point.width() / 2);
            }
            // if after end
            else if(section >= (points.length - 1)) {
                var point = points.eq((points.length - 1));
                barWidth = point.offset().left + (point.width() / 2);
            }
            // if within document
            else {
                var startPoint = points.eq(section);
                var startPointX = startPoint.offset().left;
                var startPointWidth = startPoint.width();
                var startSection = $('h3, h4, h2.ref').eq(section);
                var endSection = $('h3, h4, h2.ref').eq(section+1);
                var startSectionY = startSection.offset().top;
                var endSectionY = endSection.offset().top;
                var sectionLength = endSectionY - startSectionY;
                var scrollY = currentPosition - startSectionY;
                var sectionProgress = scrollY / sectionLength;
                barWidth = startPointX + (startPointWidth / 2) + (startPointWidth * sectionProgress);
            }
            barWidth -= indicator.offset().left;
            indicator.css('width', barWidth+'px');
        }
    }
    setPosition();
    $(window).scroll(function(){ setPosition(); });
    $(window).resize(function(){ setPosition(); });

    // on click, scroll to target section
    points.click(function(){
        var sectionIndex = points.index($(this));
        var targetY = $('h3, h4, h2.ref').eq(sectionIndex).offset().top - (triggerPoint * .92);
        $('html, body').animate({scrollTop:targetY}, 600, 'easeInOutCubic');
    });

});