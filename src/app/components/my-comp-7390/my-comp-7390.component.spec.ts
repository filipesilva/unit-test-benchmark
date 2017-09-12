import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7390Component } from './my-comp-7390.component';

describe('MyComp7390Component', () => {
  let component: MyComp7390Component;
  let fixture: ComponentFixture<MyComp7390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
