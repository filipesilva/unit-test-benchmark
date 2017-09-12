import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2784Component } from './my-comp-2784.component';

describe('MyComp2784Component', () => {
  let component: MyComp2784Component;
  let fixture: ComponentFixture<MyComp2784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
