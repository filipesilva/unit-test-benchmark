import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7436Component } from './my-comp-7436.component';

describe('MyComp7436Component', () => {
  let component: MyComp7436Component;
  let fixture: ComponentFixture<MyComp7436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
