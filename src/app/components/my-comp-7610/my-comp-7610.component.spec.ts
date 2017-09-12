import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7610Component } from './my-comp-7610.component';

describe('MyComp7610Component', () => {
  let component: MyComp7610Component;
  let fixture: ComponentFixture<MyComp7610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
