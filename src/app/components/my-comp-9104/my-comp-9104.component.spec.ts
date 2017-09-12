import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9104Component } from './my-comp-9104.component';

describe('MyComp9104Component', () => {
  let component: MyComp9104Component;
  let fixture: ComponentFixture<MyComp9104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
