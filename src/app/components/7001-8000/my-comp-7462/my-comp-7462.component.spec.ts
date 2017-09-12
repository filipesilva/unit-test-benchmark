import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7462Component } from './my-comp-7462.component';

describe('MyComp7462Component', () => {
  let component: MyComp7462Component;
  let fixture: ComponentFixture<MyComp7462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
