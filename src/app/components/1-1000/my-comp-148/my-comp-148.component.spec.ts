import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp148Component } from './my-comp-148.component';

describe('MyComp148Component', () => {
  let component: MyComp148Component;
  let fixture: ComponentFixture<MyComp148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
