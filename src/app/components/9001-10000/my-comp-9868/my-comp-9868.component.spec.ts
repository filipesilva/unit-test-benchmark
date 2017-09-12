import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9868Component } from './my-comp-9868.component';

describe('MyComp9868Component', () => {
  let component: MyComp9868Component;
  let fixture: ComponentFixture<MyComp9868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
