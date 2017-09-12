import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5045Component } from './my-comp-5045.component';

describe('MyComp5045Component', () => {
  let component: MyComp5045Component;
  let fixture: ComponentFixture<MyComp5045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
