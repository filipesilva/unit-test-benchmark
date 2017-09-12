import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp190Component } from './my-comp-190.component';

describe('MyComp190Component', () => {
  let component: MyComp190Component;
  let fixture: ComponentFixture<MyComp190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
