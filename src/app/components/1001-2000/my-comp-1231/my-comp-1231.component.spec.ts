import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1231Component } from './my-comp-1231.component';

describe('MyComp1231Component', () => {
  let component: MyComp1231Component;
  let fixture: ComponentFixture<MyComp1231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
