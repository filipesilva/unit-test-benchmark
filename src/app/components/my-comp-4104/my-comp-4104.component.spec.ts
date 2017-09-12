import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4104Component } from './my-comp-4104.component';

describe('MyComp4104Component', () => {
  let component: MyComp4104Component;
  let fixture: ComponentFixture<MyComp4104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
