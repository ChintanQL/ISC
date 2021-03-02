import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';

import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

export class CheckBox extends SampleBase {
    constructor() {
        super(...arguments);
        //define the data with category
        this.countries = [
            { Name: 'Australia', Code: 'AU' },
            { Name: 'Bermuda', Code: 'BM' },
            { Name: 'Canada', Code: 'CA' },
            { Name: 'Cameroon', Code: 'CM' },
            { Name: 'Denmark', Code: 'DK' },
            { Name: 'France', Code: 'FR' },
            { Name: 'Finland', Code: 'FI' },
            { Name: 'Germany', Code: 'DE' },
            { Name: 'Greenland', Code: 'GL' },
            { Name: 'Hong Kong', Code: 'HK' },
            { Name: 'India', Code: 'IN' },
            { Name: 'Italy', Code: 'IT' },
            { Name: 'Japan', Code: 'JP' },
            { Name: 'Mexico', Code: 'MX' },
            { Name: 'Norway', Code: 'NO' },
            { Name: 'Poland', Code: 'PL' },
            { Name: 'Switzerland', Code: 'CH' },
            { Name: 'United Kingdom', Code: 'GB' },
            { Name: 'United States', Code: 'US' }
        ];
        // maps the appropriate column to fields property
        this.checkFields = { text: 'Name', value: 'Code' };
    }
    // function to handle the CheckBox change event
    onChange(args) {
        // enable or disable the SelectAll in multiselect on CheckBox checked state
        this.mulObj.showSelectAll = args.checked;
    }
    // function to handle the CheckBox change event
    onChangeDrop(args) {
        // enable or disable the Dropdown button in multiselect on CheckBox checked state
        this.mulObj.showDropDownIcon = args.checked;
    }
    // function to handle the CheckBox change event
    onChangeLimit(args) {
        // enable or disable the selection limit in multiselect on CheckBox checked state
        this.mulObj.enableSelectionOrder = args.checked;
    }
    render() {
        return (<div id="multichecbox" className='control-pane'>
        <div className='control-section col-lg-8'>
          <div id="multigroup" className="control-styles">
            <h4>CheckBox</h4>
            <MultiSelectComponent id="checkbox" ref={(scope) => { this.mulObj = scope; }} dataSource={this.countries} fields={this.checkFields} placeholder="Select countries" mode="CheckBox" showSelectAll={true} showDropDownIcon={true} filterBarPlaceholder="Search countries" popupHeight="350px">
              <Inject services={[CheckBoxSelection]}/>
            </MultiSelectComponent>
          </div>
        </div>
     

      </div>);
    }
}

render(<CheckBox />, document.getElementById('sample'));