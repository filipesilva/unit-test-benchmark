import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2020Component } from './my-comp-2020.component';

describe('MyComp2020Component', () => {
  let component: MyComp2020Component;
  let fixture: ComponentFixture<MyComp2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
