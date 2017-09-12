import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9548Component } from './my-comp-9548.component';

describe('MyComp9548Component', () => {
  let component: MyComp9548Component;
  let fixture: ComponentFixture<MyComp9548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
