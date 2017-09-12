import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7200Component } from './my-comp-7200.component';

describe('MyComp7200Component', () => {
  let component: MyComp7200Component;
  let fixture: ComponentFixture<MyComp7200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
