import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2346Component } from './my-comp-2346.component';

describe('MyComp2346Component', () => {
  let component: MyComp2346Component;
  let fixture: ComponentFixture<MyComp2346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
