import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6104Component } from './my-comp-6104.component';

describe('MyComp6104Component', () => {
  let component: MyComp6104Component;
  let fixture: ComponentFixture<MyComp6104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
