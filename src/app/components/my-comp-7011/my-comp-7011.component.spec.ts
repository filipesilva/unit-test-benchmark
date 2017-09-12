import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7011Component } from './my-comp-7011.component';

describe('MyComp7011Component', () => {
  let component: MyComp7011Component;
  let fixture: ComponentFixture<MyComp7011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
