import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5642Component } from './my-comp-5642.component';

describe('MyComp5642Component', () => {
  let component: MyComp5642Component;
  let fixture: ComponentFixture<MyComp5642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
