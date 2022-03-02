function modifLiftingSearchBar() {
  // Modifications to search bar of Datatables
  $('#lifting_stats_table_wrapper .row .col-sm-12.col-md-6').first().remove();
  $('#lifting_stats_table_wrapper .row .col-sm-12.col-md-6').first().addClass('col').removeClass('col-sm-12').removeClass('col-md-6').attr('id', 'searchBarDataTables')
  $("#lifting_stats_table_filter label").html($("#lifting_stats_table_filter input"));
  $("#lifting_stats_table_filter label input").attr("placeholder", "Search..");
}