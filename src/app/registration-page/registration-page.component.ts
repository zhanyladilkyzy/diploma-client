import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  public register() {
    // Use the form value to do authentication
    console.log(this.form.value);
    // Navigate after successful login
  }
// <script type="text/javascript">
//     $(function () {
//       $('#datetimepicker5').datetimepicker({
//         defaultDate: "11/1/2013",
//         disabledDates: [
//           moment("12/25/2013"),
//           new Date(2013, 11 - 1, 21),
//           "11/22/2013 00:53"
//         ]
//       });
//     });
// </script>
}
