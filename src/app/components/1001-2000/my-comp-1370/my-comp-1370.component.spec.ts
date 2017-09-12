import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1370Component } from './my-comp-1370.component';

describe('MyComp1370Component', () => {
  let component: MyComp1370Component;
  let fixture: ComponentFixture<MyComp1370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
