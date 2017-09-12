import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7930Component } from './my-comp-7930.component';

describe('MyComp7930Component', () => {
  let component: MyComp7930Component;
  let fixture: ComponentFixture<MyComp7930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
