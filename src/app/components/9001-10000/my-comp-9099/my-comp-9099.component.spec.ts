import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9099Component } from './my-comp-9099.component';

describe('MyComp9099Component', () => {
  let component: MyComp9099Component;
  let fixture: ComponentFixture<MyComp9099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
