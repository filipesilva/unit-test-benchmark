import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1608Component } from './my-comp-1608.component';

describe('MyComp1608Component', () => {
  let component: MyComp1608Component;
  let fixture: ComponentFixture<MyComp1608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
