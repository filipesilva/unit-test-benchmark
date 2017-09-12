import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7003Component } from './my-comp-7003.component';

describe('MyComp7003Component', () => {
  let component: MyComp7003Component;
  let fixture: ComponentFixture<MyComp7003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
