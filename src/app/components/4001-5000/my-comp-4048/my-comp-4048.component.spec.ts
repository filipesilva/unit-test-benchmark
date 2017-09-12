import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4048Component } from './my-comp-4048.component';

describe('MyComp4048Component', () => {
  let component: MyComp4048Component;
  let fixture: ComponentFixture<MyComp4048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
