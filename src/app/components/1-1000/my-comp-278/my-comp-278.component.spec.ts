import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp278Component } from './my-comp-278.component';

describe('MyComp278Component', () => {
  let component: MyComp278Component;
  let fixture: ComponentFixture<MyComp278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
