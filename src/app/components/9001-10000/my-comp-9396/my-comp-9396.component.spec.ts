import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9396Component } from './my-comp-9396.component';

describe('MyComp9396Component', () => {
  let component: MyComp9396Component;
  let fixture: ComponentFixture<MyComp9396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
