var http = require('http');

async function fetchJSON (url, options) {
  let f = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "cookie" : "_2gis_webapi_session=a6a28bb7-9571-4d17-8d93-ce8e480b2389; _2gis_webapi_user=8bd92ace-3941-4215-91bd-85b58fca3ddb; ipp_uid=1670664320276/x78i2mgNGKE9UWN8/0sA4P4yeddyEtCkk44BEjQ==; ipp_key=v1676211966478/v33947245ba5adc7a72e273/BzSCuXwuFulLtiYYsu9tlg==",
      ...(options?.headers || {}),
    },
  });
  let t = await f.text();
  try {
    return JSON.parse(t);
  } catch (e) {
    throw new e.constructor(`${e.message} in ${url}\n\n"${t}"`);
  }
}

http.createServer(async (req, res) =>
{
    console.log("yo");
    let r = await fetchJSON("https://catalog.api.2gis.ru/3.0/items?key=rurbbn3446&q=water&fields=items.locale,items.flags,search_attributes,items.adm_div,items.city_alias,items.region_id,items.segment_id,items.reviews,items.point,request_type,context_rubrics,query_context,items.links,items.name_ex,items.name_back,items.org,items.group,items.external_content,items.comment,items.ads.options,items.email_for_sending.allowed,items.stat,items.description,items.geometry.centroid,items.geometry.selection,items.geometry.style,items.timezone_offset,items.context,items.address,items.is_paid,items.access,items.access_comment,items.for_trucks,items.is_incentive,items.paving_type,items.capacity,items.schedule,items.floors,dym,ad,items.rubrics,items.routes,items.reply_rate,items.purpose,items.route_logo,items.has_goods,items.has_apartments_info,items.has_pinned_goods,items.has_realty,items.has_payments,items.is_promoted,items.delivery,items.order_with_cart,search_type,items.has_discount,items.metarubrics,broadcast,items.detailed_subtype,items.temporary_unavailable_atm_services,items.poi_category,filters,widgets&type=adm_div.city,adm_div.district,adm_div.district_area,adm_div.division,adm_div.living_area,adm_div.place,adm_div.region,adm_div.settlement,attraction,branch,building,crossroad,foreign_city,gate,parking,road,route,station,street,coordinates,kilometer_road_sign&page_size=12&page=1&locale=ru_RU&allow_deleted=true&search_device_type=desktop&search_user_hash=7305789888864215608&viewpoint1=37.87550034485333,51.32652258650344&viewpoint2=37.94900977933917,51.293266520365684&stat[sid]=a6a28bb7-9571-4d17-8d93-ce8e480b2389&stat[user]=8bd92ace-3941-4215-91bd-85b58fca3ddb&shv=2023-02-09-19&r=921348602");
    console.log("yoo");
    console.log(r);
    
    res.write(r);
    //res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
