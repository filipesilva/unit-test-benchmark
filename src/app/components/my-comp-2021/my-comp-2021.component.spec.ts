import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2021Component } from './my-comp-2021.component';

describe('MyComp2021Component', () => {
  let component: MyComp2021Component;
  let fixture: ComponentFixture<MyComp2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
