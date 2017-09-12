import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1432Component } from './my-comp-1432.component';

describe('MyComp1432Component', () => {
  let component: MyComp1432Component;
  let fixture: ComponentFixture<MyComp1432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
