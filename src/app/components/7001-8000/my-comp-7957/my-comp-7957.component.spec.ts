import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7957Component } from './my-comp-7957.component';

describe('MyComp7957Component', () => {
  let component: MyComp7957Component;
  let fixture: ComponentFixture<MyComp7957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
