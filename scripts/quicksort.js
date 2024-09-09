


/*
    *****************
    DONE BY:-   ABHISHEK PANDEY
    
    *****************
*/


function Quick() {
    c_delay = 0;
  
    quick_sort(0, array_size - 1);
  
    enable_buttons();
  }
  
  
  function quick_partition(start, end) {
    let pivot = div_sizes[start];
    div_update(divs[start], div_sizes[start], "yellow"); //Color update
    let i = start;
    let j = end;
    while (i <= j) {
      while (i <= j && div_sizes[i] <= pivot) {
        if (i!= start) {
          div_update(divs[i], div_sizes[i], "red"); //color update -> #83f28f = light green
          div_update(divs[i], div_sizes[i], "#6399f1");
        }
        i++;
      }
      while (i <= j && div_sizes[j] > pivot) {
        div_update(divs[j], div_sizes[j], "red"); //color update : #feb265 = light orange
        div_update(divs[j], div_sizes[j], "#6399f1");
        j--;
      }
      if (i <= j) {
        div_update(divs[i], div_sizes[i], "red"); //color update
        div_update(divs[j], div_sizes[j], "red"); //color update
        let temp = div_sizes[i];
        div_sizes[i] = div_sizes[j];
        div_sizes[j] = temp;
  
        div_update(divs[i], div_sizes[i], "red"); //height update
        div_update(divs[j], div_sizes[j], "red"); //height update
        div_update(divs[i], div_sizes[i], "#6399f1"); //color update
        div_update(divs[j], div_sizes[j], "#6399f1"); //color update
      }
    }
  
    //j is the pivot index
    if (j!= start) {
      div_update(divs[j], div_sizes[j], "yellow"); //color update
      let temp = div_sizes[start];
      div_sizes[start] = div_sizes[j];
      div_sizes[j] = temp;
      div_update(divs[start], div_sizes[start], "yellow"); //height update
      div_update(divs[start], div_sizes[start], "#6399f1"); //color update
      div_update(divs[j], div_sizes[j], "yellow"); //height update
    }
    
    div_update(divs[j], div_sizes[j], "#b578e8");
  
    return j;
  }
  
  function quick_sort(start, end) {
    if (start == end) {
      //this has to be included so as to properly animate the elements with start=end, because some of them might get excluded
      div_update(divs[start], div_sizes[start], "#b578e8");
      return;
    }
    if (start < end) {
      let piv_pos = quick_partition(start, end);
      quick_sort(start, piv_pos - 1); //sorts the left side of pivot.
      quick_sort(piv_pos + 1, end); //sorts the right side of pivot.
    }
  }
  
  
  /*
      *****************
      DONE BY:-   ABHISHEK PANDEY
      
      *****************
  */
  