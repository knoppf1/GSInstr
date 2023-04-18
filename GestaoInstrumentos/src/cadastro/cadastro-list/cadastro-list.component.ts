import { CadastroService } from '../cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.scss'],
})
export class CadastroListComponent implements OnInit {
  itens: any[] = [];

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    console.log('Load');
    this.cadastroService.listar().subscribe((res) => {
      console.log('Itens', res.dados);
      this.itens = res.dados;
    });
  }

  delete(id: number) {
    if (confirm('Você deseja excluir o resgitro?')) {
      this.cadastroService.delete(id).subscribe((res) => {
        this.load();
      });
    }
  }
}
