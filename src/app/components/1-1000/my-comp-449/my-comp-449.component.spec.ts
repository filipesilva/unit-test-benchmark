import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp449Component } from './my-comp-449.component';

describe('MyComp449Component', () => {
  let component: MyComp449Component;
  let fixture: ComponentFixture<MyComp449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
