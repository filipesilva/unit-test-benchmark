import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5385Component } from './my-comp-5385.component';

describe('MyComp5385Component', () => {
  let component: MyComp5385Component;
  let fixture: ComponentFixture<MyComp5385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
