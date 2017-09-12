import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3356Component } from './my-comp-3356.component';

describe('MyComp3356Component', () => {
  let component: MyComp3356Component;
  let fixture: ComponentFixture<MyComp3356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
