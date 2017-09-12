import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1627Component } from './my-comp-1627.component';

describe('MyComp1627Component', () => {
  let component: MyComp1627Component;
  let fixture: ComponentFixture<MyComp1627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
