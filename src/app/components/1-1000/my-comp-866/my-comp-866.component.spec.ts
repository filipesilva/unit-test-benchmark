import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp866Component } from './my-comp-866.component';

describe('MyComp866Component', () => {
  let component: MyComp866Component;
  let fixture: ComponentFixture<MyComp866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
