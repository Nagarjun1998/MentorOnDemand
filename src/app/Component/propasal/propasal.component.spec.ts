import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropasalComponent } from './propasal.component';

describe('PropasalComponent', () => {
  let component: PropasalComponent;
  let fixture: ComponentFixture<PropasalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropasalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
