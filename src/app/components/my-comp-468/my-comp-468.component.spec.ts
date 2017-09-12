import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp468Component } from './my-comp-468.component';

describe('MyComp468Component', () => {
  let component: MyComp468Component;
  let fixture: ComponentFixture<MyComp468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
