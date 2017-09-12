import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7141Component } from './my-comp-7141.component';

describe('MyComp7141Component', () => {
  let component: MyComp7141Component;
  let fixture: ComponentFixture<MyComp7141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
