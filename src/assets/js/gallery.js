export default function gallery(){
    var 
        $gallery = $(".slider-one-imgs"),
        $galleryPictures = $(".slider-one-imgs"),
        $galleryPicture = $(".slider-one-img"),
        $galleryPicture = $(".slider-one-background-img"),

        lastPos = {x:0},
        galleryPos = {x:0},
        galleryBackgroundPos = {x:0},
        currentImage = -1,
        imageWidth = 236,
        imageSpacing = 49,
        imageTotalWidth=imageWidth+imageSpacing,
        speedLog=[],
        speedLogLimit=5,
        dragging=false,
        lastDragPos={x:0},
        dragPos={x:0},
        totalDist=0,
        distThreshold=10,
        distLog=[],
        distLogLimit=10,
        momentumTween=null
    ;

    $galleryPicture.each(function(i) {
        var cur = $(this);
        cur.click(function(){
            if(Math.abs(totalDist)<distThreshold)
                setGalleryPos(i);
        });

        $(".pag-1 li").eq(i).click(function(){
            setGalleryPos(i);
        })
    });

    function setGalleryPos(v,anim){
        if(typeof anim=="undefined") anim=true;
        stopMomentum();
        TweenMax.to(galleryPos,anim?0.8:0,{
            x:-v*imageTotalWidth,
            ease:Quint.easeOut,
            onUpdate:updateGalleryPos,
            onComplete:updateGalleryPos
        });
    }

    function updateGalleryPos(){
        TweenMax.set($galleryPictures,{
            x:galleryPos.x+(0),
            force3D:false,
            lazy:true
        });

        var speed=lastPos.x-galleryPos.x;
        lastPos.x=galleryPos.x;

        var _currentImage=Math.round(-galleryPos.x/imageTotalWidth);
        if(_currentImage!=currentImage){
            currentImage=_currentImage;

            // Descriptions for Screens
            $(".first-selected").removeClass('first-selected');
            $(".first-display-descp li").eq(currentImage).addClass('first-selected');

            // Pagination
            $(".pag-1-selected").removeClass('pag-1-selected');
            $(".pag-1 li").eq(currentImage).addClass('pag-1-selected');
        }
    }

    $gallery.mousedown(function(event){
        event.preventDefault();
        dragging=true;
        dragPos.x=event.pageX;
        lastDragPos.x=dragPos.x;
        totalDist=0;
        distLog=[];

        stopMomentum();

        updateGalleryPosLoop();
    });

    $(document).mousemove(function(event){
        if(dragging){
            dragPos.x=event.pageX;
        }
    });

    function updateGalleryPosLoop(){
        if(dragging){
            updateGalleryPos();
            var dist=dragPos.x-lastDragPos.x;
            lastDragPos.x=dragPos.x;
            totalDist+=dist;
            distLog.push(dist);
            while(distLog.length>distLogLimit){
                distLog.splice(0,1);
            };
            galleryPos.x+=dist;
            requestAnimationFrame(updateGalleryPosLoop)
        }
    }

    $(document).mouseup(function(event){
        if(dragging){
            dragging=false;
            var releaseSpeed=0;
            for (var i = 0; i < distLog.length; i++) {
                releaseSpeed+=distLog[i];
            };

            releaseSpeed/=distLog.length;

            var targetX=galleryPos.x+(releaseSpeed*20);
            targetX=Math.round(targetX/imageTotalWidth)*imageTotalWidth;
            var targetImage=-targetX/imageTotalWidth;
            var excess=0;
            if(targetImage<0){
                excess=targetImage;
                targetImage=0;
            }else if(targetImage>=$galleryPicture.length){
                excess=targetImage-($galleryPicture.length-1);
                targetImage=$galleryPicture.length-1;
            }
            if(excess!=0){
                targetX=-targetImage*imageTotalWidth;
            }
            momentumTween=TweenMax.to(galleryPos,1-(Math.abs(excess)/20),{
                x:targetX,
                ease:Quint.easeOut,
                onUpdate:updateGalleryPos,
                onComplete:updateGalleryPos
            });

            if(Math.abs(totalDist)>=distThreshold){
                event.preventDefault();
                event.stopPropagation();
            }
        }
    });

    function stopMomentum(){
        if(momentumTween!=null){
            momentumTween.kill();
            momentumTween=null;
            updateGalleryPos();
        }
    }

    setGalleryPos(0,false);


    // Second Mobile Display

    var 
        $galleryTwo = $(".slider-two-imgs"),
        $galleryTwoPictures = $(".slider-two-imgs"),
        $galleryTwoPicture = $(".slider-two-img"),
        $galleryTwoPicture = $(".slider-two-background-img"),
        lastTwoPos = {x:0},
        galleryTwoPos = {x:0},
        lastTwoDragPos={x:0},
        dragTwoPos={x:0},
        totalTwoDist=0,
        distTwoThreshold=10,
        distTwoLog=[],
        distTwoLogLimit=10,
        currentTwoImage = -1,
        imageTwoWidth = 239,
        imageTwoSpacing = 49,
        imageTwoTotalWidth=imageTwoWidth+imageTwoSpacing,
        speedTwoLog=[],
        speedTwoLogLimit=5,
        draggingTwo=false,
        momentumTwoTween=null
    ;

    $galleryTwoPicture.each(function(i) {
        var cur = $(this);
        cur.click(function(){
            if(Math.abs(totalTwoDist)<distTwoThreshold)
                setGalleryTwoPos(i);
        });

        $(".pag-2 li").eq(i).click(function(){
            setGalleryTwoPos(i);
        })
    });

    function setGalleryTwoPos(v,anim){
        if(typeof anim=="undefined") anim=true;
        stopTwoMomentum();
        TweenMax.to(galleryTwoPos,anim?0.8:0,{
            x:-v*imageTwoTotalWidth,
            ease:Quint.easeOut,
            onUpdate:updateGalleryTwoPos,
            onComplete:updateGalleryTwoPos
        });
    }

    function updateGalleryTwoPos(){
        TweenMax.set($galleryTwoPictures,{
            x:galleryTwoPos.x+(0),
            force3D:false,
            lazy:true
        });

        var speed=lastTwoPos.x-galleryTwoPos.x;
        lastTwoPos.x=galleryTwoPos.x;

        var _currentTwoImage=Math.round(-galleryTwoPos.x/imageTwoTotalWidth);
        if(_currentTwoImage!=currentTwoImage){
            currentTwoImage=_currentTwoImage;

            // Descriptions for Screens
            $(".second-selected").removeClass('second-selected');
            $(".second-display-descp li").eq(currentTwoImage).addClass('second-selected');

            // Pagination
            $(".pag-2-selected").removeClass('pag-2-selected');
            $(".pag-2 li").eq(currentTwoImage).addClass('pag-2-selected');
        }
    }

    $galleryTwo.mousedown(function(event){
        event.preventDefault();
        draggingTwo=true;
        dragTwoPos.x=event.pageX;
        lastTwoDragPos.x=dragTwoPos.x;
        totalTwoDist=0;
        distTwoLog=[];

        stopTwoMomentum();

        updateGalleryTwoPosLoop();
    });

    $(document).mousemove(function(event){
        if(draggingTwo){
            dragTwoPos.x=event.pageX;
        }
    });

    function updateGalleryTwoPosLoop(){
        if(draggingTwo){
            updateGalleryTwoPos();
            var distTwo=dragTwoPos.x-lastTwoDragPos.x;
            lastTwoDragPos.x=dragTwoPos.x;
            totalTwoDist+=distTwo;
            distTwoLog.push(distTwo);
            while(distTwoLog.length>distTwoLogLimit){
                distTwoLog.splice(0,1);
            };
            galleryTwoPos.x+=distTwo;
            requestAnimationFrame(updateGalleryTwoPosLoop)
        }
    }

    $(document).mouseup(function(event){
        if(draggingTwo){
            draggingTwo=false;
            var releaseTwoSpeed=0;
            for (var i = 0; i < distTwoLog.length; i++) {
                releaseTwoSpeed+=distTwoLog[i];
            };

            releaseTwoSpeed/=distTwoLog.length;

            var targetX=galleryTwoPos.x+(releaseTwoSpeed*20);
            targetX=Math.round(targetX/imageTwoTotalWidth)*imageTwoTotalWidth;
            var targetTwoImage=-targetX/imageTwoTotalWidth;
            var excessTwo=0;
            if(targetTwoImage<0){
                excessTwo=targetTwoImage;
                targetTwoImage=0;
            }else if(targetTwoImage>=$galleryTwoPicture.length){
                excessTwo=targetTwoImage-($galleryTwoPicture.length-1);
                targetTwoImage=$galleryTwoPicture.length-1;
            }
            if(excessTwo!=0){
                targetX=-targetTwoImage*imageTwoTotalWidth;
            }
            momentumTwoTween=TweenMax.to(galleryTwoPos,1-(Math.abs(excessTwo)/20),{
                x:targetX,
                ease:Quint.easeOut,
                onUpdate:updateGalleryTwoPos,
                onComplete:updateGalleryTwoPos
            });

            if(Math.abs(totalTwoDist)>=distTwoThreshold){
                event.preventDefault();
                event.stopPropagation();
            }
        }
    });

    function stopTwoMomentum(){
        if(momentumTwoTween!=null){
            momentumTwoTween.kill();
            momentumTwoTween=null;
            updateGalleryTwoPos();
        }
    }

    setGalleryTwoPos(0,false);
}