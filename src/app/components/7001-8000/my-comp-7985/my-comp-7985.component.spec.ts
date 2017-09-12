import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7985Component } from './my-comp-7985.component';

describe('MyComp7985Component', () => {
  let component: MyComp7985Component;
  let fixture: ComponentFixture<MyComp7985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
