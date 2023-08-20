function setupAddress(citySelector, districtSelector) {
  console.log('setup address')
  __G_DATA_VN__.city_data.forEach(function (c) {
    $(citySelector).append(
      '<option value="' + c.id + '">' + c.name + '</option>'
    );
  })
  $(citySelector).change(function () {
    console.log('change change');
    var city_id = $(this).val() - 0;
    var districts = __G_DATA_VN__.district_data.filter((function (d) {
      return d.province_id === city_id
    }))

    $(districtSelector).html('');
    districts.forEach(function (d) {
      $(districtSelector).append(
        '<option value="' + d.id + '">' + d.name + '</option>'
      );
    })
  })
}

setupAddress('#province', '#district');