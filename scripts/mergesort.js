



/*
    *****************
    DONE BY:-   ABHISHEK PANDEY
    
    *****************
*/

function Merge(){
   
    c_delay=0;

    mergeSort(0,array_size-1);

    enable_buttons();
}

function merge(start,mid,end)
{
    let p=start,q=mid+1;

    let Arr=[],k=0;

    for(let i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    for(let t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"#b578e8");//Color update
    }
}

function mergeSort(start,end)
{
    if(start < end)
    {
        let mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        mergeSort(start,mid);
        mergeSort(mid+1,end);

        merge(start,mid,end);
    }
}


/*
    *****************
    DONE BY:-   ABHISHEK PANDEY
    
    *****************
*/
