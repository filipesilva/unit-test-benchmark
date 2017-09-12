import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5203Component } from './my-comp-5203.component';

describe('MyComp5203Component', () => {
  let component: MyComp5203Component;
  let fixture: ComponentFixture<MyComp5203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
