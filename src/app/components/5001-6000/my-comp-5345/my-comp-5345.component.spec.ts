import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5345Component } from './my-comp-5345.component';

describe('MyComp5345Component', () => {
  let component: MyComp5345Component;
  let fixture: ComponentFixture<MyComp5345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
