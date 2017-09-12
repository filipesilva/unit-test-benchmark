import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9121Component } from './my-comp-9121.component';

describe('MyComp9121Component', () => {
  let component: MyComp9121Component;
  let fixture: ComponentFixture<MyComp9121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
