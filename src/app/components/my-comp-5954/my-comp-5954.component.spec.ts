import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5954Component } from './my-comp-5954.component';

describe('MyComp5954Component', () => {
  let component: MyComp5954Component;
  let fixture: ComponentFixture<MyComp5954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
