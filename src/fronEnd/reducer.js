const currentView = (state='',action)=>{
  switch(action.type){
  case 'CHANGE_CURRENT_VIEW':
    return action.payload;
  default:
    return state;
  }
};
export {currentView};
