import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1240Component } from './my-comp-1240.component';

describe('MyComp1240Component', () => {
  let component: MyComp1240Component;
  let fixture: ComponentFixture<MyComp1240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
