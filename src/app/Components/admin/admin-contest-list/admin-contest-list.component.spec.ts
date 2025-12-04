import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContestListComponent } from './admin-contest-list.component';

describe('AdminContestListComponent', () => {
  let component: AdminContestListComponent;
  let fixture: ComponentFixture<AdminContestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContestListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminContestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
