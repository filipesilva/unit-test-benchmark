import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4155Component } from './my-comp-4155.component';

describe('MyComp4155Component', () => {
  let component: MyComp4155Component;
  let fixture: ComponentFixture<MyComp4155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
