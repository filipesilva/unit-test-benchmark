import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1840Component } from './my-comp-1840.component';

describe('MyComp1840Component', () => {
  let component: MyComp1840Component;
  let fixture: ComponentFixture<MyComp1840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
