import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp240Component } from './my-comp-240.component';

describe('MyComp240Component', () => {
  let component: MyComp240Component;
  let fixture: ComponentFixture<MyComp240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
