import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp670Component } from './my-comp-670.component';

describe('MyComp670Component', () => {
  let component: MyComp670Component;
  let fixture: ComponentFixture<MyComp670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
