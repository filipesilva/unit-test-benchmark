import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4880Component } from './my-comp-4880.component';

describe('MyComp4880Component', () => {
  let component: MyComp4880Component;
  let fixture: ComponentFixture<MyComp4880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
