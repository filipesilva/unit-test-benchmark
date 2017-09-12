import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5077Component } from './my-comp-5077.component';

describe('MyComp5077Component', () => {
  let component: MyComp5077Component;
  let fixture: ComponentFixture<MyComp5077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
