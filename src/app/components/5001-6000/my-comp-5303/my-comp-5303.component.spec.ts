import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5303Component } from './my-comp-5303.component';

describe('MyComp5303Component', () => {
  let component: MyComp5303Component;
  let fixture: ComponentFixture<MyComp5303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
