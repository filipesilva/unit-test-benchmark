import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7061Component } from './my-comp-7061.component';

describe('MyComp7061Component', () => {
  let component: MyComp7061Component;
  let fixture: ComponentFixture<MyComp7061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
