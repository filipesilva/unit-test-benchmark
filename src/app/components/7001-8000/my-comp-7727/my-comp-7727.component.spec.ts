import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7727Component } from './my-comp-7727.component';

describe('MyComp7727Component', () => {
  let component: MyComp7727Component;
  let fixture: ComponentFixture<MyComp7727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
