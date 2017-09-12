import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2965Component } from './my-comp-2965.component';

describe('MyComp2965Component', () => {
  let component: MyComp2965Component;
  let fixture: ComponentFixture<MyComp2965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
