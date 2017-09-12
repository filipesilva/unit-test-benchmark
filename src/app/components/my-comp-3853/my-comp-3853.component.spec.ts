import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3853Component } from './my-comp-3853.component';

describe('MyComp3853Component', () => {
  let component: MyComp3853Component;
  let fixture: ComponentFixture<MyComp3853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
