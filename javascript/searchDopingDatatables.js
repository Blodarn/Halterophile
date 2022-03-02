function modifDopingSearchBar() {
  // Modifications to search bar of Datatables
  $('#doping_stats_table_wrapper .row .col-sm-12.col-md-6').first().remove();
  $('#doping_stats_table_wrapper .row .col-sm-12.col-md-6').first().addClass('col').removeClass('col-sm-12').removeClass('col-md-6').attr('id', 'searchBarDataTables')
  $("#doping_stats_table_filter label").html($("#doping_stats_table_filter input"));
  $("#doping_stats_table_filter label input").attr("placeholder", "Search..");
}