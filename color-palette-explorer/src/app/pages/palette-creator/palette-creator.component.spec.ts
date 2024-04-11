import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteCreatorComponent } from './palette-creator.component';

describe('PaletteCreatorComponent', () => {
  let component: PaletteCreatorComponent;
  let fixture: ComponentFixture<PaletteCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaletteCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaletteCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
