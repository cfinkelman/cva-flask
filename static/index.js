// constants
const controleIdsAndInfo = {
  // main page
  patient_name: { prepopValue: 'patient_name' },
  sex: { prepopValue: 'notspecified' },
  date_of_birth: { prepopValue: '2019-07-27' },
  indication_for_testing: { prepopValue: 'indication_for_testing' },
  test_type: { prepopValue: 'test_type' },
  ordering_provider: { prepopValue: 'ordering_provider' },
  hospital: { prepopValue: 'hospital' },
  specimen: { prepopValue: 'blood' },
  collected: { prepopValue: 'collected' },
  received: { prepopValue: 'received' },
  case_id: { prepopValue: 'rcigm_case_id', validation: (value) => { return value.length === 6; } },
  index_family_member_id: { prepopValue: 'index_family_member_id' },
  report_date: { prepopValue: new Date().toISOString().substring(0,10) } ,
  test_results: { prepopValue: 'test_results' },
  confirmation_status: {},
  gene_transcript: { prepopValue: 'gene_transcript' },
  condition: { prepopValue: 'condition' },
  genomic_coordinates: { prepopValue: 'genomic_coordinates' },
  variant: { prepopValue: 'variant' },
  zygosity: { prepopValue: 'zygosity' },
  sequence_variant_notes: { prepopValue: 'sequence_variant_notes' },
  interpretation: { prepopValue: 'interpretation' },
  methodology_limitations_regulatory_disclosures: {},
  approved_by: { prepopValue: 'approved_by' },
  approved_by_other: { key: 'approved_by' },
}

// load document
$(document).ready(function() {
  const [mainForm, testResults] = ['main_form', 'test_results'].map(v => document.getElementById(v));
  populateData(controleIdsAndInfo);

  document.addEventListener('keyup', syncFields);
  mainForm.addEventListener('change', handleChange);
});

// helper function
function populateData(data){
  Object.keys(data).forEach(v => {
    const value = data[v].prepopValue;
    if(value !== undefined){
      const el = document.getElementById(v);
      el.value = value;
      if(el.dataset.id){ $(`input[data-id="${el.dataset.id}"]`).val(value); }
    }
  });
}

function handleChange(e){
  const { id = '', value } = e.target;
  const updateField = e.target.dataset.id || id;
  const validationFunction = controleIdsAndInfo[updateField]?.validation || (() => true);
  const valid = validationFunction(value);
  if(valid){
    controleIdsAndInfo[updateField].value = value;
  }
  else{

  }
  document.getElementById(`cnt_div_${updateField}`).classList.toggle("has-error", !valid);

  console.log('change', updateField, controleIdsAndInfo);
}

function syncFields(e){
  const syncField = e.target.dataset.id;
  if(syncField){
    $(`input[data-id="${syncField}"]`).val(e.target.value);
  }
  // add limit list
  console.log('syncFields');
}

function handleElementChange(e){
  const el = e.target;
  if(isOverflowing(el)){
    el.classList.add('overflowing');
  }
  else{
    el.classList.remove('overflowing');
  }

  console.log('handleElementChange', el);
}

// https://www.geeksforgeeks.org/how-to-determine-the-content-of-html-elements-overflow-or-not/
function isOverflowing(el){
  return el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
}