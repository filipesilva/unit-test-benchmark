import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2548Component } from './my-comp-2548.component';

describe('MyComp2548Component', () => {
  let component: MyComp2548Component;
  let fixture: ComponentFixture<MyComp2548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
