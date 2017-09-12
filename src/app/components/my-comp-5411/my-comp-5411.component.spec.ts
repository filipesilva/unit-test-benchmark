import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5411Component } from './my-comp-5411.component';

describe('MyComp5411Component', () => {
  let component: MyComp5411Component;
  let fixture: ComponentFixture<MyComp5411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
