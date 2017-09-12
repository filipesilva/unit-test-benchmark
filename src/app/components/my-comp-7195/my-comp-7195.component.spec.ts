import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7195Component } from './my-comp-7195.component';

describe('MyComp7195Component', () => {
  let component: MyComp7195Component;
  let fixture: ComponentFixture<MyComp7195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
