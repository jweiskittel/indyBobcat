import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialComponent } from './residential.component';

describe('RecreationComponent', () => {
  let component: ResidentialComponent;
  let fixture: ComponentFixture<ResidentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
