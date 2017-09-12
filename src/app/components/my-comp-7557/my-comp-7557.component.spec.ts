import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7557Component } from './my-comp-7557.component';

describe('MyComp7557Component', () => {
  let component: MyComp7557Component;
  let fixture: ComponentFixture<MyComp7557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
