import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6436Component } from './my-comp-6436.component';

describe('MyComp6436Component', () => {
  let component: MyComp6436Component;
  let fixture: ComponentFixture<MyComp6436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
