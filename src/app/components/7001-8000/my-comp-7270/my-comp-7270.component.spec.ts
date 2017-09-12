import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7270Component } from './my-comp-7270.component';

describe('MyComp7270Component', () => {
  let component: MyComp7270Component;
  let fixture: ComponentFixture<MyComp7270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
