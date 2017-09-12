import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2176Component } from './my-comp-2176.component';

describe('MyComp2176Component', () => {
  let component: MyComp2176Component;
  let fixture: ComponentFixture<MyComp2176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
