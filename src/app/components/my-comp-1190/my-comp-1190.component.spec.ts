import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1190Component } from './my-comp-1190.component';

describe('MyComp1190Component', () => {
  let component: MyComp1190Component;
  let fixture: ComponentFixture<MyComp1190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
