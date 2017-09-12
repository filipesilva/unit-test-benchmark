import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7354Component } from './my-comp-7354.component';

describe('MyComp7354Component', () => {
  let component: MyComp7354Component;
  let fixture: ComponentFixture<MyComp7354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
