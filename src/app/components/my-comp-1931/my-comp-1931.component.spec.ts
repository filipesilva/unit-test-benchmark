import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1931Component } from './my-comp-1931.component';

describe('MyComp1931Component', () => {
  let component: MyComp1931Component;
  let fixture: ComponentFixture<MyComp1931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
