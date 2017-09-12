import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4645Component } from './my-comp-4645.component';

describe('MyComp4645Component', () => {
  let component: MyComp4645Component;
  let fixture: ComponentFixture<MyComp4645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
