import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9498Component } from './my-comp-9498.component';

describe('MyComp9498Component', () => {
  let component: MyComp9498Component;
  let fixture: ComponentFixture<MyComp9498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
