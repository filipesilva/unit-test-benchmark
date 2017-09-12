import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9165Component } from './my-comp-9165.component';

describe('MyComp9165Component', () => {
  let component: MyComp9165Component;
  let fixture: ComponentFixture<MyComp9165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
