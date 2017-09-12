import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1681Component } from './my-comp-1681.component';

describe('MyComp1681Component', () => {
  let component: MyComp1681Component;
  let fixture: ComponentFixture<MyComp1681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
