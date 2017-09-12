import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4064Component } from './my-comp-4064.component';

describe('MyComp4064Component', () => {
  let component: MyComp4064Component;
  let fixture: ComponentFixture<MyComp4064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
