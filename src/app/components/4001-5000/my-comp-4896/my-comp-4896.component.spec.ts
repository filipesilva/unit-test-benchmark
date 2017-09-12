import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4896Component } from './my-comp-4896.component';

describe('MyComp4896Component', () => {
  let component: MyComp4896Component;
  let fixture: ComponentFixture<MyComp4896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
