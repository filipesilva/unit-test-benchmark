import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9447Component } from './my-comp-9447.component';

describe('MyComp9447Component', () => {
  let component: MyComp9447Component;
  let fixture: ComponentFixture<MyComp9447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
