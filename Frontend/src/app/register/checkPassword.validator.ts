import { FormGroup } from '@angular/forms';

export function MustMatch(password: string, confirm_password: string) {
    return (formGroup: FormGroup) => {
        const password_control = formGroup.controls[password];
        const confirm_password_control = formGroup.controls[confirm_password];

        if (password_control.value !== confirm_password_control.value) {
            confirm_password_control.setErrors({ mustMatch: true });
        } else {
            confirm_password_control.setErrors(null);
        }
    }
}