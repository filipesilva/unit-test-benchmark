import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2882Component } from './my-comp-2882.component';

describe('MyComp2882Component', () => {
  let component: MyComp2882Component;
  let fixture: ComponentFixture<MyComp2882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
