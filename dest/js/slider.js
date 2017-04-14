document.addEventListener("DOMContentLoaded", function() {
    //input range
    document.getElementById('range-values__input').addEventListener("input", function() {
        document.getElementById('range-values__caret').style.left = (this.value - 1) * 46 + 24 + 'px';
    });
    document.getElementById('range-values__input').addEventListener("change", function() {
        document.getElementById('range-values__caret').style.left = (this.value - 1) * 46 + 24 + 'px';
    });

    //drag and drop
    var dropArea = document.getElementById("droppable");
    var overlapThreshold = "50%";
    var form = document.getElementById('form');
    var elements = form.elements;
    var toDefaultStay = document.querySelector('.slider-control-prev__icon');
    var toCurrentStay = document.querySelector('.slider-control-next__icon');
    var slideInner = document.querySelector('.slider-inner__item');
    var pill = document.getElementById('draggable');

    Draggable.create('#draggable', {
        bounds: document.querySelector('.slider'),
        throwProps: true,
        onDragEnd: function() {
            if (this.hitTest(dropArea, overlapThreshold)) {
                pill.style.display = 'none';
                dropArea.style.backgroundImage = 'url(/img/happy.png)';
                dropArea.style.width = '835px';
                toDefaultStay.classList.remove('hidden');
                TweenLite.set('#draggable', {
                    clearProps: "transform"
                });
                for (var i = 0, len = elements.length; i < len; ++i) {
                    elements[i].disabled = true;
                }
            }
        }
    });

    toDefaultStay.addEventListener('click', function() {
        form.reset();
        document.getElementById('range-values__caret').style.left = '24px';
        dropArea.style.backgroundImage = null;
        dropArea.style.width = '455px';
        pill.style.display = 'inline-block';
        toDefaultStay.classList.add('hidden');
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].disabled = false;
        }
    });
});
