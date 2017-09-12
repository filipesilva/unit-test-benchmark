import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2131Component } from './my-comp-2131.component';

describe('MyComp2131Component', () => {
  let component: MyComp2131Component;
  let fixture: ComponentFixture<MyComp2131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
