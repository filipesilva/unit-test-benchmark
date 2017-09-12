import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5509Component } from './my-comp-5509.component';

describe('MyComp5509Component', () => {
  let component: MyComp5509Component;
  let fixture: ComponentFixture<MyComp5509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
