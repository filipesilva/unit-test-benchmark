import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7682Component } from './my-comp-7682.component';

describe('MyComp7682Component', () => {
  let component: MyComp7682Component;
  let fixture: ComponentFixture<MyComp7682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
