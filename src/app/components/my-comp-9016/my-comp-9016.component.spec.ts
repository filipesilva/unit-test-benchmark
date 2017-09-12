import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9016Component } from './my-comp-9016.component';

describe('MyComp9016Component', () => {
  let component: MyComp9016Component;
  let fixture: ComponentFixture<MyComp9016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
