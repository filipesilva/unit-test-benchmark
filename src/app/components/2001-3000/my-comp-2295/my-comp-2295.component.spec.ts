import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2295Component } from './my-comp-2295.component';

describe('MyComp2295Component', () => {
  let component: MyComp2295Component;
  let fixture: ComponentFixture<MyComp2295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
