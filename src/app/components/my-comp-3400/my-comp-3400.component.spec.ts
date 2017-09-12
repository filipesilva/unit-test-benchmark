import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3400Component } from './my-comp-3400.component';

describe('MyComp3400Component', () => {
  let component: MyComp3400Component;
  let fixture: ComponentFixture<MyComp3400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
