import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7447Component } from './my-comp-7447.component';

describe('MyComp7447Component', () => {
  let component: MyComp7447Component;
  let fixture: ComponentFixture<MyComp7447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
