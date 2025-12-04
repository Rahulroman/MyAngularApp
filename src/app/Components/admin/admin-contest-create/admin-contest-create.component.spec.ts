import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContestCreateComponent } from './admin-contest-create.component';

describe('AdminContestCreateComponent', () => {
  let component: AdminContestCreateComponent;
  let fixture: ComponentFixture<AdminContestCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContestCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminContestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
