import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp474Component } from './my-comp-474.component';

describe('MyComp474Component', () => {
  let component: MyComp474Component;
  let fixture: ComponentFixture<MyComp474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
