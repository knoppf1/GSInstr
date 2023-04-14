import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-view',
  templateUrl: './cadastro-view.component.html',
  styleUrls: ['./cadastro-view.component.scss']
})
export class CadastroViewComponent implements OnInit {

  id: number;
  frmCadastro: FormGroup;
  formBuilder: any;
  toastr: any;
  categorias: any;
  idEmpresa: number =1;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cadastroService: CadastroService,

    private router: Router,
  ) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id')!;
    console.log('Cheguei');
    this.frmCadastro= this.createForm();
    if (this.id != 0){
      console.log("cheguei!")
      this.load();
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
     id : [this.id],
     nomeEquipamento : ['', Validators.required],
     patrimonio: [''],
     departamentoResponsavel : [''],
     dataAquisicao : [''],
     dataUltimaCalibracao: [''],
     dataProximaCalibracao: [''],
    });
  }

  get f() {
        return this.frmCadastro.controls;
  }

  load(){
      this.cadastroService.buscar(this.id).subscribe(res =>{
        this.frmCadastro.patchValue(res);
      });
   }

   save(_$event: any) {
    if (this.frmCadastro.valid){
      console.log('Formulario Válido!', this.f)

      if(this.id != 0){
        this.cadastroService.editar(this.id, this.frmCadastro.value).subscribe(res =>{
        });
      }
      else{
        this.cadastroService.adicionar(this.frmCadastro.value).subscribe(res =>{
        });
      }
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/cadastro/list']));
    }
    else{
      console.log('Formulario Invalido', this.f)
    }
  }




}
