import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp439Component } from './my-comp-439.component';

describe('MyComp439Component', () => {
  let component: MyComp439Component;
  let fixture: ComponentFixture<MyComp439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
