import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5405Component } from './my-comp-5405.component';

describe('MyComp5405Component', () => {
  let component: MyComp5405Component;
  let fixture: ComponentFixture<MyComp5405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
