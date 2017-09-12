import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5547Component } from './my-comp-5547.component';

describe('MyComp5547Component', () => {
  let component: MyComp5547Component;
  let fixture: ComponentFixture<MyComp5547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
