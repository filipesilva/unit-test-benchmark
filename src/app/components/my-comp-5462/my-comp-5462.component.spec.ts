import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5462Component } from './my-comp-5462.component';

describe('MyComp5462Component', () => {
  let component: MyComp5462Component;
  let fixture: ComponentFixture<MyComp5462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
