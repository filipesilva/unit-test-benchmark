import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7334Component } from './my-comp-7334.component';

describe('MyComp7334Component', () => {
  let component: MyComp7334Component;
  let fixture: ComponentFixture<MyComp7334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
