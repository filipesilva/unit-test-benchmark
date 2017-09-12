import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp845Component } from './my-comp-845.component';

describe('MyComp845Component', () => {
  let component: MyComp845Component;
  let fixture: ComponentFixture<MyComp845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
