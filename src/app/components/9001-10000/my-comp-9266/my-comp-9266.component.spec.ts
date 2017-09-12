import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9266Component } from './my-comp-9266.component';

describe('MyComp9266Component', () => {
  let component: MyComp9266Component;
  let fixture: ComponentFixture<MyComp9266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
