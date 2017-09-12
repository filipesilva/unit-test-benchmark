import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7673Component } from './my-comp-7673.component';

describe('MyComp7673Component', () => {
  let component: MyComp7673Component;
  let fixture: ComponentFixture<MyComp7673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
