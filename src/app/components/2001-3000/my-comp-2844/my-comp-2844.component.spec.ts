import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2844Component } from './my-comp-2844.component';

describe('MyComp2844Component', () => {
  let component: MyComp2844Component;
  let fixture: ComponentFixture<MyComp2844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
