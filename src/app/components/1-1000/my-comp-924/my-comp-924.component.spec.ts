import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp924Component } from './my-comp-924.component';

describe('MyComp924Component', () => {
  let component: MyComp924Component;
  let fixture: ComponentFixture<MyComp924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
