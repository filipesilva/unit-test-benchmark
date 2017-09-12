import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4878Component } from './my-comp-4878.component';

describe('MyComp4878Component', () => {
  let component: MyComp4878Component;
  let fixture: ComponentFixture<MyComp4878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
