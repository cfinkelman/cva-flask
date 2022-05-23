// constants
const controleIdsAndInfo = {
  // main page
  patient_name: {},
  sex: {},
  date_of_birth: {},
  indication_for_testing: {},
  test_type: {},
  ordering_provider: {},
  hospital: {},
  specimen: {},
  collected: {},
  received: {},
  rcigm_case_id: {},
  index_family_member_id: {},
  report_date:{},
  test_results: {},
  confirmation_status: {},
  gene_transcript: {},
  condition: {},
  genomic_coordinates: {},
  variant: {},
  zygosity: {},
  sequence_variant_notes: {},
  interpretation: {},
  methodology_limitations_regulatory_disclosures: {},
  approved_by: {},
  // footer
  patient: { key: 'patient_name' },
  case_id: { key: 'rcigm_case_id' },
  dob: { key: 'date_of_birth' },
}

// load document
$(document).ready(function() {
  const [mainForm] = ['main_form'].map(v => document.getElementById(v));

  mainForm.addEventListener('change', handleChange)


});

// helper function
function handleChange(e){
  const { id = '', value } = e.target;
  const updateField = controleIdsAndInfo[id]?.key || id;
  controleIdsAndInfo[updateField].value = value;

  console.log('change', updateField, controleIdsAndInfo);
}