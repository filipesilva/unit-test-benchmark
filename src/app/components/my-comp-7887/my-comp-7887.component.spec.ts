import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7887Component } from './my-comp-7887.component';

describe('MyComp7887Component', () => {
  let component: MyComp7887Component;
  let fixture: ComponentFixture<MyComp7887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
