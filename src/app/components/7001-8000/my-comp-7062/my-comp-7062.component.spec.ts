import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7062Component } from './my-comp-7062.component';

describe('MyComp7062Component', () => {
  let component: MyComp7062Component;
  let fixture: ComponentFixture<MyComp7062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
