import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2268Component } from './my-comp-2268.component';

describe('MyComp2268Component', () => {
  let component: MyComp2268Component;
  let fixture: ComponentFixture<MyComp2268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
