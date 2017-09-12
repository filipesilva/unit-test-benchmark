import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5075Component } from './my-comp-5075.component';

describe('MyComp5075Component', () => {
  let component: MyComp5075Component;
  let fixture: ComponentFixture<MyComp5075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
