import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1989Component } from './my-comp-1989.component';

describe('MyComp1989Component', () => {
  let component: MyComp1989Component;
  let fixture: ComponentFixture<MyComp1989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
