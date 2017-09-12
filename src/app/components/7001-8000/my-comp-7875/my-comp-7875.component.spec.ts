import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7875Component } from './my-comp-7875.component';

describe('MyComp7875Component', () => {
  let component: MyComp7875Component;
  let fixture: ComponentFixture<MyComp7875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
