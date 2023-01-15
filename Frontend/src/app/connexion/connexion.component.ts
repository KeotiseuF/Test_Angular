import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
    selector: "app-connexion",
    templateUrl: "./connexion.component.html",
    styleUrls: ["./connexion.component.scss"],
})

export class ConnexionComponent implements OnInit {

    connexionForm!: FormGroup;
    displayValidPassword = false;
    displayButtons = true;
    mailRegex = /^[A-Za-z][-a-z0-9._]+[-a-z0-9]@[-a-z0-9]+[.]{1}[a-z]{2,5}$/;
    passwordRegex = /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
    displayPassword = "Afficher";
    i = 0; 
    typeInput = "password";
    userDatas!: any;
    
    @ViewChild("password") password!: ElementRef;
    @ViewChild("validPassword") validPassword!: ElementRef;

    constructor (private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

    ngOnInit(): void
    { 
        this.connexionForm = this.formBuilder.group({
           userDatas : this.formBuilder.group ({
                email: [null, [Validators.required, Validators.pattern(this.mailRegex)]], // Aurai-pu utiliser Validator.mail
                password: [null, [Validators.required, Validators.pattern(this.passwordRegex)]],
            }) 
        })
    }

    onSubmitForm(value: string) { 
        const errorMsg = "Veuillez vérifier vos données entrées";
        this.http.post(`http://localhost:3000/api/${value}`, this.connexionForm.value.userDatas)
        .subscribe({
            next : (() => {
                if (this.password.nativeElement.value !== this.validPassword.nativeElement.value) 
                {
                    window.alert(errorMsg)
                }
            }),
            error : () => { window.alert(errorMsg) },
            complete : (() => {
                window.alert("Connexion réussie");                   
                this.router.navigate(["accueil"]);
            }) 
        })
    }

    onClick(value: string) {
        if(value === "signup")
        {
            this.displayValidPassword = true;
            this.connexionForm = this.formBuilder.group({
                userDatas : this.formBuilder.group ({
                    email: [null, [Validators.required, Validators.pattern(this.mailRegex)]],
                    password: [null, [Validators.required, Validators.pattern(this.passwordRegex)]],
                    valid_password: [null, [Validators.required, Validators.pattern(this.passwordRegex)]],    
                })
            })
            
            this.displayButtons = false; 
        }
        else
        {
            this.displayValidPassword = false;
            this.connexionForm = this.formBuilder.group({
                userDatas : this.formBuilder.group ({
                    email: [null, [Validators.required, Validators.pattern(this.mailRegex)]],
                    password: [null, [Validators.required, Validators.pattern(this.passwordRegex)]],
                })
            })
            this.displayButtons = true;
        }
    }

    onDisplayPass()
    {
        this.i++

        if(this.i%2 === 0)
        {
            this.displayPassword = "Cacher";
            this.typeInput = "password" 
        }
        else 
        {
            this.displayPassword = "Afficher"
            this.typeInput = "text"
        }
    }
}