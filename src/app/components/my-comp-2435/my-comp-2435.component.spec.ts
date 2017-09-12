import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2435Component } from './my-comp-2435.component';

describe('MyComp2435Component', () => {
  let component: MyComp2435Component;
  let fixture: ComponentFixture<MyComp2435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
