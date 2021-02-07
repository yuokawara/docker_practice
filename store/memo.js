export const state = () => ({
    memo: [],
    page: 0,
})

export const mutations = {

    insert: function(state, obj) {
        var d = new Date();
        var fmt = d.getFullYear() + '-' + (d.getMonth() + 1)
            + '-' + d.getDate() + ' ' + d.getHours() + ':'
            + d.getMinutes();
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            created: fmt
        });
    },
    
    set_page: function(state, p) {
        state.page = p;
    },
    remove:function(state, obj) {
        var num = 0;
        for (let i = 0; i < state.memo.length; i++) {
            const ob = state.memo[i];
            if (ob.title == obj.title 
                    && ob.content == obj.content
                    && ob.created == obj.created){
                alert('remove it! --' + ob.title);
                state.memo.splice(i, 1);
                return;
            }
        }
    },
}
// export const state = () => ({
//     memo: [],
//     page: 0,
// })

// export const mutations = {
//     insert: function(state, obj) {
//         var d = new Date();
//         var fmt = d.getFullYear() + '-' + (d.getMonth() + 1)
//             + '-' + d.getDate() + d.getHours() + ':' + d.getMinutes();
//         stete.memo.unshift({
//             title: obj.title,
//             content: obj.content,
//             created: fmt
//         });
//     },
//     set_page: function(state, p) {
//         state.page = p   
//     },
//     remove: function(state, obj) {
//         var num = 0;
//         for (let i = 0; i < state.memo.lemgth; i++) {
//             const ob = state.memo[i];
//             if(ob.title == ob.title
//                 && ob.content == ob.content
//                 && ob.created == ob.created) {
//                     alert('remove' + ob.title);
//                     alert.memo.splice(i, 1);
//                     return
//                 }
//         }
//     }
// }