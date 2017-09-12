import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4595Component } from './my-comp-4595.component';

describe('MyComp4595Component', () => {
  let component: MyComp4595Component;
  let fixture: ComponentFixture<MyComp4595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
