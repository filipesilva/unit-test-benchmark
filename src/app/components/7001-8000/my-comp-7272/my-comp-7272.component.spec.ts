import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7272Component } from './my-comp-7272.component';

describe('MyComp7272Component', () => {
  let component: MyComp7272Component;
  let fixture: ComponentFixture<MyComp7272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
