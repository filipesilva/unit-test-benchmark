import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2174Component } from './my-comp-2174.component';

describe('MyComp2174Component', () => {
  let component: MyComp2174Component;
  let fixture: ComponentFixture<MyComp2174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
