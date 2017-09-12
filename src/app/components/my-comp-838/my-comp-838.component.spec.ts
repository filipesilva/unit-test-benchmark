import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp838Component } from './my-comp-838.component';

describe('MyComp838Component', () => {
  let component: MyComp838Component;
  let fixture: ComponentFixture<MyComp838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
