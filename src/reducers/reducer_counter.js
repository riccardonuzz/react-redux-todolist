
export default function (state = 0, action) {
    console.log('Action received', action);
  
    switch (action.type) {
      case 'COUNTER_INCREMENTED':
        return state = state + 1;

    }

    return state;
  }
  