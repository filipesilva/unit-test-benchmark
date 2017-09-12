import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9061Component } from './my-comp-9061.component';

describe('MyComp9061Component', () => {
  let component: MyComp9061Component;
  let fixture: ComponentFixture<MyComp9061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
