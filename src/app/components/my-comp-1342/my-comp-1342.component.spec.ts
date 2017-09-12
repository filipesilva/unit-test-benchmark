import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1342Component } from './my-comp-1342.component';

describe('MyComp1342Component', () => {
  let component: MyComp1342Component;
  let fixture: ComponentFixture<MyComp1342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
