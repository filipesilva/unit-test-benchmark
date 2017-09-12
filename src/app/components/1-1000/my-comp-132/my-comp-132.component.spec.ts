import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp132Component } from './my-comp-132.component';

describe('MyComp132Component', () => {
  let component: MyComp132Component;
  let fixture: ComponentFixture<MyComp132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
