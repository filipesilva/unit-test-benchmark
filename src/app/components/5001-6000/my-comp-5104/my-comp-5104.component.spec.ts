import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5104Component } from './my-comp-5104.component';

describe('MyComp5104Component', () => {
  let component: MyComp5104Component;
  let fixture: ComponentFixture<MyComp5104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
