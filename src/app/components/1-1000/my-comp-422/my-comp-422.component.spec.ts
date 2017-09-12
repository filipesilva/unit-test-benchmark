import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp422Component } from './my-comp-422.component';

describe('MyComp422Component', () => {
  let component: MyComp422Component;
  let fixture: ComponentFixture<MyComp422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
