import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp400Component } from './my-comp-400.component';

describe('MyComp400Component', () => {
  let component: MyComp400Component;
  let fixture: ComponentFixture<MyComp400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
