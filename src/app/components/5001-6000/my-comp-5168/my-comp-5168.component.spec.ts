import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5168Component } from './my-comp-5168.component';

describe('MyComp5168Component', () => {
  let component: MyComp5168Component;
  let fixture: ComponentFixture<MyComp5168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
