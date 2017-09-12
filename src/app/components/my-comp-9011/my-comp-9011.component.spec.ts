import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9011Component } from './my-comp-9011.component';

describe('MyComp9011Component', () => {
  let component: MyComp9011Component;
  let fixture: ComponentFixture<MyComp9011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
