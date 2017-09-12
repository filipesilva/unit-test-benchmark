import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp619Component } from './my-comp-619.component';

describe('MyComp619Component', () => {
  let component: MyComp619Component;
  let fixture: ComponentFixture<MyComp619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
