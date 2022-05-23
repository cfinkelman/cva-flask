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

// custom elements
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
            <div>
                <img class="logo" src="./RadyChildrensInstitueGenomicsMedicineLogo.jpg" />
            </div>
            <div class="align_center">
                <h3 class="teal">Clinical Genome Center</h3>
                <p>
                    7910 Frost Street, Suite 240<br />
                    San Diego, CA 92123
                </p>
            </div>
            <div class="align_right">
                <h4 class="coolblue">RCIGM_rWGS@rchsd.org</h4>
                <p>
                    <span>P:</span> 858 / 966-8127<br />
                    <span>F:</span> 858 / 966-8092<br />
                </p>
                <p><b>
                    CLIA ID# 05D2129627<br />
                    CAP ID# 9487427
                </b></p>
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

  class Footer extends HTMLElement {
    connectedCallback() {
      const pageNumber = this.attributes.page_number?.value || 0;
      const maxPages = this.attributes.max_pages?.value || 2;
      controleIdsAndInfo.patient_name.update = controleIdsAndInfo.patient_name.update || [];
      controleIdsAndInfo.patient_name.update.push(`patient${pageNumber}`);
      
      this.innerHTML = `
        <footer>
            <label for="patient">Patient</label>
            <input type="text" name="patient" id="patient${pageNumber}"/>
            <label for="case_id">Case ID</label>
            <input type="text" name="case_id" id="case_id${pageNumber}">
            <label for="dob">DOB</label>
            <input type="text" name="dob" id="dob${pageNumber}" />
            <label for="page_number">Page</label>
            <input type="text" name="page_number" id="page_number${pageNumber}" value="${pageNumber} of ${maxPages}" />
        </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);