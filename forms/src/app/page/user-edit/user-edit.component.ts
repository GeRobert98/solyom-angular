import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/users.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/model/users';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user$: Observable<Users> = null;
  id= 0;
  formGroup: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    // email: new FormControl('', [Validators.required, this.emailValidator]),
    email: new FormControl('', [Validators.required, Validators.email], this.emailValidator.bind(this)),
    company: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),

  })

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params.id;
    //this.user$ = this.userService.get(this.id);
    this.user$ = this.userService.get(this.id).pipe(
      tap((user: Users) => {
        for (const key of Object.keys(this.formGroup.controls)) {
          this.formGroup.controls[key].setValue(user[key]);
        }
      }
    ))
  }

  emailValidator(ctrl: AbstractControl): Promise< ValidationErrors | null>  | Observable< ValidationErrors | null> {
    //return new Promise(null);
    return this.userService.checkEmail(ctrl.value, this.id);

  }

  onSave(): void {
    console.log(this.formGroup.value);
  }

}
