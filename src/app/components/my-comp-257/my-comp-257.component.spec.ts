import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp257Component } from './my-comp-257.component';

describe('MyComp257Component', () => {
  let component: MyComp257Component;
  let fixture: ComponentFixture<MyComp257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
