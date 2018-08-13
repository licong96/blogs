export default function gallery(parent){
    var 
        parents = $("." + parent),
        $gallery = parents.find($(".slider-one-imgs")),
        $galleryPictures = parents.find($(".slider-one-imgs")),
        $galleryPicture = parents.find($(".slider-one-img")),
        $galleryPicture = parents.find($(".slider-one-background-img")),

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

        parents.find($(".pag-1 li")).eq(i).click(function(){
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
            parents.find($(".first-selected")).removeClass('first-selected');
            parents.find($(".first-display-descp li")).eq(currentImage).addClass('first-selected');

            // Pagination
            parents.find($(".pag-1-selected")).removeClass('pag-1-selected');
            parents.find($(".pag-1 li")).eq(currentImage).addClass('pag-1-selected');
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
}