import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4112Component } from './my-comp-4112.component';

describe('MyComp4112Component', () => {
  let component: MyComp4112Component;
  let fixture: ComponentFixture<MyComp4112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
