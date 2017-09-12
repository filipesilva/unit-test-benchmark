import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5308Component } from './my-comp-5308.component';

describe('MyComp5308Component', () => {
  let component: MyComp5308Component;
  let fixture: ComponentFixture<MyComp5308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
