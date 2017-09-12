import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4805Component } from './my-comp-4805.component';

describe('MyComp4805Component', () => {
  let component: MyComp4805Component;
  let fixture: ComponentFixture<MyComp4805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
