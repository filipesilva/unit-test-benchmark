import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3104Component } from './my-comp-3104.component';

describe('MyComp3104Component', () => {
  let component: MyComp3104Component;
  let fixture: ComponentFixture<MyComp3104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
