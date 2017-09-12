import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7337Component } from './my-comp-7337.component';

describe('MyComp7337Component', () => {
  let component: MyComp7337Component;
  let fixture: ComponentFixture<MyComp7337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
