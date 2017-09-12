import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3391Component } from './my-comp-3391.component';

describe('MyComp3391Component', () => {
  let component: MyComp3391Component;
  let fixture: ComponentFixture<MyComp3391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
