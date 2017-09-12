import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5070Component } from './my-comp-5070.component';

describe('MyComp5070Component', () => {
  let component: MyComp5070Component;
  let fixture: ComponentFixture<MyComp5070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
