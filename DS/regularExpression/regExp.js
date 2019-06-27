// program that does regExp work without using inbuilt functions.
//partially working, needs modification.
function regex_find(str, pattern) {
    var str_index = 0, arr = '.*?+', stack = [];
  
    for(var i = 0; i < pattern.length; i++)
      stack.push(pattern[i]);
  
    str_index = operation(str, pattern, stack, arr);
    
    if(str_index)
      console.log(str_index);
    else
      console.log('unmatched');
}

function operation(str, pattern, stack, arr) {
  var str_index = 0;
  for(var i = str.length - 1; i >= 0; i--) {
      let j = pattern.length - 1, k = i;
      while(j >= 0) {
        var element = pattern[j];
          if(arr.indexOf(element) > -1) {
            if(element == '.') {
              k--;
              j--;
            }
            else if(element == '?') { console.log(pattern[j]);
              j--;
              if(pattern[j] == str[k] && pattern[j] != str[k-1]){
                j--, k--;
              }
              else
                j--;
            }
            else if(element == '*') {
              j--;
              while(str[k] == pattern[j])
                k--;
              j--;
            }
            else if(element == '+') {
              j--;
              while(str[k] == pattern[j])
                k--;
              k++;
            }
          }
          else {
            if(pattern[j] == str[k]) { console.log(pattern[j]);
              str_index = k;
              if(j == 0 && str_index)
                return str_index;
              k--; j--;
            }
            else
              break;
          }
      }
  } 
}

function recursion() {
  
}
        
regex_find('aaabbbcccdddeee', 'c.*e');

/*Examples:

string: aaabbbcccdddeee

pattern: bbb - Matches. position 3
pattern: c.c - Matches. position 6
pattern: eeee - Unmatched
pattern: cd*e - Matches. position 8
pattern: c.*e - Matches. position 6
pattern: ccdddd? - Matches. postition 7
pattern: ccddde+ - Matched position 7
*/