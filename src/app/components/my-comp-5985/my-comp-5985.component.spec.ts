import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5985Component } from './my-comp-5985.component';

describe('MyComp5985Component', () => {
  let component: MyComp5985Component;
  let fixture: ComponentFixture<MyComp5985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
