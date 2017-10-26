export default class Base{
    constructor(selector, index) {
        console.log(selector);
        this.setSelector(selector);
        this.setIndex(index);
    }


    setIndex(index){
        this.index = index;
    }

    setSelector(selector){
        this.selector = selector;
    }

    setMainId(mainId){
        this.mainId = mainId;
    }


    replacer() {
        this.createBlock();
        // replace
        this.selector.replaceWith(this.main_block);
    }


}
