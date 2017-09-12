import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp837Component } from './my-comp-837.component';

describe('MyComp837Component', () => {
  let component: MyComp837Component;
  let fixture: ComponentFixture<MyComp837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
