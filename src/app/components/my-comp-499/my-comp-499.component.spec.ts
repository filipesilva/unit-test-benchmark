import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp499Component } from './my-comp-499.component';

describe('MyComp499Component', () => {
  let component: MyComp499Component;
  let fixture: ComponentFixture<MyComp499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
