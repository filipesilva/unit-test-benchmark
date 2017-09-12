import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9780Component } from './my-comp-9780.component';

describe('MyComp9780Component', () => {
  let component: MyComp9780Component;
  let fixture: ComponentFixture<MyComp9780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
