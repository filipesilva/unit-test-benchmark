import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5889Component } from './my-comp-5889.component';

describe('MyComp5889Component', () => {
  let component: MyComp5889Component;
  let fixture: ComponentFixture<MyComp5889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
