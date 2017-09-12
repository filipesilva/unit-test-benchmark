import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9198Component } from './my-comp-9198.component';

describe('MyComp9198Component', () => {
  let component: MyComp9198Component;
  let fixture: ComponentFixture<MyComp9198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
