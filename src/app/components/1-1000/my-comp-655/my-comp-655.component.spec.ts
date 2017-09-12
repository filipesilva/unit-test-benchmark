import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp655Component } from './my-comp-655.component';

describe('MyComp655Component', () => {
  let component: MyComp655Component;
  let fixture: ComponentFixture<MyComp655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
