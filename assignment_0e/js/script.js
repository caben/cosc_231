$(document).ready(function(){
 
  var $container = document.createElement('div');
  var $header = document.createElement('div');
  var $menu_button = document.createElement('button');
  var $top = document.createElement('div');
  var $img_div = document.createElement('div');
  var $img = document.createElement('img');
  var $paragraph = document.createElement('div');
  var $classes = document.createElement('div');
  var $row_color = document.createElement('tr');
  var $row_color_one = document.createElement('tr');
  var $row_color_two = document.createElement('tr');
  var $list_container = document.createElement('div');
  var $menu_list_div = document.createElement('div');
  var $menu_list_ul = document.createElement('ul');
  var $toggle_list_item = document.createElement('li');
  var $gray_scale_item = document.createElement('li');

  
 
  
  $($container).addClass('container');
  
  $('body').append($container);
  $($container).append($header);
  $($container).append($menu_button);
  $($container).append($menu_list_div);
  
  $($container).append($menu_list_ul);
  $($menu_button).attr('id','menu-button');
  $($menu_button).attr('type','button');
  
  $($menu_list_div).append($menu_button);
  $($menu_list_div).append($menu_list_ul);
  $($menu_list_ul).append('<a href="" id="grayscale-a"><li>Toggle Grayscale</li></a>');
  $($menu_list_ul).append('<a href="" id="fontsize-a"><li class="increase-font">Increase Font Size</li></a>');
  $($menu_list_ul).append('<a href="" id="fontsize-b"><li class="decrease-font">Decrease Font Size</li></a>');
  $($menu_list_div).addClass('menu-container');
  $($menu_list_ul).attr('id','assist-menu');
  $($menu_button).text('Click for User Menu');
  
  $(".increase-font").click(function(e){
    e.preventDefault();
    var currentFontSize = $('p').css('font-size');
    currentFontSize = parseFloat(currentFontSize,10);
    newFontSize = currentFontSize * 1.2;
    $('p').css('font-size',newFontSize);
    return false;
  });
  
  $(".decrease-font").click(function(e){
    e.preventDefault();
    var decreaseFontSize = $('p').css('font-size');
    decreaseFontSize = parseFloat(decreaseFontSize, 10);
    var newFontSize = (decreaseFontSize * 0.8) - 2;
    $('p').css('font-size',newFontSize);
    return false;
  });
  
  $($menu_button).click(function(){
    $('#assist-menu').toggle();
  });
  
  $('.grayscale-a').click(function(e){
    e.preventDefault();
    $('body').toggleClass();
    console.log('whoopi');
  });
  
  $('#grayscale-a').click(function(e){
    e.preventDefault();
    $('body').toggleClass('grayscale-a');													

  });
  

  
  $('.gray-toggle').click(function(e){
    e.preventDefault();
    $('body').toggleClass();
    console.log('sfdfd');
  });
  
 
  $($header).addClass('header');
  $($header).append('<h1>Christopher Aben</h1>');
  $($container).append($top);
  $($top).addClass('top');
  $($container).append($img_div);
  $($img_div).addClass('img');
  $($img_div).append($img);
  $($top).append($img_div);
  $($img).attr('src',"231/assignments/images/row-photo.jpg" );
  $($img).attr('alt','row photo');
  $($top).append($paragraph); 
  $($paragraph).addClass('paragraph');
  $($paragraph).html("<b><p>I am <em>learning</em> more about computer hardware and software by continuing my education at Eastern Michigan. I intend to construct a Web Application using the skills thatI acquire from these classes. The idea is to create a portfolio applicationin order to showcase all of the projects and work that I complete during school. 	Building the application will require <strong>persistent</strong> effort and <strong>patience</strong> but will be the most effective way of <em>learning</em>.	I have already decided to use the Meteor platform to build this application which is a relatively new full stack framework.</p></b>");
  $($container).append('<hr />');
  $($container).append('<h4>Table View of Classes</h4>');
  $($container).append($classes);
  
  $($row_color).addClass('color');
  $($classes).addClass('classes');
  
  $($classes).append('<table></table>');
  $('table').append('<tbody></tbody>');
  $('tbody').append($row_color);
  $($row_color).append('<th>Name of Course</th>');
  $($row_color).append('<th>Course Number</th>');
  $($row_color).append('<th>Days Meeting</th>');
  $($row_color).append('<th>Time Start</th>');
  $($row_color).append('<th>Time Finish</th>');
  $($row_color).append('<th>Teacher Name</th>');
  $($row_color).append('<th>Room Number</th>');
  
  
  $('tbody').append($row_color_one);
  $($row_color_one).addClass('color one');
  $($row_color_one).append().html('<td>Internet B&commat;sed Computing</td>');
  $($row_color_one).append('<td><a target="_blank" href="https://github.com/pegurnee-edu/cosc231-fa15">COSC 231</a></td>').html();
  $($row_color_one).append('<td class="center">&Topf;&Ropf;</td>').html();
  $($row_color_one).append('<td>02:00 PM</td>');
  $($row_color_one).append('<td>03:50 PM</td>');
  $($row_color_one).append('<td>Edward Gurnee</td>');
  $($row_color_one).append('<td>514</td>');
  
  $('tbody').append($row_color_two);
  $($row_color_two).addClass('color two');
  $($row_color_two).append().html('<td>Information Systems For Business</td>');
  $($row_color_two).append('<td><a target="_blank" href="http://catalog.emich.edu/preview_program.php?catoid=18&amp;poid=9244">IS 215</a></td>').html();
  $($row_color_two).append('<td class="center">&Topf;</td>').html();
  $($row_color_two).append('<td>02:00 PM</td>');
  $($row_color_two).append('<td>03:50 PM</td>');
  $($row_color_two).append('<td>Russell Grenham</td>');
  $($row_color_two).append('<td>221</td>');
  
  $($container).append('<br/><hr/>');
  $($container).append('<h4>Link to COSC 231 Folder</h4>');
  $($container).append('<ul><li><a href="231/"> COSC 231 Folder </a></li></ul>');
  $($container).append('<hr />');
  $($container).append('<h4>DOM Tree Representation of Webpage</h4>');
  $($container).append('<ul><li><a href="231/assignments/images/aben_0d.jpg"> Dom Tree </a></li></ul>');
  $($container).append('<hr />');
  $($container).append('<h4>Favorite Pokemon </h4>');
  $($container).append($list_container);
  
  $($list_container).addClass('list-container');
  $($list_container).append('<ol></ol>');
  
  $('ol').append('<li><em>Charmander</em></li>').html();
  $('ol').append('<li><em>Mew</em></li>').html();
  $('ol').append('<li><em>Blastoise</em></li>').html();
  $('ol').append('<li><em>Gengar</em></li>').html();
  
  $($container).append('<hr /><br/><br/><br/><br/><br/>');
  $($container).append('<footer><a target="_blank" href="https://github.com/caben/cosc_231"> Link to personal Github </a></footer>').html();
});

