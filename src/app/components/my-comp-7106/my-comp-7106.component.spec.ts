import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7106Component } from './my-comp-7106.component';

describe('MyComp7106Component', () => {
  let component: MyComp7106Component;
  let fixture: ComponentFixture<MyComp7106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
