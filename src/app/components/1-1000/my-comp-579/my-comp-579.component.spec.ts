import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp579Component } from './my-comp-579.component';

describe('MyComp579Component', () => {
  let component: MyComp579Component;
  let fixture: ComponentFixture<MyComp579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
