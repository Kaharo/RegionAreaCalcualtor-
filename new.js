function n_to_rows(f) 
{
  if(f.billingtoo.checked == true) {
    f.billingname.value = f.shippingname.value;
    f.billingcity.value = f.shippingcity.value;
  }
}