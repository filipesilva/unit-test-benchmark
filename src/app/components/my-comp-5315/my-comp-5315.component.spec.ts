import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5315Component } from './my-comp-5315.component';

describe('MyComp5315Component', () => {
  let component: MyComp5315Component;
  let fixture: ComponentFixture<MyComp5315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
