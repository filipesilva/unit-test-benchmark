import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp59Component } from './my-comp-59.component';

describe('MyComp59Component', () => {
  let component: MyComp59Component;
  let fixture: ComponentFixture<MyComp59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
