import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2954Component } from './my-comp-2954.component';

describe('MyComp2954Component', () => {
  let component: MyComp2954Component;
  let fixture: ComponentFixture<MyComp2954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
