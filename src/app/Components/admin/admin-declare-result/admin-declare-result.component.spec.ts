import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeclareResultComponent } from './admin-declare-result.component';

describe('AdminDeclareResultComponent', () => {
  let component: AdminDeclareResultComponent;
  let fixture: ComponentFixture<AdminDeclareResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeclareResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDeclareResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
