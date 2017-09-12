import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2127Component } from './my-comp-2127.component';

describe('MyComp2127Component', () => {
  let component: MyComp2127Component;
  let fixture: ComponentFixture<MyComp2127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
