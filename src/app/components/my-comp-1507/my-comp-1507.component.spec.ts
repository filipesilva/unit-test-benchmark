import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1507Component } from './my-comp-1507.component';

describe('MyComp1507Component', () => {
  let component: MyComp1507Component;
  let fixture: ComponentFixture<MyComp1507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
