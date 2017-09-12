import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7931Component } from './my-comp-7931.component';

describe('MyComp7931Component', () => {
  let component: MyComp7931Component;
  let fixture: ComponentFixture<MyComp7931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
