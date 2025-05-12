import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoCardComponent } from './assunto-card.component';

describe('AssuntoCardComponent', () => {
  let component: AssuntoCardComponent;
  let fixture: ComponentFixture<AssuntoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssuntoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuntoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
