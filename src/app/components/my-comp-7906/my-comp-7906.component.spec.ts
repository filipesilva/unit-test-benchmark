import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7906Component } from './my-comp-7906.component';

describe('MyComp7906Component', () => {
  let component: MyComp7906Component;
  let fixture: ComponentFixture<MyComp7906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
