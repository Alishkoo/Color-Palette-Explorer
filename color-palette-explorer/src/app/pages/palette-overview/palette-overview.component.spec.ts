import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteOverviewComponent } from './palette-overview.component';

describe('PaletteOverviewComponent', () => {
  let component: PaletteOverviewComponent;
  let fixture: ComponentFixture<PaletteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaletteOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaletteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
