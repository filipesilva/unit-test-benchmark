import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1536Component } from './my-comp-1536.component';

describe('MyComp1536Component', () => {
  let component: MyComp1536Component;
  let fixture: ComponentFixture<MyComp1536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
