import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3643Component } from './my-comp-3643.component';

describe('MyComp3643Component', () => {
  let component: MyComp3643Component;
  let fixture: ComponentFixture<MyComp3643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
